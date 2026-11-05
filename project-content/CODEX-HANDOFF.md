# Portfolio handoff for Codex

## Goal
Use this package to populate a clean design portfolio homepage and project index. Read `PORTFOLIO-CONTENT.md` first, then the project images and `images/pathfinder-portfolio/case-study.md` for further detail. Inspect the existing repository and follow its architecture and styling before making changes.

## Source and editorial constraints
- Use only facts supported by the provided files. Do not invent dates, individual roles, research activities, metrics, or outcomes. Keep fields marked “Not specified in source” out of public-facing copy or ask the owner to fill them in.
- Pathfinder case-study copy is a draft. Confirm that the live captures and stated intentions represent the author's work. Do not claim conversion gains or ownership of the underlying product.
- There are three supported projects; don't manufacture a fourth. Use the ranked shortlist in `PORTFOLIO-CONTENT.md` for a proposed project order. Personas and delivery workflow belong within Elain.
- The charging project files are drafts; confirm publication permission with the owner before publishing. The folder supplies three charging states: starting, active, and complete.
- Keep all supplied images. Titles and captions should be real page text; use the site's background instead of baking a background into images. Preserve image proportions, include descriptive alt text, and support mobile layouts.

## Asset paths
Copy the `images` folder under `public/portfolio/` (or adapt paths to the site's conventions). `ProjectVisuals.jsx` and `project-visuals.css` contain optional examples. The Pathfinder component is in `images/pathfinder-portfolio/`; its PNG paths match the assets in this package. Integrate with the actual site's design system rather than blindly replacing it.

The original Pathfinder markdown references old WebP names and a pricing screenshot not present in this folder. Use the actual PNG filenames in the content bank instead. The screenshot date is not a project date. The image archive contains no mobile or before screenshots.

Implement the homepage and project index requested by the owner, and make a case-study page if the existing site supports it. If the site is unavailable to you, prepare a concrete integration patch or report the missing repository. Review the result at desktop and mobile sizes and report any unresolved questions. Do not publish unless separately authorized.
