export interface MaterialItem {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  thickness: string;
  advantages: string[];
  uses: string[];
  priceRange: string;
}

export const materials: MaterialItem[] = [
  {
    slug: 'besi',
    title: 'Jasa Laser Cutting Plat Besi Palembang — Fiber Laser Presisi',
    shortTitle: 'Plat Besi & Galvanis',
    description: 'Jasa laser cutting plat besi dan galvanis Palembang presisi tinggi dengan mesin Fiber Laser. Siap potong plat tebal 0.6 mm s/d 12 mm tanpa gerinda untuk pagar, kanopi, dan ornamen.',
    intro: 'Besi plat (mild steel) dan galvanis adalah material andalan untuk elemen arsitektural eksterior. Di workshop Laserindo Palembang, kami memotong plat besi dengan mesin fiber laser berdaya tinggi yang menghasilkan potongan presisi toleransi 0.1 mm, sudut tajam rapi, dan bebas gerinda (dross-free).',
    thickness: '0.6 mm - 12 mm',
    advantages: [
      'Presisi tinggi dengan mesin fiber laser (toleransi 0.1 mm)',
      'Hasil potongan bersih dan rapi tanpa gerinda (dross-free)',
      'Mampu memotong plat tipis hingga plat tebal 12 mm',
      'Tersedia opsi potong bahan sendiri (tanpa bahan) atau terima jadi',
    ],
    uses: ['Pagar Rumah & Cluster', 'Kanopi Carport', 'Fasad Gedung & Ruko', 'Railing Tangga & Balkon', 'Base Plate & Flange'],
    priceRange: 'Rp 200.000 - Rp 850.000 / m²',
  },
  {
    slug: 'stainless',
    title: 'Jasa Laser Cutting Stainless Steel Palembang — Presisi & Tahan Karat',
    shortTitle: 'Stainless Steel',
    description: 'Jasa potong laser cutting stainless steel Palembang grade 201 dan 304. Potongan bersih gas nitrogen, anti karat, dan mengkilap untuk railing, partisi, dan signage mewah.',
    intro: 'Stainless steel adalah pilihan premium untuk kebutuhan dekoratif dan arsitektural yang menuntut ketahanan korosi tinggi. Kami memotong plat stainless steel menggunakan bantuan gas nitrogen pada mesin fiber laser, menghasilkan tepi potong yang bersih mengkilap tanpa bekas gosong.',
    thickness: '0.6 mm - 3 mm',
    advantages: [
      'Tahan karat optimal untuk aplikasi interior maupun eksterior',
      'Pemotongan dengan gas nitrogen menghasilkan tepi bebas gosong',
      'Tampilan mewah mengkilap (mirror atau hairline finish)',
      'Akurasi lekukan detail tinggi untuk logo dan ornamen eksklusif',
    ],
    uses: ['Railing Tangga Mewah', 'Partisi Ruangan Eksklusif', 'Signage & Logo Perusahaan', 'Plat Nama Kantor', 'Aksesoris Interior'],
    priceRange: 'Rp 200.000 - Rp 350.000 / m²',
  },
  {
    slug: 'akrilik',
    title: 'Jasa Laser Cutting Akrilik Palembang — Potong Presisi Mesin CO2',
    shortTitle: 'Akrilik (Acrylic)',
    description: 'Jasa potong laser cutting akrilik Palembang dengan mesin Laser CO2. Tepi potongan bening mengkilap flame-polished untuk huruf timbul, neon box, plakat, dan signage.',
    intro: 'Akrilik adalah material serbaguna yang sangat populer untuk advertising dan dekorasi interior modern. Workshop kami menggunakan mesin Laser CO2 khusus yang membuat tepi potongan akrilik menjadi sangat halus, bening mengkilap (flame-polished), dan siap langsung dirakit tanpa perlu poles manual.',
    thickness: '2 mm - 10 mm',
    advantages: [
      'Tepi potongan bening mengkilap (flame-polished edge) otomatis',
      'Tersedia akrilik bening, warna solid, dan putih susu untuk diffuser LED',
      'Akurat memotong huruf timbul berukuran kecil dan font kaligrafi',
      'Sistem tarif transparan berbasis durasi pengerjaan per menit',
    ],
    uses: ['Huruf Timbul & Signage', 'Cover Neon Box Usaha', 'Plakat & Trofi Custom', 'Plat Nomor Rumah', 'Partisi Meja Kantor'],
    priceRange: 'Rp 4.000 / menit (Laser CO2)',
  },
  {
    slug: 'kayu-mdf',
    title: 'Jasa CNC Router Kayu, Multiplek & MDF Palembang — Presisi Furniture',
    shortTitle: 'Kayu, Multiplek & MDF',
    description: 'Jasa CNC router multiplek, plywood, dan cutting MDF Palembang. Presisi tinggi spindle CNC untuk partisi interior ruangan, kisi-kisi dinding, dan komponen furniture.',
    intro: 'Plywood (multiplek) dan MDF memberikan nuansa natural dan hangat pada ruangan. Workshop kami memotong lembaran kayu olahan menggunakan mesin CNC Router berspindle putaran tinggi, menghasilkan potongan tepi yang tegak lurus, rata, dan presisi untuk kemudahan perakitan furniture.',
    thickness: '3 mm - 20 mm',
    advantages: [
      'Kapasitas area kerja lembaran utuh 122 x 244 cm',
      'Potongan tegak lurus dan presisi memudahkan proses perakitan mebel',
      'Mampu memproses multiplek dan MDF tebal hingga 20 mm',
      'Cocok untuk pembuatan kisi-kisi interior, ambalan, dan relief dinding',
    ],
    uses: ['Partisi Ruangan Minimalis', 'Wall Paneling & Kisi-Kisi Dinding', 'Komponen Lemari & Kabinet', 'Furniture Custom', 'Dekorasi Interior'],
    priceRange: 'Rp 200.000 - Rp 420.000 / keping',
  },
  {
    slug: 'acp-pvc',
    title: 'Jasa Cutting ACP & CNC Router PVC Board Palembang — Fasad & Reklame',
    shortTitle: 'ACP & PVC Board',
    description: 'Jasa cutting ACP Palembang dan CNC router PVC board untuk fasad gedung, toko, neon box, dan partisi tahan air. Pengerjaan cepat lembaran utuh 122 x 244 cm.',
    intro: 'Aluminium Composite Panel (ACP) dan PVC Board adalah kombinasi material modern untuk kebutuhan luar ruang dan area lembap. Kami mengerjakan pemotongan ACP untuk fasad ruko serta PVC board untuk partisi tahan rayap dan air menggunakan mesin CNC Router berkapasitas besar.',
    thickness: '3 mm - 20 mm',
    advantages: [
      'ACP tahan panas matahari langsung dan cuaca ekstrem Palembang',
      'PVC Board 100% anti rayap, tahan air, dan tidak lapuk',
      'Pemotongan lembaran utuh cepat untuk mengejar deadline proyek reklame',
      'Dukungan motif berlubang (perforasi), kaligrafi, dan pola geometris',
    ],
    uses: ['Fasad Ruko & Gedung (ACP)', 'Papan Reklame & Neon Box', 'Partisi Ruangan Anti Air (PVC)', 'Plafon Dekoratif', 'Plang Toko Komposit'],
    priceRange: 'Rp 200.000 - Rp 400.000 / keping',
  },
];
