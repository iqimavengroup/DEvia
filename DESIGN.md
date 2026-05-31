# D'Evia Kwasa Damansara — Design Specification

> Source: `D Evia Kwasa Damansara.pdf` (14 pages, image-based brochure)

---

## Brand Identity

| Field | Value |
|---|---|
| **Project Name** | D'Evia (stylised with apostrophe) |
| **Location** | Kwasa Damansara, Selangor |
| **Developer** | EXSIM MDX SDN. BHD. (146837-W) |
| **Brand under** | SOMA (EXSIM sub-brand) |
| **Taglines** | "WHERE LIFE FLOWS" · "Let Your Life Flow Naturally" · "A Sanctuary Inspired by the Flow of Nature" |
| **Concept** | 5 Elements of Nature — Earth, Fire, Water, Sky, Wind. Water is the hero element. |
| **Certification** | GreenRE Certified (Eco-Responsible Developer) |

---

## Color Palette

```
Primary Blue (wave/brand)   #3D7BAD   — deep ocean steel blue
Light Blue (backgrounds)    #A8C4D8   — soft sky/mist blue
Deep Navy (text contrast)   #1E3D56   — headings on light bg
White                       #FFFFFF   — always paired with blue
Sand/Cream (interiors)      #EDE4D3   — facility pages background
Warm Gold (accent)          #C4993A   — section labels, accent lines
Dark Charcoal               #1A1A1A   — body text
```

**Usage rules:**
- Blue tones dominate all hero, header, and section divider areas
- Cream/sand is used for interior facility showcase pages only
- Gold is used sparingly — section labels, decorative dividers, icon outlines
- Never use more than 2 brand colors in a single UI block

---

## Typography

| Role | Typeface | Style | Usage |
|---|---|---|---|
| Display / Hero | **Cormorant Garamond** or Didot | Regular, wide tracking | "WHERE LIFE FLOWS", "FLOOR PLAN" |
| Section Headings | **Playfair Display** | Italic | "A Sanctuary Inspired by the Flow of Nature", "Elevated Lifestyle" |
| Logo wordmark | Custom serif | Regular | "D'Evia" — replicate with Cormorant Garamond |
| Body copy | **Inter** or DM Sans | Regular 400 / Light | Descriptions, specs, details |
| Labels / Tags | **Inter** | Medium, uppercase, tracked | Unit types, amenity names |

**Hierarchy sizes (mobile → desktop):**
```
h1 display:   48px → 80px   (Cormorant Garamond, tracked +0.05em)
h2 section:   32px → 52px   (Playfair Display italic)
h3 label:     14px → 16px   (Inter medium, uppercase, +0.1em tracking)
body:         15px → 17px   (Inter Regular)
caption:      12px → 13px   (Inter Light)
```

---

## Logo

- **Symbol:** Stylised wave/water ripple icon above the wordmark
- **Wordmark:** "D'Evia" in elegant serif, apostrophe is part of the brand
- **Lockup:** Stacked — icon centered above wordmark, below that "KWASA DAMANSARA" in small caps
- **Sub-line:** "A SOMA COMPANY" in smallest weight beneath location
- **On dark backgrounds:** Use white version
- **On light backgrounds:** Use deep navy or primary blue version
- Extract logo from `pdf_pages/page_04.png` (top-left)

---

## Visual Style & Motifs

### Wave / Flow Pattern
- Signature pattern: flowing horizontal wave lines, alternating deep blue and white
- Used as: full-bleed backgrounds, section dividers, overlay textures
- Reference: `pdf_pages/page_02.png` (full-page pattern)

### Layout Principle
- **Split-layout:** content (text) on the left half, visual (render/image) on the right half — used consistently across sections
- Wide horizontal sections with generous whitespace
- Dashed vertical centre line used as a subtle divider (replicate with a thin `border-dashed` or dotted rule)

### Photography / Renders
- Exterior: tall tower with warm wood-panel cladding, dark metal grid, lush greenery
- Facilities: vibrant interior renders with bold colour pops (red sofas, teal gym equipment)
- All renders have "Artist's Impression" caption in small italic at bottom-right

### Icons
- 5 Elements shown as circular icons with textured fills (wood grain, marble, fabric, feather, water)
- Facility icons: simple outlined map pin / numbered circles on facility plan

---

## Page-by-Page Section Map → Landing Page Sections

| PDF Page | Content | Landing Page Section |
|---|---|---|
| 1 | Cover — D'Evia logo + wave pattern | **Hero** |
| 3 | Exterior render — basketball court, tower | **Hero background / Gallery** |
| 4 | 5 Elements concept, "WHERE LIFE FLOWS" | **Brand Story / About** |
| 5 | Sanctuary copy, GreenRE badge, full facade render | **About + Developer badge** |
| 6 | Floor plan overview, unit type legend | **Floor Plans intro** |
| 7–8 | Type A/B1/B2/B3/B4/C1/C2 layouts with specs | **Floor Plans detail** |
| 9 | Exterior night render, "Let Your Life Flow Naturally" | **Gallery** |
| 10 | Facility plan — Ground / L8 / L9 | **Facilities** |
| 11 | Evia Arcade, Pulse Gym renders | **Facilities gallery** |
| 12 | The Flow Lobby render, "Elevated Lifestyle" | **Facilities gallery** |
| 13 | Location map + connectivity callouts | **Location** |
| 14 | EXSIM contact, sales gallery address | **Footer / Contact** |

---

## Unit Types

| Type | Size (sq.ft.) | Size (SM) | Bedrooms | Bathrooms | Balcony |
|---|---|---|---|---|---|
| Type A | 657 | 61 | 2 | 2 | No |
| Type B1 | 958 | 89 | 3 | 2 | Yes |
| Type B2 | 958 | 89 | 3 | 2 | No |
| Type B3 | 958 | 89 | 3 | 2 | Yes |
| Type B4 | 958 | 89 | 3 | 2 | No |
| Type C1 | 1,109 | 103 | 4 | 2 | Yes |
| Type C2 | 1,109 | 103 | 4 | 2 | No |

---

## Facilities

### Ground Floor
- Meadow Garden
- Outdoor Gym
- Ripple Courts (Basketball & Forest Training Court)
- Cascade Drop-Off
- The Flow Lobby
- Co-working Lounge

### Level 8
- Herbs Garden
- Bayview Pavilion
- Ripple Playground
- Healing Garden

### Level 9
- Tree Shade Retreat
- The Lido Lagoon
- The Evia Pool
- The Sol Deck
- Evia Arcade
- Pulse Gym
- The Flow Hall (Multipurpose Hall)

---

## Location & Connectivity

- **Address:** Kwasa Damansara, Selangor
- **MRT:** ~600m / 8-minute walk to MRT Kwasa Sentral
- **Nearby:** HELP International School, HELP University, Kota Damansara Community Forest Reserve
- **Highways:** Guthrie Corridor Expressway, NKVE, DASH, ELITE, Shah Alam Expressway

---

## Developer / Contact

| Field | Value |
|---|---|
| Developer | EXSIM MDX SDN. BHD. (146837-W) |
| Sales Gallery | Unit 1, Lot 18-G-1A, Empire City, Jln PJU 8/8, 47820 Petaling Jaya, Selangor |
| Tel | 03-7962 1998 |
| WhatsApp CTA | +60123714815 |
| Email | info@exsim.com.my |
| Website | exsim.com.my |

---

## Component Design Notes

### Hero Section
- Full-bleed image: exterior tower render (page 3 or 9)
- Overlay: semi-transparent deep navy gradient from bottom
- Centred or left-aligned: D'Evia logo (white) + tagline "Where Life Flows"
- CTA button: "Register Interest" → WhatsApp link
- Wave pattern divider at bottom of hero (SVG, white on blue)

### Navigation
- Transparent on hero, solid navy on scroll
- Logo left, nav links right, WhatsApp button far right (green, pill shape)

### Section Dividers
- Use the wave SVG pattern as `<hr>` equivalent between sections
- Alternate section backgrounds: white ↔ light blue (`#EAF2F8`)

### Floor Plans Cards
- Card per unit type
- Top: floor plan image (extracted from pages 7–8)
- Below: Type label (gold uppercase), size in sq.ft. + SM, bed/bath count
- "With/Without Balcony" badge
- CTA: "Enquire via WhatsApp" button

### Facilities
- Icon grid (3–4 columns) for facility names
- Highlight cards for The Evia Pool, Pulse Gym, Evia Arcade with renders
- Numbered levels (GF / L8 / L9) as tab filter

### Location Map
- Embed Google Maps centred on Kwasa Damansara
- Overlay callout chips: MRT (600m), HELP University, Highways
- Below map: connectivity stats as icon + number cards

### WhatsApp Floating Button
- Fixed, bottom-right, 56px circle
- WhatsApp green `#25D366`
- WhatsApp icon (white)
- Subtle bounce animation on load
- Links to: `https://wa.me/60123714815?text=Hi%2C%20I%27m%20interested%20in%20D%27Evia%20Kwasa%20Damansara`

### Register Interest Form
- Fields: Full Name, Phone Number, Email, Unit Type (dropdown: A / B / C)
- Submit button → composes WhatsApp message and opens `wa.me` link
- No backend needed — pure client-side redirect
- Background: wavy blue section

### Footer
- Dark navy background
- D'Evia logo (white) + "A SOMA Company" + "By EXSIM"
- Sales gallery address + phone + email
- Legal: "Artist's Impression. All information is subject to change."
- Copyright: © 2025 EXSIM MDX SDN. BHD.

---

## Assets to Extract from PDF

Run this to extract page images (already done to `pdf_pages/`):
```bash
python3 -c "
import fitz, os
doc = fitz.open('D Evia Kwasa Damansara.pdf')
os.makedirs('public/assets', exist_ok=True)
for i, page in enumerate(doc):
    mat = fitz.Matrix(3, 3)  # 3x for high-res
    pix = page.get_pixmap(matrix=mat)
    pix.save(f'public/assets/page_{i+1:02d}.png')
"
```

Then crop/use specific pages:
- `page_01.png` → Logo extraction (top-right area)
- `page_03.png` → Hero background
- `page_07.png` → Floor plan Type A & B1/B2
- `page_08.png` → Floor plan Type B3/B4 & C1/C2
- `page_09.png` → Gallery render
- `page_11.png` → Evia Arcade + Pulse Gym renders
- `page_12.png` → Flow Lobby render
- `page_14.png` → EXSIM logo
