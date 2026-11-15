// Run with npm run optimize-images after adding presentation images to a page.
// Only literal /images/ references in src/**/*.ts(x) are considered. Originals,
// game files, scores, and forensic challenge downloads are never rewritten.
// Generated files live in public/images/responsive; the app uses the manifest
// to select a real responsive file rather than requesting an image API.

const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const sharp = require('sharp');
const ts = require('typescript');

const ROOT = path.resolve(__dirname, '..');
const IMAGE_ROOT = path.join(ROOT, 'public', 'images');
const OUTPUT_ROOT = path.join(IMAGE_ROOT, 'responsive');
const MANIFEST_PATH = path.join(ROOT, 'src', 'data', 'image-manifest.json');
const CACHE_PATH = path.join(OUTPUT_ROOT, '.cache.json');
const WIDTHS = [480, 800, 1200, 1600];
const QUALITY = 82;
const RECIPE = `responsive-v1:webp:${QUALITY}:${WIDTHS.join(',')}:auto-orient`;

sharp.concurrency(2);

async function readJson(filename, fallback) {
  try {
    return JSON.parse(await fs.readFile(filename, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return fallback;
    throw error;
  }
}

async function sourceFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await sourceFiles(filename));
    else if (entry.isFile() && /\.tsx?$/.test(entry.name)) files.push(filename);
  }
  return files.sort();
}

async function findReferences() {
  const sources = new Set();
  const comparisons = new Set([
    ts.SyntaxKind.EqualsEqualsToken, ts.SyntaxKind.EqualsEqualsEqualsToken,
    ts.SyntaxKind.ExclamationEqualsToken, ts.SyntaxKind.ExclamationEqualsEqualsToken,
  ]);
  for (const filename of await sourceFiles(path.join(ROOT, 'src'))) {
    const text = await fs.readFile(filename, 'utf8');
    const parsed = ts.createSourceFile(filename, text, ts.ScriptTarget.Latest, true);
    // Parse real string literals rather than comments. Equality comparisons
    // can mention fallback sentinels that are not images the page requests.
    function visit(node) {
      if (ts.isStringLiteralLike(node)) {
        const parent = node.parent;
        const isComparison = ts.isBinaryExpression(parent) && comparisons.has(parent.operatorToken.kind);
        const src = node.text;
        if (!isComparison && src.startsWith('/images/') && !src.startsWith('/images/responsive/') && /\.(?:jpe?g|png|webp)$/i.test(src)) {
          sources.add(src);
        }
      }
      ts.forEachChild(node, visit);
    }
    visit(parsed);
  }
  return [...sources].sort();
}

async function atomicJson(filename, object) {
  const json = `${JSON.stringify(object, null, 2)}\n`;
  try {
    if (await fs.readFile(filename, 'utf8') === json) return;
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  await fs.mkdir(path.dirname(filename), { recursive: true });
  const temporary = `${filename}.${process.pid}.tmp`;
  await fs.writeFile(temporary, json);
  await fs.rename(temporary, filename);
}

async function existingVariants(entry) {
  if (!entry || !Array.isArray(entry.variants)) return false;
  for (const variant of entry.variants) {
    const filename = path.resolve(ROOT, 'public', variant.src.slice(1));
    if (!filename.startsWith(`${OUTPUT_ROOT}${path.sep}`)) return false;
    try {
      if (!(await fs.stat(filename)).isFile()) return false;
    } catch (error) {
      if (error.code === 'ENOENT') return false;
      throw error;
    }
  }
  return entry.variants.length > 0;
}

async function main() {
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });
  const previousManifest = await readJson(MANIFEST_PATH, {});
  const previousCache = await readJson(CACHE_PATH, {});
  const sources = await findReferences();
  const manifest = {};
  const cache = {};
  let generated = 0;
  let reused = 0;
  let outputBytes = 0;

  // Serial processing keeps memory predictable for the large original photos.
  // Each source is hashed so changed bytes invalidate cache even with old mtimes.
  for (const src of sources) {
    const inputPath = path.resolve(ROOT, 'public', src.slice(1));
    if (!inputPath.startsWith(`${IMAGE_ROOT}${path.sep}`) || inputPath.startsWith(`${OUTPUT_ROOT}${path.sep}`)) {
      throw new Error(`Image path is outside the allowed originals directory: ${src}`);
    }
    const realPath = await fs.realpath(inputPath);
    if (!realPath.startsWith(`${IMAGE_ROOT}${path.sep}`)) {
      throw new Error(`Image symlink leaves the originals directory: ${src}`);
    }
    const input = await fs.readFile(inputPath);
    const hash = crypto.createHash('sha256').update(RECIPE).update(input).digest('hex');
    const previous = previousCache[src]?.entry || previousManifest[src];
    const previousHash = previousCache[src]?.hash || previousCache[src];
    if (previousHash === hash && await existingVariants(previous)) {
      manifest[src] = previous;
      cache[src] = { hash, entry: previous };
      reused += 1;
    } else {
      const metadata = await sharp(input).metadata();
      if (!metadata.width || !metadata.height) throw new Error(`Missing image dimensions: ${src}`);
      if ((metadata.pages || 1) > 1) throw new Error(`Animated images require separate handling: ${src}`);
      const rotated = [5, 6, 7, 8].includes(metadata.orientation);
      const width = rotated ? metadata.height : metadata.width;
      const height = rotated ? metadata.width : metadata.height;
      const widths = [...new Set(WIDTHS.map(target => Math.min(target, width)))];
      const relative = src.slice('/images/'.length);
      const extension = path.extname(relative);
      // Include the original extension to avoid collisions between x.jpg/x.webp.
      const stem = `${relative.slice(0, -extension.length)}-${extension.slice(1).toLowerCase()}`;
      const variants = [];
      for (const targetWidth of widths) {
        const outputSrc = `/images/responsive/${stem}-${targetWidth}.webp`;
        const outputPath = path.join(ROOT, 'public', outputSrc.slice(1));
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
        const temporary = `${outputPath}.${process.pid}.tmp`;
        const result = await sharp(input)
          .rotate()
          .resize({ width: targetWidth, withoutEnlargement: true })
          .webp({ quality: QUALITY, effort: 4 })
          .toFile(temporary);
        await fs.rename(temporary, outputPath);
        variants.push({ src: outputSrc, width: result.width });
        generated += 1;
      }
      manifest[src] = { width, height, variants };
      cache[src] = { hash, entry: manifest[src] };
    }
    // Keep completed work reusable if a later source fails or is interrupted.
    await atomicJson(CACHE_PATH, { ...previousCache, ...cache });
    for (const variant of manifest[src].variants) {
      outputBytes += (await fs.stat(path.join(ROOT, 'public', variant.src.slice(1)))).size;
    }
  }

  // Publish manifests only after every input has succeeded. A missing asset or
  // decode failure returns a nonzero status and preserves the previous index.
  await atomicJson(MANIFEST_PATH, manifest);
  await atomicJson(CACHE_PATH, cache);
  console.log(`Responsive images: ${sources.length} sources; ${generated} files generated; ${reused} sources reused.`);
  console.log(`Referenced output: ${(outputBytes / 1024 / 1024).toFixed(2)} MiB. Manifest: ${path.relative(ROOT, MANIFEST_PATH)}.`);
  console.log('Originals and non-presentation artifacts were preserved. Unreferenced generated files are not automatically deleted.');
}

main().catch(error => {
  console.error(`Image preparation failed: ${error.message}`);
  process.exitCode = 1;
});
