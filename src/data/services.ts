export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  titleSeo: string;
  image: string;
  description: string;
  intro: string;
  benefits: string[];
  longDescription: string;
  process: { title: string; description: string }[];
  materialSpecs: { label: string; value: string }[];
  priceRange: string;
  priceMin: number;
  priceMax: number;
  keywords: string[];
  motifs: string[];
}

export const services: ServiceItem[] = [
  {
    slug: 'pagar',
    title: 'Pagar Laser Cutting',
    shortTitle: 'Pagar',
    titleSeo: 'Pembuatan Pagar Laser Cutting Palembang. Cepat, Presisi & Berkualitas',
    image: '/img/layanan/pagar-laser-cutting-palembang.webp',
    description: 'Pagar rumah motif laser cutting presisi tinggi. Tersedia berbagai motif modern, floral, geometris, dan kaligrafi.',
    intro: 'Bosan dengan pagar yang itu-itu saja? Dengan laser cutting, pagar rumah Anda bisa jadi karya seni. Kami memotong plat besi dengan presisi tinggi menggunakan mesin CNC laser, menghasilkan motif yang rapi, bersih, dan tahan lama.',
    benefits: [
      'Motif custom sesuai keinginan — gambar coretan Anda bisa jadi pagar',
      'Presisi tinggi, tidak ada bekas las kasar atau tajam',
      'Tahan karat dengan finishing cat doff berkualitas',
      'Motif songket Palembang, floral, geometris, atau abstrak',
      'Pemasangan profesional dengan garansi 1 tahun',
    ],
    longDescription: 'Pagar laser cutting adalah solusi modern bagi Anda yang menginginkan keamanan sekaligus nilai estetika tinggi pada hunian. Di Laserindo Palembang, kami memproduksi pagar menggunakan plat besi (mild steel) berkualitas yang dipotong dengan mesin fiber laser tercanggih. Proses ini memungkinkan terciptanya desain yang sangat rumit dan mendetail, mulai dari pola geometris minimalis hingga motif songket khas Palembang yang ikonik. Setiap pagar dirancang untuk tahan terhadap cuaca ekstrem Palembang, memberikan perlindungan maksimal bagi keluarga Anda sekaligus meningkatkan prestise bangunan.',
    process: [
      { title: 'Konsultasi Desain', description: 'Kami membantu Anda memilih atau membuat motif custom yang sesuai dengan karakter rumah Anda.' },
      { title: 'Mockup 3D', description: 'Visualisasi desain pagar pada foto rumah Anda agar hasil akhir sesuai ekspektasi.' },
      { title: 'Produksi Presisi', description: 'Pemotongan plat menggunakan mesin fiber laser dengan toleransi akurasi hingga 0.1mm.' },
      { title: 'Finishing & Coating', description: 'Pemberian lapisan anti karat dan cat finishing premium (powder coating atau epoxy).' }
    ],
    materialSpecs: [
      { label: 'Ketebalan Plat', value: '1.2 mm - 2.0 mm' },
      { label: 'Rangka Utama', value: 'Hollow Galvanis 40x40 / 40x60' },
      { label: 'Sistem Las', value: 'TIG Welding (Rapi & Kuat)' },
      { label: 'Warna Finishing', value: 'Black Doff, White, Gold, Bronze' }
    ],
    priceRange: 'Rp. 800.000 - Rp. 3.000.000 / m²',
    priceMin: 800000,
    priceMax: 3000000,
    keywords: ['pagar laser cutting palembang', 'pagar besi cutting laser', 'motif pagar laser', 'pagar rumah cutting laser'],
    motifs: ['Geometris Minimalis', 'Floral Modern', 'Daun Tropis Lebar', 'Kaligrafi Islami', 'Songket Palembang', 'Pohon Ranting'],
  },
  {
    slug: 'kanopi',
    title: 'Kanopi Laser Cutting',
    shortTitle: 'Kanopi',
    titleSeo: 'Pembuatan Kanopi Laser Cutting Palembang. Cepat, Presisi & Berkualitas',
    image: '/img/layanan/kanopi-laser-cutting-palembang.webp',
    description: 'Kanopi rumah dengan motif cutting laser yang elegan. Perpaduan fungsi teduh dan estetika modern.',
    intro: 'Kanopi bukan hanya pelindung dari panas dan hujan. Dengan teknologi laser cutting, kanopi Anda bisa menjadi elemen estetika yang mempercantik tampilan rumah. Pilih motif favorit Anda dari koleksi kami.',
    benefits: [
      'Motif cutting laser presisi untuk tampilan eksklusif',
      'Material besi berkualitas, kuat dan tahan lama',
      'Tersedia motif geometris, floral, arabesque, dan custom',
      'Finishing cat doff anti karat',
      'Konsultasi desain gratis sebelum produksi',
    ],
    longDescription: 'Kanopi laser cutting memberikan sentuhan artistik yang dramatis pada eksterior rumah Anda. Cahaya matahari yang masuk melalui celah motif akan menciptakan bayangan unik di lantai teras, memberikan suasana yang nyaman dan mewah. Kami menggunakan kombinasi rangka yang kokoh dan plat laser cutting yang presisi untuk menjamin keamanan dan keindahan jangka panjang. Cocok untuk area carport, teras depan, hingga balkon lantai dua.',
    process: [
      { title: 'Pengukuran Lokasi', description: 'Tim kami melakukan survey untuk memastikan dimensi kanopi presisi dengan area teras.' },
      { title: 'Pemilihan Atap', description: 'Pilihan atap kaca tempered, polycarbonate, atau alderon di atas panel laser.' },
      { title: 'Cutting & Fabrikasi', description: 'Pemotongan panel dekoratif menggunakan teknologi fiber laser terbaru.' },
      { title: 'Instalasi Lapangan', description: 'Pemasangan oleh tim profesional dengan fokus pada keamanan struktur.' }
    ],
    materialSpecs: [
      { label: 'Tebal Plat Panel', value: '1.2 mm - 1.5 mm' },
      { label: 'Rangka Kanopi', value: 'Hollow Galvanis 50x100 / 40x80' },
      { label: 'Atap Pelindung', value: 'Tempered Glass / Polycarbonate' },
      { label: 'Finishing', value: 'Epoxy Primer & PU Paint' }
    ],
    priceRange: 'Rp. 900.000 - Rp. 3.500.000 / m²',
    priceMin: 900000,
    priceMax: 3500000,
    keywords: ['kanopi laser cutting palembang', 'kanopi cutting laser', 'kanopi besi cutting', 'kanopi motif'],
    motifs: ['Geometris Minimalis', 'Hexagon', 'Daun Tropis', 'Arabesque Modern', 'Garis Vertikal'],
  },
  {
    slug: 'partisi',
    title: 'Partisi & Dinding Laser Cutting',
    shortTitle: 'Partisi',
    titleSeo: 'Pembuatan Partisi & Dinding Laser Cutting Palembang. Cepat, Presisi & Berkualitas',
    image: '/img/layanan/partisi-laser-cutting-palembang.webp',
    description: 'Partisi interior dan dinding dekoratif dengan motif cutting laser. Solusi estetik untuk ruang tamu, kantor, dan cafe.',
    intro: 'Buat ruangan Anda lebih hidup dengan partisi laser cutting. Cocok untuk interior rumah, kantor, restoran, atau cafe. Tersedia berbagai motif dari yang minimalis hingga detail rumit.',
    benefits: [
      'Memisahkan ruangan tanpa mengurangi kesan luas',
      'Motif estetik untuk background foto instagramable',
      'Bisa untuk material besi, akrilik, atau kayu',
      'Desain custom sesuai tema ruangan',
      'Finishing halus, aman untuk interior',
    ],
    longDescription: 'Partisi laser cutting adalah pilihan cerdas untuk membagi area fungsional dalam satu ruangan tanpa harus membangun dinding permanen yang masif. Dengan panel yang tembus pandang secara visual (semi-transparent), ruangan tetap terasa luas dan aliran udara tidak terhambat. Material yang kami tawarkan sangat beragam, mulai dari besi untuk kesan industrial, hingga akrilik atau kayu MDF untuk kesan yang lebih ringan dan hangat.',
    process: [
      { title: 'Analisis Ruang', description: 'Menentukan dimensi dan tingkat privasi yang dibutuhkan pada sekat ruangan.' },
      { title: 'Custom Motif', description: 'Bisa mengintegrasikan logo perusahaan atau pola dekoratif kustom.' },
      { title: 'Cutting Halus', description: 'Proses pemotongan dengan kecepatan tinggi untuk hasil tepi yang halus.' },
      { title: 'Finishing Interior', description: 'Cat premium yang tidak berbau dan aman untuk lingkungan dalam ruangan.' }
    ],
    materialSpecs: [
      { label: 'Pilihan Material', value: 'Besi, Akrilik, Wood/MDF' },
      { label: 'Tebal Material', value: '2 mm - 10 mm (Tergantung jenis)' },
      { label: 'Frame Panel', value: 'Besi Siku / Frame Minimalis' },
      { label: 'Pemasangan', value: 'Fixing Bolt / Rel Gantung' }
    ],
    priceRange: 'Rp. 600.000 - Rp. 2.000.000 / m²',
    priceMin: 600000,
    priceMax: 2000000,
    keywords: ['partisi laser cutting palembang', 'partisi dinding cutting', 'sekat ruangan laser cutting'],
    motifs: ['Mozaik Lingkaran', 'Batik Nusantara', 'Moroccan Pattern', 'Floral Modern', 'Geometris'],
  },
  {
    slug: 'railing',
    title: 'Railing Tangga Laser Cutting',
    shortTitle: 'Railing',
    titleSeo: 'Pembuatan Railing Tangga Laser Cutting Palembang. Cepat, Presisi & Berkualitas',
    image: '/img/layanan/railing-tangga-laser-cutting-palembang.webp',
    description: 'Railing tangga dengan motif cutting laser yang elegan. Kombinasi keamanan dan keindahan untuk rumah Anda.',
    intro: 'Railing tangga adalah elemen yang langsung terlihat saat memasuki rumah. Dengan motif cutting laser, railing tangga Anda bisa menjadi pusat perhatian yang elegan dan unik.',
    benefits: [
      'Motif eksklusif yang tidak pasaran',
      'Presisi tinggi, sambungan rapi tanpa cacat',
      'Kuat dan aman untuk pegangan tangga',
      'Pilihan motif geometris, floral, atau custom',
      'Finishing cat doff atau coating anti karat',
    ],
    longDescription: 'Railing tangga laser cutting menggantikan jeruji tangga konvensional dengan panel dekoratif yang kokoh. Ini adalah solusi bagi rumah bertingkat yang ingin menonjolkan detail arsitektural pada tangga. Dengan teknologi laser, setiap lengkungan pada pegangan tangga dan panel motif diproduksi secara akurat agar pas saat dipasang di lokasi. Keamanan bagi anak-anak juga menjadi prioritas kami dengan mengatur kerapatan motif.',
    process: [
      { title: 'Template Lapangan', description: 'Pembuatan mal atau template manual untuk tangga yang memiliki sudut unik.' },
      { title: 'Produksi Panel', description: 'Pemotongan lembaran plat sesuai dengan kemiringan tangga Anda.' },
      { title: 'Perakitan Handrail', description: 'Pengelasan panel ke tiang dan pegangan tangga secara presisi.' },
      { title: 'Finishing Premium', description: 'Pengecatan dengan teknik semprot halus agar nyaman saat disentuh.' }
    ],
    materialSpecs: [
      { label: 'Tebal Plat', value: '1.2 mm - 1.5 mm' },
      { label: 'Tiang Railing', value: 'Hollow Galvanis / Stainless' },
      { label: 'Handrail', value: 'Kayu Kamper / Besi Hollow' },
      { label: 'Toleransi Presisi', value: '0.1 mm' }
    ],
    priceRange: 'Rp. 750.000 - Rp. 2.500.000 / meter lari',
    priceMin: 750000,
    priceMax: 2500000,
    keywords: ['railing tangga laser cutting palembang', 'railing cutting laser', 'pagar tangga cutting'],
    motifs: ['Garis Vertikal Miring', 'Geometris Minimalis', 'Floral Modern', 'Pohon Ranting', 'Mozaik'],
  },
  {
    slug: 'fasad',
    title: 'Fasad Bangunan Laser Cutting',
    shortTitle: 'Fasad',
    titleSeo: 'Pembuatan Fasad Bangunan Laser Cutting Palembang. Cepat, Presisi & Berkualitas',
    image: '/img/layanan/fasad-bangunan-laser-cutting-palembang.webp',
    description: 'Fasad bangunan dengan cutting laser untuk tampilan ikonik dan modern. Kesan mewah untuk rumah, kantor, atau gedung.',
    intro: 'First impression dimulai dari fasad. Dengan teknologi laser cutting, tampilan depan bangunan Anda akan terlihat ikonik, modern, dan berbeda dari yang lain. Cocok untuk rumah, ruko, maupun gedung perkantoran.',
    benefits: [
      'Tampilan bangunan yang unik dan ikonik',
      'Motif cutting yang presisi dan konsisten',
      'Material besi plat berkualitas dengan coating anti karat',
      'Tersedia motif kaligrafi, geometris, arabesque, dan abstrak',
      'Nilai tambah properti Anda',
    ],
    longDescription: 'Fasad atau "second skin" laser cutting adalah tren arsitektur terbaru yang banyak diaplikasikan pada gedung perkantoran dan ruko di Palembang. Selain memberikan estetika yang sangat kuat, fasad ini berfungsi sebagai penahan panas matahari (sun shading) tanpa menghalangi pandangan ke luar. Kami mampu memproduksi panel fasad dalam jumlah besar dengan konsistensi motif yang sangat terjaga menggunakan mesin fiber laser berkapasitas besar.',
    process: [
      { title: 'Survey Konstruksi', description: 'Pengecekan kekuatan struktur bangunan untuk menopang beban fasad.' },
      { title: 'Desain Modulasi', description: 'Pembagian area fasad menjadi modul-modul yang mudah dipasang.' },
      { title: 'Cutting Kapasitas Besar', description: 'Produksi cepat untuk mengejar deadline proyek konstruksi.' },
      { title: 'Pemasangan Scaffold', description: 'Instalasi oleh tim yang berpengalaman bekerja di ketinggian.' }
    ],
    materialSpecs: [
      { label: 'Material Favorit', value: 'Besi Plat / ACP' },
      { label: 'Tebal Plat', value: '1.4 mm - 2.0 mm' },
      { label: 'Coating', value: 'Powder Coating (Sangat Awet)' },
      { label: 'Bracket System', value: 'Heavy Duty Dynabolt' }
    ],
    priceRange: 'Rp. 1.000.000 - Rp. 4.000.000 / m²',
    priceMin: 1000000,
    priceMax: 4000000,
    keywords: ['fasad laser cutting palembang', 'fasad bangunan cutting', 'tampak depan rumah cutting laser'],
    motifs: ['Kaligrafi Islami', 'Arabesque Modern', 'Daun Tropis', 'Hexagon', 'Batik Nusantara'],
  },
  {
    slug: 'plat-nama',
    title: 'Plat Nama & Trofi Laser Cutting',
    shortTitle: 'Plat Nama',
    titleSeo: 'Pembuatan Plat Nama & Trofi Laser Cutting Palembang. Cepat, Presisi & Berkualitas',
    image: '/img/layanan/plat-nama-laser-cutting-palembang.webp',
    description: 'Papan nama, plat nama kantor, dan trofi akrilik/logam dengan cutting laser presisi. Cocok untuk perusahaan, instansi, dan hadiah.',
    intro: 'Kesan profesional dimulai dari detail kecil. Kami membuat plat nama kantor, papan nama usaha, dan trofi custom dengan teknologi laser cutting. Hasil potongan rapi, presisi, dan siap pakai. Cocok untuk branding perusahaan, instansi pemerintah, ataupun hadiah untuk acara penghargaan.',
    benefits: [
      'Presisi tinggi untuk teks dan logo yang detail',
      'Bisa custom bentuk, ukuran, dan font sesuai keinginan',
      'Tersedia material akrilik, stainless, besi, atau kayu MDF',
      'Pengerjaan cepat — ready dalam 1-2 hari kerja',
      'Cocok untuk papan nama ruangan, trofi, plakat, dan signage',
    ],
    longDescription: 'Plat nama dan trofi membutuhkan tingkat ketelitian mikroskopis. Dengan teknologi fiber laser kami, setiap lekukan logo perusahaan atau font yang sangat kecil sekalipun dapat terpotong dengan bersih tanpa sisa pembakaran. Kami melayani pembuatan signage indoor untuk lobi kantor hingga plakat penghargaan eksklusif untuk acara besar di Palembang.',
    process: [
      { title: 'Finalisasi Logo', description: 'Pengecekan file logo agar siap dipotong secara digital (vectorizing).' },
      { title: 'Pemilihan Material', description: 'Kombinasi material akrilik, stainless mirror, atau kayu elegan.' },
      { title: 'Engraving & Cutting', description: 'Proses potong sekaligus ukir nama dan detail penghargaan.' },
      { title: 'Packaging Aman', description: 'Pengemasan khusus agar trofi sampai di tangan Anda tanpa cacat.' }
    ],
    materialSpecs: [
      { label: 'Material Akrilik', value: 'Clear, White, Gold Mirror' },
      { label: 'Material Logam', value: 'Stainless Steel / Brass' },
      { label: 'Teknik Tambahan', value: 'UV Print / Gravir' },
      { label: 'Lead Time', value: '1 - 3 Hari Kerja' }
    ],
    priceRange: 'Rp. 50.000 - Rp. 500.000 / pcs',
    priceMin: 50000,
    priceMax: 500000,
    keywords: ['plat nama laser cutting palembang', 'papan nama akrilik palembang', 'trofi custom palembang', 'signage cutting laser'],
    motifs: ['Custom Teks & Logo', 'Geometris Minimalis', 'Bentuk Bebas (Custom)'],
  },
];
