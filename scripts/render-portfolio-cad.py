"""Run with Blender --background --factory-startup --python this_file -- [board|tacti|mask].
Local source mesh paths and dimensions documented in docs/portfolio-media.md.
"""
import bpy, math, sys
from mathutils import Vector
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
MODE=sys.argv[-1]
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def mat(name,color,rough=.55):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF');p.inputs['Base Color'].default_value=(*color,1);p.inputs['Roughness'].default_value=rough
 return m
wood=mat('Natural birch plywood',(.64,.43,.24));white=mat('Ivory PLA',(.86,.85,.79));grey=mat('Grey MDF backing',(.28,.29,.30));red=mat('Coral PLA',(.61,.07,.045));silicone=mat('Soft silicone',(.72,.65,.59));dark=mat('Hinge',(.25,.26,.25))
# Fine grain; restrained enough to preserve CAD geometry.
n=wood.node_tree.nodes;l=wood.node_tree.links
tex=n.new('ShaderNodeTexNoise');tex.inputs['Scale'].default_value=5;tex.inputs['Detail'].default_value=2
coord=n.new('ShaderNodeTexCoord');mapping=n.new('ShaderNodeVectorMath');mapping.operation='MULTIPLY';mapping.inputs[1].default_value=(2,95,3)
l.new(coord.outputs['Generated'],mapping.inputs[0]);l.new(mapping.outputs[0],tex.inputs['Vector'])
r=n.new('ShaderNodeValToRGB');r.color_ramp.elements[0].color=(.40,.24,.12,1);r.color_ramp.elements[1].color=(.73,.56,.35,1);l.new(tex.outputs['Fac'],r.inputs[0]);l.new(r.outputs[0],n.get('Principled BSDF').inputs['Base Color'])
def box(name,xyz,size,material):
 bpy.ops.mesh.primitive_cube_add(size=1,location=tuple(xyz[i]+size[i]/2 for i in range(3)));o=bpy.context.object;o.name=name;o.dimensions=size;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(material)
 bevel=o.modifiers.new('Soft manufactured edge','BEVEL');bevel.width=min(size)*.08;bevel.segments=2;o.modifiers.new('Normals','WEIGHTED_NORMAL');return o
def stl(path,material,offset=(0,0,0)):
 if hasattr(bpy.ops.wm,'stl_import'): bpy.ops.wm.stl_import(filepath=str(path))
 else: bpy.ops.import_mesh.stl(filepath=str(path))
 o=bpy.context.object;o.location=offset;o.data.materials.clear();o.data.materials.append(material);return o
def render(path,direction=(1,-1,1),pad=1.18):
 bpy.context.view_layer.update()
 objs=[o for o in bpy.context.scene.objects if o.type=='MESH']
 pts=[o.matrix_world@Vector(c) for o in objs for c in o.bound_box]
 lo=Vector(tuple(min(p[i] for p in pts) for i in range(3)));hi=Vector(tuple(max(p[i] for p in pts) for i in range(3)));center=(lo+hi)/2;span=(hi-lo).length
 bpy.ops.object.camera_add(location=center+Vector(direction).normalized()*span*2.5);cam=bpy.context.object;cam.rotation_euler=(center-cam.location).to_track_quat('-Z','Y').to_euler();cam.data.type='ORTHO';cam.data.clip_end=span*10;cam.data.clip_start=.01
 bpy.context.view_layer.update();inv=cam.matrix_world.inverted();cp=[inv@p for p in pts];w=max(p.x for p in cp)-min(p.x for p in cp);h=max(p.y for p in cp)-min(p.y for p in cp);cam.data.ortho_scale=max(w,h*1.5)*pad
 cam.location += cam.matrix_world.to_quaternion() @ Vector(((max(p.x for p in cp)+min(p.x for p in cp))/2,(max(p.y for p in cp)+min(p.y for p in cp))/2,0))
 sc=bpy.context.scene;sc.camera=cam;sc.render.engine='CYCLES';sc.cycles.samples=32;sc.cycles.use_denoising=True
 sc.world.color=(.8,.8,.8);sc.world.use_nodes=True;sc.world.node_tree.nodes['Background'].inputs[0].default_value=(.94,.94,.94,1);sc.world.node_tree.nodes['Background'].inputs[1].default_value=.4
 lights=[]
 for d,power,size in [((-1,-2,3),90,1.1),((2,1,2),30,1.5)]:
  bpy.ops.object.light_add(type='AREA',location=center+Vector(d)*span);o=bpy.context.object;o.data.energy=power*span*span;o.data.shape='DISK';o.data.size=span*size;o.rotation_euler=(center-o.location).to_track_quat('-Z','Y').to_euler();lights.append(o)
 sc.render.resolution_x=1800;sc.render.resolution_y=1200;sc.render.resolution_percentage=100;sc.render.image_settings.file_format='PNG';sc.render.filepath=str(ROOT/path);sc.view_settings.view_transform='Standard';sc.render.film_transparent=True
 sc.use_nodes=True;tree=sc.node_tree;tree.nodes.clear();rl=tree.nodes.new('CompositorNodeRLayers');over=tree.nodes.new('CompositorNodeAlphaOver');over.inputs[1].default_value=(.94,.93,.91,1);comp=tree.nodes.new('CompositorNodeComposite');tree.links.new(rl.outputs['Image'],over.inputs[2]);tree.links.new(over.outputs[0],comp.inputs[0])
 bpy.ops.wm.save_as_mainfile(filepath='/tmp/portfolio-assets/'+MODE+'.blend');bpy.ops.render.render(write_still=True)
 for o in lights+[cam]:bpy.data.objects.remove(o,do_unlink=True)
if MODE=='board':
 for exploded in [False,True]:
  bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
  box('Plywood board',(0,0,0),(1574.8,660.4,12.7),wood)
  pairs=['AB','CD','AC','BD','AD','BC']
  for k,pair in enumerate(pairs):
   x=50.8+k%3*508;y=660.4-50.8-254-k//3*304.8;fz=72 if exploded else 12.7
   for xx,yy,ww,hh in [(x,y,457.2,6.35),(x,y+247.65,457.2,6.35),(x,y+6.35,6.35,241.3),(x+450.85,y+6.35,6.35,241.3)]:box('Poplar frame',(xx,yy,fz),(ww,hh,25.4),wood)
   for j,letter in enumerate(pair):
    px=x+(457.2-405.4)/2+j*215.4;py=y+32;z=130 if exploded else 12.7
    box('Grey backing',(px,py,z),(190,190,6.35),grey)
    stl('/Users/malikek/Desktop/taste-topology/cad/output_metric/stl_print_only/'+letter+'_flat_top_190mm.stl',white,(px,py,z+(65 if exploded else 6.35)))
   if exploded:box('Foam board lid',(x,y,300),(457.2,254,4.7625),white)
   else:
    # All lids open 90 degrees; fixed hinge line along upper edge.
    box('Open lid',(x,y+254,38.1),(457.2,4.7625,254),white)
    box('Flexible hinge',(x,y+250,34),(457.2,8,5),dark)
  render('public/images/research/taste/cad/'+('exploded.png' if exploded else 'assembly.png'),(1,-1.6,2.7),1.12)
elif MODE=='tacti':
 for name,material,offset in [('01_housing',white,(0,0,0)),('02_sliding_lid',white,(0,0,55)),('03_contact_L',red,(-30,0,12)),('04_contact_R',red,(30,0,12))]:stl('/tmp/portfolio-assets/mesh/'+name+'.stl',material,offset)
 render('public/images/design/tacti/cad/exploded.png',(1,-1.3,1.3),1.2)
elif MODE=='mask':
 for i,layer in [(0,0),(1,2),(2,1),(3,2),(4,3),(5,3)]:
  stl('/tmp/portfolio-assets/mesh/Omnilux_Lip_Mask'+str(i)+'.stl',white if i in [0,1,3] else silicone,(0,layer*40,0))
 render('public/images/design/omnilux/cad/exploded.png',(1,-2,1),1.2)

elif MODE=='panels':
 for i,letter in enumerate('ABCD'):
  stl('/Users/malikek/Desktop/taste-topology/cad/output_metric/stl_print_only/'+letter+'_flat_top_190mm.stl',white,((i%2)*225,(1-i//2)*225,0))
 render('public/images/research/taste/cad/four-designs.png',(.25,-.7,1.6),1.12)
