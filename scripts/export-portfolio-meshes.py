"""Tessellate existing STEP assemblies for render-portfolio-cad.py (requires CadQuery)."""
import cadquery as cq
from pathlib import Path
out = Path('/tmp/portfolio-assets/mesh')
out.mkdir(parents=True, exist_ok=True)
source = Path.home() / 'Downloads'
for path in (source / 'tacti_v06/STEP').glob('0*.step'):
    shape = cq.importers.importStep(str(path)).val()
    cq.exporters.export(shape, str(out / (path.stem + '.stl')), tolerance=.12, angularTolerance=.15)
assembly = cq.importers.importStep(str(source / 'Omnilux Lip Mask.step'))
for i, shape in enumerate(assembly.solids().vals()[:6]):
    cq.exporters.export(shape, str(out / f'Omnilux_Lip_Mask{i}.stl'), tolerance=.15, angularTolerance=.2)
