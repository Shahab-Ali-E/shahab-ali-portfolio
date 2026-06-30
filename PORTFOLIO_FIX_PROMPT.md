# Claude Code prompt — Fix portfolio bugs (hero backdrop, spacing, ServiceNow clarity, Projects jank, About layout)

> Run from the repo root. This targets the **current** code. I've listed the real
> root cause for each bug (I inspected the files) so don't re-diagnose from scratch —
> verify, then fix. Keep Next.js 14 + Tailwind + Framer Motion. Keep `npm run build`
> and `npm run lint` green. Respect `prefers-reduced-motion` everywhere. Commit in
> small, focused chunks. Make every fix fully responsive (test 375 / 768 / 1200 / wide).

Before coding, read: `src/sections/Hero.tsx`, `src/sections/ServiceNow.tsx`,
`src/sections/Projects.tsx`, `src/sections/About.tsx`, `src/components/ToolBoxItem.tsx`,
`src/components/HeroOrbit.tsx`, `src/app/globals.css`, `tailwind.config.ts`, `src/app/page.tsx`.

---

## Bug 1 — Hero background is broken (ring off-centre, orbit rings & stars missing)
**Root cause:** the redesign replaced the original 4 concentric rings + orbiting star/sparkle icons (the `HeroOrbit` component) with a *single* `size-[700px]` ring absolutely centred on the **whole section**. Because the section uses huge padding (`py-32 md:py-48 lg:py-60`), that ring floats off the visual centre and looks misplaced. Also `Hero.tsx` references CSS classes `dot-grid` and `hero-aurora` that are **not defined** in `globals.css`.

**Fix:**
- Rebuild a cohesive hero backdrop centred on the hero's **content** (memoji → headline area), not the tall section box. Reintroduce **concentric rings** (e.g. ~620 / 820 / 1020 / 1220px, scaled down on mobile) and **orbiting star + sparkle icons** using the existing `src/components/HeroOrbit.tsx`. Keep them subtle (low opacity emerald), behind content (`-z`), and masked with the existing top/bottom linear-gradient mask so edges fade.
- Keep ONE faint aurora glow if it helps depth, but make it secondary to the rings — not a replacement.
- Either define `dot-grid` (a fine CSS dot/grid texture) in `globals.css` **or** remove the reference. No undefined classes.
- All ring spin + orbit animations must be **disabled under `prefers-reduced-motion`** and must **not cause horizontal overflow** on mobile (`overflow-x-clip` on the section; shrink ring sizes at `sm`).
- The rings must sit symmetrically behind the memoji/headline so the composition reads as intentional and balanced.

## Bug 2 — Too much empty space between Hero and ServiceNow
**Root cause:** `Hero.tsx` section uses `py-32 md:py-48 lg:py-60` (way too tall) and the `ServiceNow` section adds its own `py-20 lg:py-32` plus `SectionHeader` margins → a large dead gap after the CTAs.

**Fix:**
- Establish a **consistent vertical rhythm** across all sections. Reduce hero padding (e.g. `pt-24 pb-16 md:pt-28 md:pb-20`) and standardise every section to something like `py-16 md:py-24`.
- Tighten the space so the ServiceNow header follows the hero naturally with no awkward void. Verify visually at desktop and mobile.

## Bug 3 — ServiceNow section reads as "random" (experience / modules / certs unclear; certs not clickable)
**Root cause:** in `ServiceNow.tsx` the experience strip, capability bento, and certifications+education strip are stacked with only margins and **no sub-labels**, so a visitor can't tell what each block is. Certs are plain text (no links). There's a `Discovery & CMDB` capability card the user wants removed.

**Fix:**
- Give the section a clear, labelled internal hierarchy with small sub-headings, in this order:
  1. **Experience** (the two roles — keep the timeline cards, label the block "Experience")
  2. **What I do on the Now Platform** (the capability bento)
  3. **Certifications** (label it) — see the dedicated treatment below
  4. **Education** (label it) — its **own separate block**, visually distinct from Certifications
- **Remove the "Discovery & CMDB" capability card entirely.** You now have 3 capability cards — fix the grid so it doesn't look lopsided (e.g. `md:grid-cols-3`, or 2-up with the third centred). Re-home the still-true points that were only in the removed card (e.g. *Service Portal & UI Builder*, *Platform Analytics dashboards*) into the most relevant remaining card so that info isn't lost.
- **Separate Education from Certifications (currently they share one strip).** Render two clearly-labelled, visually-distinct blocks: a **"Certifications"** block (the two ServiceNow micro-certs) and a separate **"Education"** block below it (BS Software Engineering — non-link). Do NOT mix the degree in with the certs.
- **Certifications must be clickable links.** The individual micro-certification credential URLs are not available, so link **both** cert cards to my LinkedIn certifications page:
  `https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/`
  Render each cert card as `<a href="https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/" target="_blank" rel="noopener noreferrer">` with a small external-link icon, an `aria-label` like "View Welcome to ServiceNow certification on LinkedIn", and a visible focus ring. (If I later supply per-cert Credly/credential URLs, swapping the `href` should be the only change — keep a `url` field on each cert object so it's easy.)
- Make sure all blocks (Experience / Capabilities / Certifications / Education) are visually distinct (spacing + sub-heading) so the meaning is instantly clear.

## Bug 4 — Projects section stutters / feels laggy on scroll
**Root cause:** in `Projects.tsx` every project card is `h-screen sticky top-20` with a **per-card** `useScroll` + `useTransform` scale (the stacked-cards-on-scroll effect). Scroll-linked scaling of full-viewport sticky cards — multiplied across cards and layered on top of Lenis smooth scroll — thrashes layout/paint and causes the stutter.

**Fix (prioritise smoothness):**
- Remove the heavy sticky-scale stacking. Replace it with a clean, **non-janky** presentation: a simple stacked/auto-height card list with a light `whileInView` fade + translate reveal (`viewport={{ once: true }}`), no scroll-linked per-frame transforms.
- If you keep any stacked look, drive **only** cheap GPU props (`transform`/`opacity`) from a **single** shared `useScroll`, add `will-change: transform`, and **disable the effect entirely under `prefers-reduced-motion` and on mobile** (where it's worst). No `h-screen` sticky cards.
- Ensure project images use `next/image` with correct `sizes` and are not re-scaled every scroll frame.
- **Reframe the copy honestly:** these are my **full-stack / AI side projects built before and alongside my ServiceNow career** (and ongoing self-projects). Update the section intro to say that clearly, so it's obviously separate from the ServiceNow work — not my professional SNOW experience.
- Target: buttery scrolling with Lenis, zero visible stutter.

## Bug 5 — About "A Glimpse Into My World": Who-I-Am text clipped & Toolbox marquee broken
**Root cause A:** the About cards use a fixed `h-[320px]`. The "Who I Am" content (bio + location + company rows) overflows that fixed height and gets clipped — that's why the location line looks cut off.
**Root cause B:** in `ToolBoxItem.tsx` the mask is malformed: `linear-gradient(to_right,transparent,black_10%,black_100%,transparent)` (black at 100% **and** transparent at 100% over-masks the right edge), and the `animate-move-right` row starts at `-50%` leaving a blank gap — so toolbox chips appear cut off / overlapping at the edges.

**Fix:**
- Replace fixed `h-[320px]` on the About cards with **natural/min height** (`min-h-[...]` or auto) so nothing ever clips. The Who-I-Am card should show the full bio with the location + company rows pinned at the bottom (`mt-auto`) without overflow, and reflow cleanly on mobile.
- Fix the marquee mask to a correct symmetric fade, e.g. `linear-gradient(to right, transparent, black 12%, black 88%, transparent)`. Ensure each row duplicates its items enough for a seamless `-50%` loop with **no blank gap** (fix the `move-right` start offset). Keep pause-on-hover and **disable the animation under `prefers-reduced-motion`**.
- Make sure the three toolbox rows never overflow the card horizontally and are cleanly masked on **both** edges. Confirm chip text + icons aren't truncated.
- Verify the "Beyond the Code" draggable hobby bubbles stay inside the map card at every breakpoint.

## Cross-cutting
- **CV link mismatch:** the hero "Download CV" links to `/shahab_ali_ge_cv.pdf`, but there are several CV files in `public/`. Standardise on **one** CV file (e.g. `public/Shahab_CV.pdf`), point the hero button at it, and delete the stale duplicates. Verify the download works.
- Full **responsive** pass at 375 / 768 / 1200 / wide; no horizontal scroll anywhere.
- Keep AA contrast; keyboard focus visible on all links/buttons.
- `npm run lint` and `npm run build` must pass.

## Acceptance checklist (confirm each when done)
- [ ] Hero rings are centred behind the content with orbiting stars/sparkles restored, subtle and balanced; no undefined CSS classes; no mobile overflow; motion off under reduced-motion.
- [ ] Spacing between hero and ServiceNow (and between all sections) is tight and consistent.
- [ ] ServiceNow section has labelled Experience / Capabilities blocks; "Discovery & CMDB" card removed and its real points re-homed.
- [ ] **Certifications** and **Education** are two separate, clearly-labelled blocks (degree no longer mixed with certs); both cert cards link to the LinkedIn certifications page in a new tab with accessible labels.
- [ ] Projects scrolls smoothly with no stutter; sticky-scale removed/lightened; copy reframed as pre/alongside-SNOW side projects.
- [ ] About cards no longer clip text; toolbox marquees loop seamlessly and are masked on both edges; hobby bubbles contained.
- [ ] Download CV works; responsive at all breakpoints; lint + build pass.
- [ ] Small, descriptive commits; tell me anything you intentionally changed in content or couldn't complete.

**Start by reading the listed files and giving me a 1-line root-cause confirmation per bug + your fix plan before large edits.**

---

# Fix — Update Certifications (add all 5 ServiceNow micro-certs)

> Self-contained task. Run from repo root. Keep Next.js 14 + Tailwind + Framer Motion. `npm run build` and `npm run lint` must stay green. Read `src/sections/ServiceNow.tsx` first.
 **Separate Education from Certifications (currently they share one strip).** Render two clearly-labelled, visually-distinct blocks:

**Problem:** the `certifications` array in `src/sections/ServiceNow.tsx` only lists **2** certs ("Welcome to ServiceNow" and "Now Assist Executive"). I've earned **5**. Add the missing ones and show them **newest-first**.

**Fix:**
- Replace the `certifications` array (around line 51) with all 5 certs below, ordered **newest → oldest** by issue date. Keep the same object shape (`name`, `issuer`, `type`, `url`) and add an `issued` field for the date:

```ts
const certifications = [
  {
    name: "Automated Test Framework",
    issuer: "ServiceNow",
    type: "Micro-certification",
    issued: "May 2026",
    url: "https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/",
  },
  {
    name: "CMDB Health",
    issuer: "ServiceNow",
    type: "Micro-certification",
    issued: "Apr 2026",
    url: "https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/",
  },
  {
    name: "Configure the CMDB",
    issuer: "ServiceNow",
    type: "Micro-certification",
    issued: "Mar 2026",
    url: "https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/",
  },
  {
    name: "Now Assist Executive",
    issuer: "ServiceNow",
    type: "Micro-certification",
    issued: "Jul 2025",
    url: "https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/",
  },
  {
    name: "Welcome to ServiceNow",
    issuer: "ServiceNow",
    type: "Micro-certification",
    issued: "Jul 2025",
    url: "https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/",
  },
];
```

- Each cert card stays a clickable `<a href={cert.url} target="_blank" rel="noopener noreferrer">` with an accessible `aria-label` like `View ${cert.name} certification on LinkedIn`, a small external-link icon, and a visible focus ring (keep the existing markup — just make sure it still maps over all 5).
- Show the `issued` date on each card (small muted text, e.g. under the name or as a badge) so the timeline reads clearly. Keep "Micro-certification" as the type label.
- With 5 cards the grid must not look lopsided: use a responsive grid that wraps cleanly (e.g. `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) with no empty/awkward gaps at any breakpoint (375 / 768 / 1200 / wide).
- Do **not** mix Education into this block — Certifications stays its own labelled block.
- If per-cert ServiceNow/Credly credential URLs are added later, swapping each `url` is the only change needed — keep the `url` field per cert.

**Acceptance:**
- [ ] **Certifications** and **Education** are two separate, clearly-labelled blocks (degree no longer mixed with certs); 
- [ ] All 5 certs render, newest-first (Automated Test Framework → CMDB Health → Configure the CMDB → Now Assist Executive → Welcome to ServiceNow).
- [ ] Each card links to the LinkedIn certifications page in a new tab with an accessible label + visible focus ring.
- [ ] Issue dates shown; grid wraps cleanly with no lopsided gaps at 375 / 768 / 1200 / wide.
- [ ] `npm run lint` and `npm run build` pass; small, descriptive commit.