// scripts/optimize-images.js
// Run with: `node scripts/optimize-images.js`
// Converts JPEG/PNG images in public/images to WebP (lossy, quality 80)
// and creates resized versions for responsive delivery.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMG_DIR = path.resolve(__dirname, '..', 'public', 'images');
const MAX_WIDTH = 1200; // max width for resized images
const QUALITY = 80;

async function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;
  const rel = path.relative(IMG_DIR, filePath);
  const outDir = path.dirname(path.join(IMG_DIR, rel));
  const baseName = path.basename(filePath, ext);
  const webpPath = path.join(outDir, `${baseName}.webp`);

  try {
    const img = sharp(filePath);
    const metadata = await img.metadata();
    // Resize if larger than MAX_WIDTH
    const width = metadata.width > MAX_WIDTH ? MAX_WIDTH : undefined;
    await img
      .rotate()
      .resize({ width })
      .webp({ quality: QUALITY })
      .toFile(webpPath);
    console.log(`✅ ${rel} → ${path.relative(IMG_DIR, webpPath)}`);
  } catch (e) {
    console.error(`❌ Failed ${rel}:`, e.message);
  }
}

function walk(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else {
      processFile(full);
    }
  });
}

walk(IMG_DIR);
