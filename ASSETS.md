# Assets for pixel-perfect match

Export these from your Figma file and save them in the paths below.

## Images (`assets/images/`)

| File name | Description |
|-----------|-------------|
| `bg-hero-1.svg` | Hero background layer 1 (Figma: Rectangle 22, behind) |
| `bg-hero-2.svg` | Hero background layer 2 (Figma: Rectangle 23, on top, bleeds up) |
| `bg-section-projects.png` | Portfolio section background (full section height, centered horizontally) |
| `bg-footer.png` | About / footer decorative background (bottom-right). Referenced as `--about-footer-bg` in `css/styles.css`. Light theme uses the same file with `mix-blend-mode: multiply` so it stays visible on `#f7fafc`. Optional: export `bg-footer-light.png` for light only, set `--about-footer-bg` under `[data-theme="light"]` to that URL and remove the `[data-theme="light"] .about::before` blend rules. |
| `hero-portrait.png` | Hero section portrait (e.g. 400×528) |
| `linkedin.png` | LinkedIn preview image in About |
| `project-quartile.jpg` | Quartile Platform card image |
| `project-new-omni.jpg` | New Omni card image |
| `project-instation.jpg` | Instation card image |
| `project-ux-process.jpg` | UX Process card image |
| `project-delivery-model.jpg` | Delivery Model Track card image |
| `project-discount-hunting.jpg` | Discount Hunting card image |
| `process-loop.png` | Lean Process diagram (infinity loop) |

## Icons (`assets/icons/`)

Placeholder SVGs are already in place. To match Figma exactly, replace with exports from your file:

- `mouse.svg` — scroll indicator
- `open-in-new.svg` — profile link
- `phone.svg` — phone contact
- `email.svg` — email contact
- `cursor.svg` — CTA cursor

## Figma export

1. Select the asset in Figma.
2. In the right panel, use Export and choose format (e.g. JPG for photos, PNG/SVG for icons and diagram).
3. Save to the paths above.
