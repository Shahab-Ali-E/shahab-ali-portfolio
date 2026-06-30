# Claude Code prompt — Portfolio modernization (ServiceNow + Full-Stack)

> Paste everything below the line into Claude Code, running from the repo root
> (`shahab-ali-portfolio`). It is written for **this** repo: Next.js 14 (App Router),
> TypeScript, Tailwind 3.4, Framer Motion, lucide-react, sections in `src/sections/`.

---

## Role & goal
You are working in my existing Next.js 14 portfolio. I am **Shahab Ali Hassan, a ServiceNow Developer with strong full-stack experience**. The current site reads as a generic front-end template. Transform it into a **very modern, recruiter-ready portfolio that foregrounds my ServiceNow work and supports it with full-stack depth**, add **Lenis smooth scrolling**, and **evolve (not nuke) the theme**. Keep it fast, accessible, and truthful.

## Hard constraints (do not violate)
1. **Stay on the current stack.** Next.js 14 App Router, TypeScript, Tailwind 3.4, Framer Motion. Do **not** migrate to Vite/another framework or eject. Keep `src/sections` + `src/components` structure.
2. **Keep the build green.** `npm run build` and `npm run lint` must pass when you finish. Fix type errors you introduce.
3. **No fabricated content.** Use only the facts in the "Real content" section below. Do **not** invent employers, metrics, clients, or testimonials.
4. **Avoid AI-slop design.** No purple gradients, no Inter font, no all-centered layouts, no uniformly rounded everything. Aim for an intentional, editorial, modern look.
5. **Respect `prefers-reduced-motion`** for every animation and for Lenis.
6. Work in **small, reviewable commits** (one concern per commit). Don't reformat files you aren't changing.

## Before you start
- Read `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, `tailwind.config.ts`, and every file in `src/sections/` and `src/components/` so you understand the current structure and animation patterns.
- Summarize back to me (a) the section order, (b) the current color/typography tokens, and (c) your transformation plan before making large changes.

---

## 1) Add Lenis smooth scroll
- Install `lenis` (use `lenis`, the maintained package — `import Lenis from "lenis"` and `import "lenis/dist/lenis.css"` if needed).
- Create a client wrapper `src/components/SmoothScroll.tsx` ("use client") that initializes Lenis in a `useEffect` with a `requestAnimationFrame` loop, sensible options (`lerp: ~0.1`, `smoothWheel: true`), cleans up on unmount, and **disables/short-circuits when `prefers-reduced-motion: reduce` is set**.
- Wrap `children` with `<SmoothScroll>` in `src/app/layout.tsx` (keep it a client boundary as needed — do not make the whole layout client unless required).
- Make the existing header nav anchor links use Lenis (`lenis.scrollTo(target)`) for smooth in-page jumps. Ensure `html { scroll-behavior: auto }` so Lenis controls scrolling, and that sticky/Framer `useScroll` effects still work.

## 2) Evolve the theme (refined, not rainbow)
Keep emerald as the **primary** (it ties nicely to the ServiceNow green), but make the palette feel designed:
- Define CSS variables in `globals.css` and map them in `tailwind.config.ts` under `theme.extend.colors`:
  - `--bg: #0A0C0F` (near-black slate), `--surface: #11151A`, `--border: rgba(255,255,255,0.08)`
  - `--primary: #34D399` (emerald-400), `--primary-soft: #6EE7B7`
  - `--accent: #38BDF8` (a cool sky/cyan as a **secondary** accent — used sparingly for links/hover, NOT gradients everywhere)
  - `--text: #E6EAEF`, `--text-muted: #9AA4B2`
- **Typography (no Inter):** add a display + body pairing via `next/font/google`. Use a characterful display face for headings — e.g. **Fraunces** or **Instrument Serif** — paired with a clean grotesque for body/UI — e.g. **Space Grotesk** or **Geist**. Wire them to the existing `--font-sans` / `--font-serif` variables already referenced in `tailwind.config.ts` and `layout.tsx`.
- Replace the heavy "glow ring + orbiting stars" hero motif with something more contemporary: a subtle **animated gradient mesh / aurora** behind the hero, plus the existing film-grain at low opacity, plus a fine 1px grid or dot texture. Keep one tasteful accent element (e.g. a single slow-rotating ring) rather than four.
- Corners: mix radii intentionally (sharp section edges, medium cards) instead of pill-rounding everything.

## 3) Restructure content to lead with ServiceNow
Target section order in `src/app/page.tsx`:
1. **Header** (sticky, condensed-on-scroll, active-link highlight)
2. **Hero** — new copy (below), dual CTA: "View ServiceNow work" + "Download CV"
3. **ServiceNow Expertise** *(NEW section — build `src/sections/ServiceNow.tsx`)*: a **bento grid** of capability cards (Modules, Platform & scripting, Integrations, Quality/ATF) with small lucide icons and 1-line proof points. Include a compact "Certifications" strip.
4. **Tape/marquee** — replace front-end cliché words with my real skills (below)
5. **Projects** — reorder so platform/integration work reads first; cards below
6. **About** — rewrite bio + update the toolbox to include ServiceNow tools; keep the fun "hobbies" bubble
7. **Tech Stack** — split skills into **ServiceNow** and **Full-Stack** groups (a clean two-column bento, not one flat row)
8. **Contact** + **Footer** (update links)
9. Consider replacing **Testimonials** with **"Certifications & Education"** unless I provide real, attributable quotes — do not keep placeholder testimonials.

## 4) Modern interaction polish (use Framer Motion already installed)
- Scroll-reveal (fade/translate/clip) on section entrance via `whileInView` with `viewport={{ once: true, margin: "-10%" }}`; stagger children.
- A **magnetic / spring hover** on primary buttons and project cards; subtle tilt on the bento cards.
- Animated gradient text or a clip-path reveal on the hero headline.
- Sticky section headers or a thin scroll-progress bar tied to Framer `useScroll`.
- A real **footer with working links** (GitHub, LinkedIn, email, CV). Keep everything keyboard-focusable with visible focus rings.

## 5) Accessibility, performance, responsiveness
- All interactive elements keyboard-accessible; semantic landmarks (`header/main/section/footer`), proper heading order, `aria-label`s on icon buttons, descriptive `alt` text.
- Color contrast ≥ WCAG AA on text.
- Every animation gated by `prefers-reduced-motion`.
- Use `next/image` for images; lazy-load below the fold; keep Lighthouse perf strong. Test breakpoints at the config's `sm 375 / md 768 / lg 1200` plus a wide desktop.

---

## Real content (use this — nothing else)
**Identity:** Shahab Ali Hassan — *ServiceNow Developer · Full-Stack Engineer*. Based in Rawalpindi, Pakistan; open to relocation to New Zealand / AEWV sponsorship. BS Software Engineering, COMSATS University Islamabad (2021–2025).

**Hero headline options (pick/refine one, keep it honest):**
- "I build and automate enterprise platforms on ServiceNow — and ship the full stack around them."
- Subcopy: "ServiceNow developer (ITSM, HRSD, integrations) with full-stack roots in Next.js, FastAPI and Python."

**ServiceNow experience (real):**
- ServiceNow Developer — Tekdex (Feb 2025–Present): HRSD customization, matching rules & workflow automation, Round Robin onboarding/offboarding automation, MID Server + Discovery + CMDB population, CMDB Health data-quality, Agent Workspace enhancements, ATF test cases.
- ServiceNow Developer — Techrystal (Aug 2025–Feb 2026): production integrations with FreshService, Jira, Slack, Salesforce, AWS via Flow Designer, Script Includes, Business Rules, REST APIs; incident/knowledge sync; critical-incident escalation automation; Service Portal & UI Builder; Platform Analytics dashboards; Update Set automation via scripted REST + Python.
- **ServiceNow skills for tape/bento/toolbox:** ITSM, HRSD, CMDB & Discovery, Service Portal, UI Builder, Agent Workspace, Flow Designer, Script Includes, Business Rules, Client Scripts, Glide scripting, REST/SOAP integrations, ATF, Update Sets, MID Server.
- **Certifications:** ServiceNow "Welcome to ServiceNow" (micro-cert); "Now Assist Executive" (micro-cert).

**Full-stack skills (keep, regroup):** JavaScript, TypeScript, React, Next.js, React Native, Python, FastAPI, PostgreSQL, Docker, Jenkins, AWS (S3), RabbitMQ, Redux, Zustand, Git/GitHub.

**Projects (real — keep these, drop generic ones):**
- *AI Lang Detect* — Next.js + FastAPI + PostgreSQL; LSTM + Wav2Vec2 audio language detection (7 languages); batch/micro-batch GPU inference.
- *AI Cull Share Eventize* — full-stack AI image-management/culling platform; facial recognition; Celery + RabbitMQ; Docker/Jenkins CI/CD; role-based access.
- *Faith Sphere AI* — AI Islamic app; chatbots for Quran/Hadith lookup, OCR for Arabic text; Context API + Zustand.
- *Air Help* — React Native multi-step flight-compensation app; Clerk auth; FastAPI backend; i18n; location alerts.

**Links to wire:** GitHub, LinkedIn, email (shahabalihassan46@gmail.com), and a "Download CV" button (I'll drop the PDF in `public/`). Add placeholders where I must paste a URL and clearly flag them with a `// TODO:` comment.

---

## Deliverables & acceptance checklist
When done, give me a summary and confirm each:
- [ ] Lenis smooth scroll works, nav anchors animate, and it's disabled under reduced-motion.
- [ ] New theme tokens + non-Inter type pairing applied consistently; hero motif modernized.
- [ ] New **ServiceNow Expertise** bento section exists and reads first after the hero.
- [ ] Tape, toolbox, tech-stack, projects, about all reflect the real content above; no placeholder testimonials remain.
- [ ] Scroll-reveal + magnetic/tilt interactions present and tasteful.
- [ ] Responsive at 375 / 768 / 1200 / wide; AA contrast; keyboard accessible.
- [ ] `npm run lint` and `npm run build` pass.
- [ ] Small, well-described commits; short notes on anything you couldn't complete and why.

**Start by reading the files and sending me your section-by-section plan + the proposed color/type tokens before large edits.**
