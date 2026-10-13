import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITES_DIR = path.join(__dirname, 'sites');
const PORT = 43210;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

const cities = [
  { slug: 'pali', name: 'PALI (Talang Ubi)', domain: 'cuttinglaserpali.com' },
  { slug: 'sekayu', name: 'Sekayu (Muba)', domain: 'cuttinglasersekayu.com' },
  { slug: 'indralaya', name: 'Indralaya (Ogan Ilir)', domain: 'cuttinglaserindralaya.com' },
  { slug: 'prabumulih', name: 'Prabumulih', domain: 'cuttinglaserprabumulih.com' },
  { slug: 'muaraenim', name: 'Muara Enim', domain: 'cuttinglasermuaraenim.com' },
  { slug: 'lahat', name: 'Lahat', domain: 'cuttinglaserlahat.com' },
  { slug: 'linggau', name: 'Lubuklinggau', domain: 'cuttinglaserlinggau.com' },
  { slug: 'betung', name: 'Betung (Banyuasin)', domain: 'cuttinglaserbetung.com' },
];

const server = http.createServer((req, res) => {
  const urlPath = decodeURI(req.url.split('?')[0]);

  // Index Hub
  if (urlPath === '/' || urlPath === '') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    const links = cities.map(c => `
      <a href="/${c.slug}/" style="display:block; padding:16px 20px; background:#1a1a26; border:1px solid #27273a; border-radius:12px; color:#fff; text-decoration:none; margin-bottom:12px; transition:border 0.2s;">
        <div style="font-weight:700; font-size:17px; color:#f97316;">${c.name}</div>
        <div style="font-size:13px; color:#a1a1aa; margin-top:4px;">Domain: <strong>${c.domain}</strong></div>
        <div style="font-size:12px; color:#71717a; margin-top:4px;">Klik untuk buka preview &rarr;</div>
      </a>
    `).join('');

    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Preview 8 Microsite Laserindo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { background:#12121a; color:#e4e4e7; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif; margin:0; padding:40px 20px; }
          .container { max-width:680px; margin:0 auto; }
          h1 { color:#fff; margin-bottom:8px; font-size:26px; }
          p { color:#a1a1aa; font-size:14px; margin-bottom:28px; line-height:1.5; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Preview Jaringan 8 Microsite</h1>
          <p>Pilih microsite di bawah ini untuk melihat tampilan landing page sebelum atau sesudah deploy ke Netlify:</p>
          ${links}
        </div>
      </body>
      </html>
    `);
    return;
  }

  // Serve static files from microsite/sites
  let filePath = path.join(SITES_DIR, urlPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mime = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': mime });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found: ' + urlPath);
  }
});

server.listen(PORT, () => {
  console.log(`\n🌐 Server Preview Microsite berjalan di: http://localhost:${PORT}`);
  console.log(`Buka tautan di atas untuk melihat Hub & daftar 8 Microsite.\n`);
});
