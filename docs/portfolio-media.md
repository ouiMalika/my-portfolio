# Portfolio media — November 2026

All new CAD renders contain no added titles, labels, dimensions or callouts. No generated library scene is included.

## CAD sources

- Taste Topology: `~/Desktop/taste-topology/cad/output_metric/stl_print_only/`, four original 190 mm print meshes. Board reconstruction follows `cad/board/generate_board.py`: 62 × 26 inch plywood board, six 18 × 10 inch compartments, 12 relief panels, top-hinged lids. Rendered backing is 1/4 inch, matching the proposed MDF material. These are development views; lid restraints, attachment hardware and final mounting remain to be prototyped. The print meshes retain their integral bases, so backing is mostly concealed in the assembled view.
- Tacti: `~/Downloads/tacti_v06/STEP/01_housing.step`, `02_sliding_lid.step`, `03_contact_L.step`, `04_contact_R.step`. STEP components preserve assembly orientation; lid and contact inserts are translated for the exploded view. No electronics or unmodeled phone attachment were invented.
- Lip mask: `~/Downloads/Omnilux Lip Mask.step`, first six solids belonging to the first assembly. Later duplicated assemblies and alternative designs in the same STEP are excluded. Original geometry is separated in the depth direction into four layers. Colors illustrate component separation rather than a certified material specification.
- Icarus: existing `public/images/design/icarus/render-exploded.jpg` is promoted to a dedicated wide section without altering the original artwork.

`render-portfolio-cad.py` runs in Blender 4.4 (Cycles, orthographic camera). `export-portfolio-meshes.py` tessellates STEP sources with CadQuery. Local scratch meshes are written to `/tmp/portfolio-assets/mesh`. Local CAD source paths must be adjusted on another machine. Render outputs are committed so the website build needs neither Blender nor CAD files.

## Interface GIFs

Captured from the actual local Taste Topology app at port 5175 with Playwright, using its preview controls. Preview runs are excluded from recorded study sessions. `intro.gif`, `digital.gif`, and `physical.gif` retain actual interface text. Each frame holds for 1.8 seconds; animations loop. The no-title requirement applies to rendered product images, not the working interface.

## Voice Directed Story Worlds

Text and the three embedded images come from `~/Downloads/Malika_Project_3_Research_and_Concept.docx`. Images were extracted without alteration. The page explicitly identifies concept development, speculative 2035 context, and a planned prepared-scene prototype. It does not claim live generation or completed user testing.

## Presentation

Eames multi-image sections use equal 4:3 stages and `object-fit: contain`. Original aspect ratios and full image contents are preserved; the lightbox opens the original image.
