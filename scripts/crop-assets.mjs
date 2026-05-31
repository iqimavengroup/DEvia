import sharp from 'sharp';
import { mkdirSync } from 'fs';
import { join } from 'path';

const SRC = 'pdf_pages';
const OUT = 'public/assets/cropped';
mkdirSync(OUT, { recursive: true });

// All coordinates in source-image pixel space.
// Source pages are ~1788 x 1263 (3x render of the brochure).
const crops = [
  // ---- Floor plans: page 07 = A (TL), B1 (TR), B2 (BR) ----
  { src: 'page_07.png', out: 'floorplan-a.png',  left: 179, top: 119, width: 730, height: 775 },
  { src: 'page_07.png', out: 'floorplan-b1.png', left: 1067, top: 119, width: 668, height: 775 },
  { src: 'page_07.png', out: 'floorplan-b2.png', left: 1073, top: 879, width: 596, height: 313 },

  // ---- Floor plans: page 08 = B3 (TL), C1 (TR), B4 (BL), C2 (BR) ----
  { src: 'page_08.png', out: 'floorplan-b3.png', left: 179, top: 119, width: 730, height: 775 },
  { src: 'page_08.png', out: 'floorplan-c1.png', left: 1067, top: 119, width: 676, height: 700 },
  { src: 'page_08.png', out: 'floorplan-b4.png', left: 179, top: 849, width: 715, height: 343 },
  { src: 'page_08.png', out: 'floorplan-c2.png', left: 1067, top: 849, width: 647, height: 343 },

  // ---- Facility renders ----
  { src: 'page_11.png', out: 'facility-evia-arcade.png', left: 48, top: 30, width: 921, height: 596 },
  { src: 'page_11.png', out: 'facility-pulse-gym.png',   left: 775, top: 679, width: 969, height: 513 },
  { src: 'page_12.png', out: 'facility-flow-lobby.png',  left: 42, top: 313, width: 1705, height: 879 },
];

for (const c of crops) {
  const meta = await sharp(join(SRC, c.src)).metadata();
  // clamp to bounds defensively
  const left = Math.max(0, Math.min(c.left, meta.width - 1));
  const top = Math.max(0, Math.min(c.top, meta.height - 1));
  const width = Math.min(c.width, meta.width - left);
  const height = Math.min(c.height, meta.height - top);

  await sharp(join(SRC, c.src))
    .extract({ left, top, width, height })
    .png()
    .toFile(join(OUT, c.out));
  console.log(`✓ ${c.out}  (${width}x${height} from ${c.src})`);
}

console.log('\nDone. Cropped assets in', OUT);
