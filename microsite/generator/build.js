import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const citiesPath = path.join(__dirname, 'cities.json');
const templatePath = path.join(__dirname, 'template.html');
const sharedAssetsDir = path.join(rootDir, 'shared', 'assets');
const sitesOutputDir = path.join(rootDir, 'sites');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function generate() {
  console.log('🚀 Memulai build 8 microsite satelit...');

  if (!fs.existsSync(citiesPath) || !fs.existsSync(templatePath)) {
    console.error('❌ File cities.json atau template.html tidak ditemukan!');
    process.exit(1);
  }

  const cities = JSON.parse(fs.readFileSync(citiesPath, 'utf-8'));
  const template = fs.readFileSync(templatePath, 'utf-8');

  if (!fs.existsSync(sitesOutputDir)) {
    fs.mkdirSync(sitesOutputDir, { recursive: true });
  }

  const today = new Date().toISOString().split('T')[0];

  for (const city of cities) {
    const cityDir = path.join(sitesOutputDir, city.slug);
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }

    // 1. Render index.html
    let html = template;
    const subDistrictsText = Array.isArray(city.subDistricts) 
      ? city.subDistricts.join(', ') 
      : city.subDistricts;

    const replacements = {
      name: city.name,
      fullName: city.fullName,
      hubCity: city.hubCity,
      domain: city.domain,
      metaTitle: city.metaTitle,
      metaDescription: city.metaDescription,
      distanceInfo: city.distanceInfo,
      logisticsRoute: city.logisticsRoute,
      subDistricts: subDistrictsText,
      popularUse: city.popularUse,
      waGreeting: city.waGreeting,
    };

    for (const [key, val] of Object.entries(replacements)) {
      const reg = new RegExp(`{{${key}}}`, 'g');
      html = html.replace(reg, val);
    }

    fs.writeFileSync(path.join(cityDir, 'index.html'), html, 'utf-8');

    // 2. Generate robots.txt
    const robotsContent = `User-agent: *\nAllow: /\n\nSitemap: https://${city.domain}/sitemap.xml\n`;
    fs.writeFileSync(path.join(cityDir, 'robots.txt'), robotsContent, 'utf-8');

    // 3. Generate sitemap.xml
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://${city.domain}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
    fs.writeFileSync(path.join(cityDir, 'sitemap.xml'), sitemapContent, 'utf-8');

    // 4. Copy shared assets to cityDir/assets
    const targetAssetsDir = path.join(cityDir, 'assets');
    copyRecursive(sharedAssetsDir, targetAssetsDir);

    console.log(`✅ Berhasil generate: ${city.domain} -> microsite/sites/${city.slug}`);
  }

  console.log('\n🎉 Selesai! 8 microsite siap di-deploy ke Netlify.');
}

generate();
