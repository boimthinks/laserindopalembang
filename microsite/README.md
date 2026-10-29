# Jaringan Microsite Laserindo Palembang (Netlify Deployment)

Jaringan 8 microsite satelit untuk dominasi pencarian lokal (*Local & GEO SEO*) jasa laser cutting di kabupaten dan kota sekitar Palembang. Seluruh pesanan dikerjakan langsung di workshop induk Talang Jambe Palembang (Sriwijaya Grafika) dan dikirim via ekspedisi/travel harian.

---

## Daftar Domain & Folder Publikasi Netlify

| No | Domain | Kota / Wilayah | Publish Directory di Netlify |
|---|---|---|---|
| 1 | `cuttinglaserpali.com` | PALI (Talang Ubi & Pendopo) | `microsite/sites/pali` |
| 2 | `cuttinglasersekayu.com` | Sekayu (Musi Banyuasin) | `microsite/sites/sekayu` |
| 3 | `cuttinglaserindralaya.com` | Indralaya (Ogan Ilir) | `microsite/sites/indralaya` |
| 4 | `cuttinglaserprabumulih.com` | Kota Prabumulih | `microsite/sites/prabumulih` |
| 5 | `cuttinglasermuaraenim.com` | Muara Enim & Tanjung Enim | `microsite/sites/muaraenim` |
| 6 | `cuttinglaserlahat.com` | Kabupaten Lahat | `microsite/sites/lahat` |
| 7 | `cuttinglaserlinggau.com` | Kota Lubuklinggau | `microsite/sites/linggau` |
| 8 | `cuttinglaserbetung.com` | Betung (Banyuasin) | `microsite/sites/betung` |


PALI (Talang Ubi & Pendopo)
Sekayu (Musi Banyuasin)
Indralaya (Ogan Ilir)
Kota Prabumulih
Muara Enim & Tanjung Enim
Kabupaten Lahat
Kota Lubuklinggau
Betung (Banyuasin)
---

## Cara Deploy ke Netlify

Untuk masing-masing domain di Netlify:

1. Di Netlify Dashboard, klik **"Add new site"** -> **"Import an existing project"** -> pilih repositori GitHub `laserindopalembang`.
2. Di bagian **Build settings**:
   * **Base directory:** *(biarkan kosong)*
   * **Build command:** `node microsite/generator/build.js`
   * **Publish directory:** Masukkan path sesuai tabel di atas (contoh: `microsite/sites/pali`).
3. Klik **"Deploy site"**.
4. Di bagian **Domain management**, klik **"Add a domain"** lalu masukkan nama domain target (contoh: `cuttinglaserpali.com`) dan arahkan DNS nameserver atau CNAME ke Netlify.
5. Ulangi langkah 1 - 4 untuk ketujuh microsite lainnya dari repositori yang sama.

---

## Cara Update Konten Serentak (Generator)

Jika di kemudian hari ada perubahan tarif, nomor telepon, atau data lainnya:
1. Edit data di `microsite/generator/cities.json` atau desain di `microsite/generator/template.html`.
2. Jalankan perintah:
   ```bash
   node microsite/generator/build.js
   ```
3. Commit dan push ke GitHub:
   ```bash
   git add .
   git commit -m "update: perbarui konten microsite"
   git push origin master
   ```
4. Netlify akan secara otomatis me-rebuild ke-8 situs satelit secara instan!
