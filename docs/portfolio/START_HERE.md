# Portfolio Foundation

This is the single detailed guide for future Codex work on the existing portfolio. Read it before each task; root `AGENTS.md` directs sessions here.

## Goal and Guardrails

Evolve this existing website and repository into a portfolio for hybrid frontend and UX roles that also reflects Scrum Master experience. Develop two presentation options using the same accurate content:

- **Professional:** strict, elegant, and easy for traditional employers to scan.
- **Creative:** more playful and personal, retaining the existing font, colors, and background image where practical.

Use the existing site and project; do not create another repository or rebuild from scratch. The current site's text is outdated: inspect it as a visual/technical reference, not as current biography or approved portfolio copy. Do not invent case-study details, metrics, outcomes, dates, contributions, or permissions. Detailed case content is later owner input and does not block unrelated research or design exploration.

## Status and Next Action

- Current phase: **Phase 1 research complete** for the initial local site/repository inventory below. Findings are preliminary and limited to the checked-out files; they do not verify personal claims, rights, permissions, or remote deployment configuration.
- Current branch at last check: `docs/portfolio-foundation`. Check branch and `git status` at the start of every task. All current work remains uncommitted.
- Next action: present the Phase 1 findings to the owner and wait for review. Only then begin Phase 2 with two visual concepts and rough homepage wireframes. Do not edit the website while creating or presenting concepts.
- Previously inspected GitHub state: default/production branch `master`; local `development` exists but `origin/development` did not. GitHub Pages is enabled, but its publishing source is unverified. Do not push, change publishing settings, or release until explicitly authorized; verify the Pages source before any future push.
- Latest available English CV is `PDF-files/CV - EN  20261026.pdf`. Treat it as owner-provided source material, not independently verified or publication-cleared. Never copy private contact details into public content or project notes.

## Evidence Boundaries

- **Owner-provided:** The goal and style preferences above. Elain is described as a platform measuring CO2 emissions from heavy-truck transportation using vehicle, order, and fuel-provider data; the owner created a UX process and worked with the team on product design and development. The owner said the product was discontinued. Voltra is described as work on a display for heavy-truck electric chargers; specifics cannot be shared. Do not expand these descriptions or assume permission to publish them.
- **Repository-verified:** The contents, files, links, and styles observed in the checked-out repository below. This verifies only what is present locally, not whether CV claims or site copy are current or true.
- **Visual observation:** Appearance inferred from local styles/assets or the browser preview; distinguish it from source-backed facts.
- **Unverified / owner-only:** Current biography, project details, personal contribution, disclosure limits, rights, publication permissions, and design choices require suitable evidence or owner input. A CV or existing site is not publication permission.

## Phase 1: Research

Research the current site, repository, and available materials without editing the website, dependencies, publishing configuration, or repository settings. Keep inspectable facts separate from owner questions; unresolved case details and permissions do not block unrelated design exploration. Do not copy private contact details from CVs.

### Initial Site and Repository Findings

Checked 2026-10-26. Evidence is linked to repository paths; the current HTML text is deliberately summarized rather than endorsed.

- **Pages/layout:** The repository contains one root page, [`index.html`](../../index.html). It has a fixed navigation, greeting/quick-facts modal, “top 3” text section, three project cards, contact prompt, and footer. The content includes old student-era projects and aspirational/personal text (for example, describing the author as a beginner or still on the path to becoming a frontend developer). Treat all visible copy as outdated and exclude it from new content until owner-reviewed. The page presently links GitHub, LinkedIn, and an older `PDF-files/CV-EN.pdf`; those links are leads to check, not proof of current content or approval.
- **Visual system:** [`scss/main.scss`](../../scss/main.scss) and compiled [`css/main.css`](../../css/main.css) use cream (`#fff8e4`), red (`#d06343`), dark brown (`#554706`), and green accent (`#3e7e70` in SCSS variables). Local wave SVG backgrounds are applied at mobile/desktop breakpoints. The page uses a red doodle asset and footer icons in `assets/images/`. These files are inspectable; whether these are the owner's preferred visuals and whether they can be reused are owner/rights questions.
- **Typography:** The HTML requests Poppins, Raleway, Source Sans Pro, and Space Mono from Google Fonts. Local `assets/webfontkit/stylesheet.css` declares `nt_wagnerbold`, used for `h1`; headings/body/nav use the external families as specified in CSS. A Little Birds font package is also present under `Little Bird Vintage Script Font 3/`, but is not shown as loaded by the page. Confirm preferred font and rights before selecting it for Creative.
- **Technical structure:** This is a static HTML/CSS/SCSS site with a small jQuery handler in [`main.js`](../../main.js) for opening/closing the modal. Source styles are in `scss/`; compiled styles are in `css/main.css`. The repository has no README, package scripts, checked-in npm lockfile, or checked-in `.github/workflows` found during inspection. `package.json` declares `aos` and `jquery`; a lock-like file exists only within ignored `node_modules/`.
- **Browser-loaded libraries:** `index.html` separately loads Bootstrap 4, Popper, jQuery (including multiple CDN jQuery references), AOS from an unpinned `@next` URL, and Google Fonts. Thus the declared npm dependencies do not fully describe the browser runtime. When opened through `file://`, the protocol-relative jQuery URL is interpreted as a local `file://cdnjs...` request and fails with 403 in the browser preview; its behavior on the deployed HTTPS site was not verified here.
- **Local preview:** The static page can be opened directly as `index.html` in a browser. No project `npm start` or build command is defined. No local preview server is configured by the project.
- **Materials/links:** `PDF-files/` contains older English and Swedish CV PDFs and the newer English CV dated 2026-10-26. The site links the older English CV by filename. Existing external links in `index.html` include the owner's GitHub profile, LinkedIn profile, and three student-project repositories. Their current accuracy, relevance, ownership, and publication suitability remain to be checked. The asset folder also contains wave SVG/PNG variants, icons, and doodle/initials images.
- **Publishing:** `CNAME` contains `www.melinakamyab.com`; local Git evidence shows `master` as the remote default/HEAD and no `origin/development` at last inspection. The repository was previously confirmed to have Pages enabled, but the publishing source/branch/folder or workflow is still unverified. No Actions workflow was found locally. Do not change settings or push during research.

### Framework Comparison Evidence for Phase 2

Do not choose or migrate to React during research. Phase 2 should compare improving the current static setup with moving to React, based on the portfolio's eventual content, interaction needs, maintenance, accessibility, performance, the owner's frontend goals, and deployment complexity. Evidence still to gather includes:

- Expected page count, case-study depth, content editing frequency, and whether the two presentations need distinct routes or only different styling.
- Required interactions and content reuse, including how the presentation choice should work after concept review.
- Accessibility and responsive behavior of the current page, including its modal and animation behavior.
- Current page weight/runtime dependencies and which CDN assets are actually necessary.
- The owner's learning/portfolio goals and comfort with maintaining each approach.
- Verified GitHub Pages build/publish source and any constraints on static output or build steps.

No framework recommendation is made in Phase 1. Keep or migrate options open for Phase 2 review.

### Owner Questions (Not Research Blockers)

- What case-study details and contribution statements will the owner provide later?
- Which project names, details, visuals, outcomes, and CV information may be shared, and what confidentiality or asset-use limits apply?
- Which existing typeface, colors, and background image does the owner want to retain, and are their rights clear?
- Are the old site links/materials still relevant or approved to feature?
- What are the verified Pages publishing source and deployment behavior? Check before a future push.

## Phase 2: Creation Plan and Execution

Start this phase only after the owner has reviewed the Phase 1 findings. Present two distinct, reviewable visual directions before proposing implementation. For each direction include a rough homepage layout/wireframe and notes on typography, color, imagery, hierarchy, and its relationship to the other direction:

1. **Professional:** strict, elegant, and scannable for traditional employers.
2. **Creative:** playful and personal; use inspected existing font, colors, and background image where practical, subject to owner preference and rights.

Ground concepts in the existing site, not in assumptions. Mark case-study copy as a neutral placeholder for later owner input; do not invent details. Use the same facts in both presentations. Keep the style-switch method undecided until the owner reviews the concepts; show options, do not choose one prematurely. Unresolved permissions or case details must not block unrelated layout exploration.

Do not edit the site while making or presenting concepts. After the owner reviews the concepts and selects or combines a direction, prepare an implementation plan: scope within the existing site, affected areas, later content inputs, stack comparison/recommendation, accessibility/responsive approach, dependencies, risks, and validation. Wait for explicit approval of that implementation plan before editing website files or changing the technical stack. Design approval is not publication permission.

## Phase 3: Clean-Up

After the approved design, content, and implementation approach have been built, create a verification checklist tailored to the actual design and content. It must address content accuracy and confidentiality, accessibility, responsive desktop/mobile behavior, spelling, links, CV download, dependencies/runtime, feature-branch state, and deployment readiness. Do not assume specific project claims or CV details before they are confirmed. Check GitHub Pages publishing source before any future push/release. Do not commit, push, merge, change repository/publishing settings, or release without the applicable explicit approval.

## Branch and Approval Rules

- Inspect `git status` and current branch before every task; preserve unrelated and untracked work.
- Make project changes only on a feature branch. Never edit directly on `development` or `master`; if currently on either, stop and request a feature branch.
- Feature work is reviewed and merged into `development`. Any later release toward `master` requires the owner's explicit approval.
- Do not push or change publishing settings. Pages publishing source remains unverified; check it before any future push.
- No implementation before the owner approves the implementation plan. No confidential or unverified content is publishable merely because a plan is approved.