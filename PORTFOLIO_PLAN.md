# Portfolio implementation plan

## Design summary (from Figma node 1:3)

- **Single page** with 4 main areas: Hero, Portfolio grid, Lean Process, About + CTA.
- **Dark theme** in Figma: bg `#0e1014`, purple `#554787`, blue `#0071eb` / `#0e93f5`, white/light gray text.
- **Typography**: Inter (Light 300, Regular, Medium, SemiBold, Bold), large hero type (~100px), body 16–18px.
- **Assets**: Hero portrait, 6 project card images, process loop graphic, icons (mouse, open-in-new, phone, email, diamond, art track, cursor).

---

## Plan (order of work)

1. **Project setup**  
   - `index.html`, `css/styles.css`, `js/main.js`.  
   - Folders: `assets/images/`, `assets/icons/` (or single `assets/`).

2. **Export and save assets**  
   - Use Figma MCP asset URLs to download and save under `assets/` so the site does not depend on expiring links (they last ~7 days).  
   - Map each asset to a clear name (e.g. hero portrait, project-1 … project-6, process diagram, icons).

3. **HTML structure**  
   - One page, semantic sections: `<header>` (with theme toggle), `<main>` with `<section id="hero">`, `<section id="portfolio">`, `<section id="process">`, `<section id="about">`.  
   - Theme toggle: one control (e.g. button) top-right, minimal (icon or label).

4. **Styling (CSS)**  
   - **Theming**: CSS custom properties for colors (and optionally fonts) so one set of variables = dark, another = light.  
   - **Default**: dark theme (as in Figma).  
   - **Light mode**: light background (e.g. `#f7fafc`), dark text (e.g. `#1a202c`), same blue/purple accents with enough contrast.  
   - **Layout**:  
     - Hero: image + text block (stack on small screens).  
     - Portfolio: CSS Grid (e.g. 3 cols → 2 → 1) with consistent card layout.  
     - Process: centered content, optional background blur/gradient.  
     - About: two-column on desktop, stacked on mobile.  
   - **Responsive**: breakpoints for mobile, tablet, desktop; no horizontal scroll.

5. **Theme toggle (JS)**  
   - Toggle updates a class or data attribute on `<html>` or `<body>` (e.g. `data-theme="light"` / `"dark"`).  
   - CSS uses `[data-theme="light"]` (and default dark) to switch variables.  
   - Persist choice in `localStorage` and apply on load.  
   - Toggle: clean, simple, fixed or in header top-right.

6. **Polish**  
   - Use saved assets in `<img>` (and SVGs where applicable).  
   - Match spacing, font sizes, and colors to Figma where possible.  
   - Optional: reduce motion or respect `prefers-color-scheme` for initial theme.

---

## Options

| Topic | Option A | Option B |
|-------|----------|----------|
| **Assets** | Download all images/icons from Figma URLs and store in `assets/` (permanent, pixel-perfect, no expiry). | Use Figma asset URLs directly in `src` (fast to implement, links expire in ~7 days). |
| **Decorative elements** | Full fidelity: dashed frames, small icons, gradient blurs as in Figma. | Simplified: keep layout and content, reduce decorative frames/blurs for easier maintenance. |
| **Theme toggle** | Icon only (e.g. sun/moon) in top-right corner. | Text + icon (e.g. “Light” / “Dark”) in top-right. |
| **Initial theme** | Dark by default (as requested). | Dark by default, but if user has `prefers-color-scheme: light`, first load could start in light (still overridable by toggle). |

**Recommended:**  
- **Assets:** Option A (download and save locally).  
- **Decorative elements:** Option A for hero and portfolio; Option B for heavy blur/overlays if they hurt performance.  
- **Toggle:** Option A (icon only, top-right).  
- **Initial theme:** Dark by default; optionally add `prefers-color-scheme` later.

---

## File layout (target)

```
caio-spoladore/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/   (hero, project cards, process graphic)
│   └── icons/    (mouse, open-in-new, phone, email, etc.)
└── PORTFOLIO_PLAN.md (this file)
```

---

## Next step

Proceeding with: **download assets locally**, **full HTML/CSS/JS**, **dark default**, **light mode via toggle**, **icon-only toggle top-right**, **responsive layout**. If you want different choices (e.g. URL-based assets or text on toggle), say which options you prefer.
