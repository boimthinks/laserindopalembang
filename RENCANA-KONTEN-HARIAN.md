# RENCANA KONTEN HARIAN SEO LASERINDO PALEMBANG
> Strategi Dominasi Keyword Berdasarkan Riset `KEYWORD-CUTTING-PLAT.md`  
> Target: 1 Hari 1 Artikel (Total 32 Artikel Terstruktur)

File ini adalah **pelacak progres harian (tracker)** dan panduan eksekusi otomatis. Setiap kali pengguna meminta *"buat artikel apa kita hari ini"*, AI Agent akan merujuk ke file ini, mengambil antrean artikel belum selesai berikutnya, dan mengeksekusinya.

---

## SOP Eksekusi Harian untuk AI Agent

Setiap kali menjalankan tugas penulisan harian:
1. **Cek Antrean:** Cari artikel pertama dengan status `- [ ]` (belum selesai) pada daftar antrean.
2. **Tahap 1 (Riset & Arsitektur):** Gunakan skill `pakar-entity-seo` untuk melakukan:
   - LANGKAH 1: Ekstraksi Keyword (Primary, Secondary, Long-Tail, Entity Keywords).
   - LANGKAH 2: Pemetaan Entitas Schema.org dan Knowledge Graph Table (`[Subject]` -> `*Predicate*` -> `[Object]`).
   - LANGKAH 3: Outline Artikel E-E-A-T mendalam (analisis masalah lokal, mitigasi material, tabel komparasi/RAB, checklist evaluasi).
3. **Tahap 2 (Eksekusi Penulisan):** Passing hasil riset dan outline ke skill `penulis-ahli`:
   - Tulis artikel utuh dengan gaya natural, human-centric, tanpa klise AI, bebas em-dash (—) dan en-dash (–).
   - Frontmatter wajib lengkap (`title` maks 5 kata, `titleSeo` 50-60 karakter tanpa titik dua, `excerpt` 110-160 karakter, `date` hari ini, `topik`, `imgurl`, `imgalt`, `imgPrompt`, `pengantar`, `kesimpulan` + CTA WA, `published: true`, `faq` 5 item semantis).
   - Dilarang keras aksara Hanzi/non-Latin, dilarang emoji, dilarang titik dua atau penomoran angka pada heading (H1/H2).
   - Minimal 2-3 internal links (ke halaman layanan/material terkait dan `/harga/`). WAJIB menggunakan trailing slash `/` di setiap link internal (misal `/material/acp-pvc/`, `/harga/`, `/layanan/pagar/`) untuk menghindari 301 redirect.
4. **Simpan File:** Tulis atau perbarui file markdown di `src/content/blog/<slug>.md`.
5. **Update Tracker:** Ubah status `- [ ]` menjadi `- [x]` di file ini.
6. **Update SUMBER-PENGETAHUAN:** Tambahkan baris baru pada tabel `## 7.1 Topik yang Sudah Ditulis` di `SUMBER-PENGETAHUAN.md`.

---

## Daftar Antrean Artikel Harian (32 Hari)

### Kluster A: CNC Router & Non-Logam (ACP, MDF, Plywood, PVC)
- [x] **Hari 01:** `Jasa CNC Router Palembang untuk Potong ACP, Plywood, dan MDF Presisi` (Terbit: 20 Oktober 2026, Slug: `jasa-cnc-router-palembang-acp-mdf-plywood`)
  - *Target Keyword:* jasa CNC router Palembang, jasa CNC cutting, CNC router multiplek, jasa potong MDF
  - *Fokus:* Kapasitas mesin CNC router Talang Jambe (122x244 cm), ragam mata spindle router, hasil potong rapi tanpa gerigi, dan jenis material non-logam lembaran.
  
- [x] **Hari 02:** `Panduan Jasa Cutting ACP Palembang untuk Fasad Toko dan Reklame` (Terbit: 21 Oktober 2026, Slug: `jasa-cutting-acp-palembang-fasad-reklame`)
  - *Target Keyword:* jasa cutting ACP Palembang, CNC cutting ACP, cutting ACP motif, jasa lubang ACP
  - *Fokus:* ACP Seven/Marks untuk fasad ruko dan neon box, ketebalan 3mm vs 4mm, motif perforated/ornamen, dan tarif potong per lembar.

- [x] **Hari 03:** `Partisi Ruangan Minimalis dari MDF dan PVC Board Menggunakan Mesin CNC Router` (Terbit: 22 Oktober 2026, Slug: `partisi-ruangan-mdf-pvc-board-cnc-router`)
  - *Target Keyword:* CNC PVC board, jasa potong PVC board, cutting MDF, jasa cutting partisi ruangan
  - *Fokus:* Perbandingan PVC board (tahan air/lembab) vs MDF (ekonomis) untuk partisi interior rumah dan cafe di iklim lembap Palembang.

- [x] **Hari 04:** `Jasa Potong Multiplek dan Plywood dengan CNC Router untuk Pengrajin Furniture` (Terbit: 23 Oktober 2026, Slug: `jasa-potong-multiplek-plywood-cnc-router-furniture`)
  - *Target Keyword:* CNC router multiplek, jasa potong multiplek CNC, jasa CNC router plywood, cutting panel dinding
  - *Fokus:* Solusi efisiensi waktu untuk workshop mebel & interior Palembang, pemotongan kisi-kisi kabinet, ambalan, dan wall panel dekoratif presisi.

- [x] **Hari 05:** `Biaya Jasa CNC Router Per Lembar di Palembang — Rincian Bahan dan Tanpa Bahan` (Terbit: 24 Oktober 2026, Slug: `biaya-jasa-cnc-router-per-lembar-palembang`)
  - *Target Keyword:* harga jasa CNC router per lembar, harga cutting ACP per lembar, jasa CNC router tanpa bahan
  - *Fokus:* Transparansi sistem harga jasa potong per keping lembaran utuh (122x244 cm) sesuai daftar harga resmi Sriwijaya Grafika.

---

### Kluster B: Laser CO2 & Spesialis Akrilik / Advertising
- [x] **Hari 06:** `Jasa Laser Cutting Akrilik Presisi di Palembang dengan Mesin Laser CO2` (Terbit: 26 Oktober 2026, Slug: `jasa-laser-cutting-akrilik-palembang-laser-co2`)
  - *Slug Rencana:* `jasa-laser-cutting-akrilik-palembang-laser-co2`
  - *Target Keyword:* jasa laser cutting akrilik, jasa potong akrilik, jasa laser CO2, laser cutting akrilik Palembang
  - *Fokus:* Keunggulan tepi potongan bening mengkilap (*flame-polished*), beda hasil laser CO2 vs pisau cutter manual, toleransi detail rumit.

- [ ] **Hari 07:** `Pembuatan Huruf Timbul dan Logo Kantor Custom dari Akrilik Laser Cutting`
  - *Slug Rencana:* `huruf-timbul-logo-kantor-akrilik-laser-cutting`
  - *Target Keyword:* jasa cutting huruf akrilik, huruf timbul akrilik, potong huruf akrilik, cutting logo akrilik
  - *Fokus:* Standardisasi akurasi huruf kecil font lekuk, kombinasi akrilik solid dan spon eva untuk signage instansi/perusahaan di Palembang.

- [ ] **Hari 08:** `Cara Hitung Tarif Jasa Potong Laser Akrilik Per Menit di Palembang`
  - *Slug Rencana:* `tarif-jasa-potong-laser-akrilik-per-menit-palembang`
  - *Target Keyword:* harga cutting akrilik, tarif laser CO2 per menit, jasa cutting akrilik tanpa bahan
  - *Fokus:* Simulasi sistem hitung durasi kerja mesin (Rp 4.000/menit), tips optimasi alur vektor agar waktu potong efisien dan hemat biaya.

- [ ] **Hari 09:** `Laser Cutting Akrilik untuk Neon Box dan Signage Usaha Kekinian`
  - *Slug Rencana:* `laser-cutting-akrilik-neon-box-signage`
  - *Target Keyword:* laser cutting akrilik untuk neon box, akrilik signage, cutting akrilik susu, jasa cutting akrilik reklame
  - *Fokus:* Penggunaan akrilik susu sebagai diffuser lampu LED yang merata, teknik sambungan interlocking box akrilik tanpa paku.

- [ ] **Hari 10:** `Jasa Pembuatan Nomor Rumah dan Plakat Akrilik Custom Laser Cutting`
  - *Slug Rencana:* `nomor-rumah-plakat-akrilik-custom-laser-cutting`
  - *Target Keyword:* jasa cutting akrilik untuk nomor rumah, jasa laser cutting plakat akrilik, cutting akrilik custom satuan
  - *Fokus:* Permintaan pasar ritel cluster perumahan Palembang untuk plat nomor rumah estetik, souvenir, dan plakat wisuda/penghargaan.

---

### Kluster C: Fiber Laser Logam Khusus (Stainless, Galvanis, Aluminium & Plat Tebal)
- [ ] **Hari 11:** `Jasa Laser Cutting Stainless Steel di Palembang — Pilih Grade 201 atau 304`
  - *Slug Rencana:* `laser-cutting-stainless-steel-palembang-201-304`
  - *Target Keyword:* jasa laser cutting stainless, laser cutting stainless steel, harga laser cutting stainless per meter
  - *Fokus:* Analisis ketahanan karat di Palembang, perbedaan potongan gas nitrogen (bersih) vs oksigen, ketebalan 0,8 – 3 mm.

- [ ] **Hari 12:** `Keunggulan Plat Galvanis dan Aluminium untuk Laser Cutting Eksterior`
  - *Slug Rencana:* `plat-galvanis-aluminium-laser-cutting-eksterior`
  - *Target Keyword:* jasa laser cutting galvanis, jasa laser cutting aluminium, jasa cutting plat galvanis
  - *Fokus:* Plat galvanis anti karat hemat biaya vs plat aluminium bobot ringan, karakteristik pemotongan fiber laser berdaya tinggi.

- [ ] **Hari 13:** `Jasa Potong Plat Besi Tebal hingga 12 mm dengan Mesin Fiber Laser`
  - *Slug Rencana:* `potong-plat-besi-tebal-12mm-fiber-laser-palembang`
  - *Target Keyword:* laser cutting plat tebal, laser cutting plat tipis, jasa potong plat laser presisi
  - *Fokus:* Kemampuan potong plat mild steel tebal untuk base plate tiang gedung, flange pipa, komponen mesin, dan ornamen gerbang besar.

- [ ] **Hari 14:** `Jasa Laser Cutting Tanpa Bahan — Solusi Bawa Plat Sendiri di Palembang`
  - *Slug Rencana:* `jasa-laser-cutting-tanpa-bahan-bawa-plat-sendiri`
  - *Target Keyword:* jasa laser cutting tanpa bahan, jasa potong plat per meter, jasa potong plat bahan sendiri
  - *Fokus:* Syarat membawa material sendiri (bebas karat berlebih, plat tidak melengkung), verifikasi file, dan tarif murni jasa potong per m².

---

### Kluster D: Elemen Arsitektural & Ornamen Bangunan
- [ ] **Hari 15:** `Railing Tangga dan Balkon Laser Cutting — Inspirasi Desain dan Ketebalan Plat`
  - *Slug Rencana:* `railing-tangga-balkon-laser-cutting-palembang`
  - *Target Keyword:* jasa cutting plat untuk railing tangga, ornamen plat besi, railing balkon laser cut
  - *Fokus:* Standar keamanan railing anak tangga (tebal plat minimal 1.5mm, kerapatan motif), finishing cat powder coating tahan gores.

- [ ] **Hari 16:** `Secondary Skin Fasad Laser Cutting untuk Meredam Panas Gedung dan Ruko`
  - *Slug Rencana:* `secondary-skin-fasad-laser-cutting-gedung-ruko`
  - *Target Keyword:* secondary skin motif, panel fasad bangunan, laser cutting fasad Palembang
  - *Fokus:* Efisiensi pendinginan ruangan (turun 3-5°C), pereduksi sinar matahari langsung ke kaca ruko di Palembang, tampilan futuristik.

- [ ] **Hari 17:** `Ornamen Plat Perforasi Custom untuk Dekorasi Dinding dan Plafon Modern`
  - *Slug Rencana:* `ornamen-plat-perforasi-custom-dinding-plafon`
  - *Target Keyword:* plat perforasi motif custom, ornamen besi custom, panel dekoratif besi
  - *Fokus:* Pola lubang bergradasi (perforated sheet) vs pola artistik bebas untuk ceiling hotel, partisi lobi kantor, dan fasad modern.

- [ ] **Hari 18:** `Pagar dan Partisi Motif Islami untuk Masjid dan Mushola di Palembang`
  - *Slug Rencana:* `pagar-partisi-motif-islami-masjid-palembang`
  - *Target Keyword:* cutting plat motif Islami, cutting motif kaligrafi laser cutting, jasa laser cutting partisi masjid
  - *Fokus:* Kaidah pembuatan sambungan huruf kaligrafi Arab agar kokoh saat dipotong laser, pemilihan plat galvanis anti karat untuk area ibadah.

- [ ] **Hari 19:** `Plat Nama Usaha dan Logo Perusahaan Berbahan Plat Besi Finishing Doff`
  - *Slug Rencana:* `plat-nama-usaha-logo-besi-finishing-doff`
  - *Target Keyword:* jasa potong plat nama, plat nama custom, logo plat besi
  - *Fokus:* Gaya industrial rustic vs modern minimalis, kombinasi plat potong laser dengan lampu warm white backlight.

---

### Kluster E: Kemitraan B2B & Kompatibilitas File Desain
- [ ] **Hari 20:** `Kemitraan Jasa Potong Plat Laser Cutting untuk Bengkel Las se-Palembang`
  - *Slug Rencana:* `kemitraan-jasa-potong-plat-bengkel-las-palembang`
  - *Target Keyword:* jasa cutting plat untuk bengkel las, jasa potong besi custom, cutting plat per lembar
  - *Fokus:* Sinergi B2B: bengkel las tidak perlu investasi mesin mahal, cukup subkontrak motif ke Laserindo Palembang untuk menambah portofolio pagar mewah.

- [ ] **Hari 21:** `Subkontrak Cutting ACP dan Akrilik untuk Kontraktor Reklame dan Advertising`
  - *Slug Rencana:* `subkontrak-cutting-acp-akrilik-advertising-palembang`
  - *Target Keyword:* jasa cutting ACP untuk kontraktor reklame, jasa potong akrilik huruf timbul, jasa cutting akrilik partai besar
  - *Fokus:* Kecepatan produksi deadline ketat tender advertising, toleransi presisi tinggi, dan skema harga khusus rekanan bisnis.

- [ ] **Hari 22:** `Format File Terbaik untuk Laser Cutting — Panduan Menyiapkan File DXF dan DWG`
  - *Slug Rencana:* `format-file-laser-cutting-panduan-dxf-dwg`
  - *Target Keyword:* jasa laser cutting file DXF, potong plat sesuai desain, jasa potong plat dari gambar kerja
  - *Fokus:* Cara membersihkan garis ganda (*duplicate lines*), memastikan *closed vector*, satuan milimeter skala 1:1, dan kompatibilitas software CAM.

- [ ] **Hari 23:** `Cara Siapkan File CorelDRAW (CDR) untuk Potong Laser dan CNC Router`
  - *Slug Rencana:* `siapkan-file-coreldraw-cdr-laser-cutting-cnc`
  - *Target Keyword:* jasa laser cutting file CDR, jasa laser cutting akrilik file CorelDRAW, jasa CNC cutting file CorelDRAW
  - *Fokus:* Convert to curves (Ctrl+Q), hairline outline, pembedaan warna layer (merah untuk potong tembus, hitam untuk grafir / ukir).

- [ ] **Hari 24:** `Bisa Potong Plat dari Gambar Foto Sketsa — Layanan Redraw Desain Laserindo`
  - *Slug Rencana:* `potong-plat-dari-foto-sketsa-redraw-desain`
  - *Target Keyword:* jasa laser cutting desain dari foto, jasa cutting plat gambar sendiri, cutting plat sesuai desain
  - *Fokus:* Solusi bagi customer atau desainer yang hanya membawa foto contoh dari Pinterest/Instagram; proses konversi foto ke file vector siap potong.

---

### Kluster F: Transaksi, Estimasi Biaya & Geo-Targeting Sumsel
- [ ] **Hari 25:** `Biaya Pembuatan Pagar Laser Cutting Per Meter Persegi di Palembang 2026`
  - *Slug Rencana:* `biaya-pembuatan-pagar-laser-cutting-per-meter-palembang`
  - *Target Keyword:* harga laser cutting motif per meter, harga laser cutting plat besi, biaya jasa cutting plat custom
  - *Fokus:* Rincian komponen harga terima jadi (plat besi motif + rangka pipa hollow galvanis + engsel/kunci + cat epoxy/PU + ongkos pasang).

- [ ] **Hari 26:** `Rincian Biaya Potong Bahan Sendiri vs Terima Jadi di Laserindo Palembang`
  - *Slug Rencana:* `biaya-potong-bahan-sendiri-vs-terima-jadi-palembang`
  - *Target Keyword:* harga cutting tanpa bahan, biaya minimum jasa laser cutting, biaya produksi laser cutting
  - *Fokus:* Analisis perbandingan untung rugi antara opsi membawa bahan mentah sendiri vs mempercayakan seluruh fabrikasi kepada Laserindo.

- [ ] **Hari 27:** `Jasa Laser Cutting dan CNC Router Sukarami Palembang — Dekat Bandara SMB II`
  - *Slug Rencana:* `jasa-laser-cutting-cnc-router-sukarami-palembang`
  - *Target Keyword:* jasa laser cutting Sukarami, jasa laser cutting Palembang, workshop laser cutting Talang Jambe
  - *Fokus:* Aksesibilitas workshop di Talang Jambe Sukarami, kemudahan bongkar muat plat lembaran besar tanpa hambatan jalan kota.

- [ ] **Hari 28:** `Layanan Laser Cutting Plat Besi dan Kanopi untuk Wilayah Banyuasin dan Sekitarnya`
  - *Slug Rencana:* `layanan-laser-cutting-plat-kanopi-banyuasin`
  - *Target Keyword:* jasa CNC router Banyuasin, laser cutting plat besi Banyuasin, kanopi laser cutting
  - *Fokus:* Jangkauan survey dan pemasangan ke perumahan Talang Kelapa, Kenten Laut, Tanjung Lago, hingga Pangkalan Balai.

- [ ] **Hari 29:** `Jasa Laser Cutting Plat Pagar dan Ornamen untuk Wilayah Prabumulih`
  - *Slug Rencana:* `jasa-laser-cutting-pagar-ornamen-prabumulih`
  - *Target Keyword:* jasa laser cutting Prabumulih, pagar laser cutting Prabumulih, jasa potong plat motif
  - *Fokus:* Solusi fabrikasi panel ornamen dan pagar potong laser siap rakit dengan pengiriman aman ke Kota Prabumulih.

- [ ] **Hari 30:** `Pengiriman Panel Laser Cutting dan Ornamen ke Muara Enim dan Lahat`
  - *Slug Rencana:* `pengiriman-panel-laser-cutting-muara-enim-lahat`
  - *Target Keyword:* jasa cutting plat Muara Enim, jasa laser cutting Sumatera Selatan
  - *Fokus:* Proteksi kemasan packing kayu khusus untuk ekspedisi plat logam jarak jauh ke kawasan industri/pertambangan Muara Enim & Lahat.

- [ ] **Hari 31:** `Laser Cutting Plat Nama dan Nomor Rumah Akrilik untuk Perumahan Baru Palembang`
  - *Slug Rencana:* `laser-cutting-plat-nama-nomor-rumah-perumahan-palembang`
  - *Target Keyword:* jasa cutting plat nomor rumah, jasa potong akrilik untuk nomor rumah, ornamen pagar custom
  - *Fokus:* Paket pemesanan massal untuk developer cluster perumahan baru di Seberang Ulu, Jakabaring, Alang-Alang Lebar, dan Gandus.

- [ ] **Hari 32:** `Mengapa Memilih Sriwijaya Grafika & Laserindo Palembang — Dedikasi Sejak 2008`
  - *Slug Rencana:* `mengapa-memilih-sriwijaya-grafika-laserindo-palembang`
  - *Target Keyword:* jasa laser cutting Palembang, cutting laser Palembang, jasa CNC router Palembang
  - *Fokus:* Otoritas brand, rekam jejak 16+ tahun sejak 2008, workshop 3 jenis mesin terpadu, garansi 1 tahun, dan misi sosial pemberdayaan tenaga kerja inklusif.
