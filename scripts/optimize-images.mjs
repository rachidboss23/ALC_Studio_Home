// Optimiza fotos originales y genera el manifiesto que lee el sitio.
// Uso: coloca originales en content/raw/<slug>/after (y /before opcional), con nombres
// 01.jpg, 02.jpg... (el orden del nombre = orden en la galería). Luego: npm run images
import { readdir, mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const RAW = "content/raw";
const OUT = "public/projects";
const MANIFEST = "src/features/projects/data/manifest.generated.json";
const MAX = 1600;

const exists = (p) => stat(p).then(() => true, () => false);
const manifest = {};

for (const slug of (await readdir(RAW, { withFileTypes: true })).filter((d) => d.isDirectory()).map((d) => d.name).sort()) {
  manifest[slug] = { after: [], before: [] };
  for (const kind of ["after", "before"]) {
    const dir = path.join(RAW, slug, kind);
    if (!(await exists(dir))) continue;
    const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
    await mkdir(path.join(OUT, slug, kind), { recursive: true });
    for (const file of files) {
      const name = `${path.parse(file).name}.webp`;
      const info = await sharp(path.join(dir, file))
        .rotate()
        .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(path.join(OUT, slug, kind, name));
      manifest[slug][kind].push({ src: `/projects/${slug}/${kind}/${name}`, width: info.width, height: info.height });
    }
  }
}

await mkdir(path.dirname(MANIFEST), { recursive: true });
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Listo: ${Object.keys(manifest).length} proyectos procesados.`);
