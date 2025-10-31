/**
 * Build a correct public asset URL that respects Vite base (e.g. GitHub Pages subpath).
 * Usage: publicUrl('images/hero.png') → '/clothing-website-v2/images/hero.png'
 */
export function publicUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const clean = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return `${base}${clean}`;
}


