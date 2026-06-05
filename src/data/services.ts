export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  benefits: string[];
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
    description: 'Pagar rumah motif laser cutting presisi tinggi. Tersedia berbagai motif modern, floral, geometris, dan kaligrafi.',
    intro: 'Bosan dengan pagar yang itu-itu saja? Dengan laser cutting, pagar rumah Anda bisa jadi karya seni. Kami memotong plat besi dengan presisi tinggi menggunakan mesin CNC laser, menghasilkan motif yang rapi, bersih, dan tahan lama.',
    benefits: [
      'Motif custom sesuai keinginan — gambar coretan Anda bisa jadi pagar',
      'Presisi tinggi, tidak ada bekas las kasar atau tajam',
      'Tahan karat dengan finishing cat doff berkualitas',
      'Motif songket Palembang, floral, geometris, atau abstrak',
      'Pemasangan profesional dengan garansi 1 tahun',
    ],
    priceRange: 'Rp800.000 - Rp3.000.000 / m²',
    priceMin: 800000,
    priceMax: 3000000,
    keywords: ['pagar laser cutting palembang', 'pagar besi cutting laser', 'motif pagar laser', 'pagar rumah cutting laser'],
    motifs: ['Geometris Minimalis', 'Floral Modern', 'Kaligrafi Islami', 'Songket Palembang', 'Pohon Gundul'],
  },
  {
    slug: 'kanopi',
    title: 'Kanopi Laser Cutting',
    shortTitle: 'Kanopi',
    description: 'Kanopi rumah dengan motif cutting laser yang elegan. Perpaduan fungsi teduh dan estetika modern.',
    intro: 'Kanopi bukan hanya pelindung dari panas dan hujan. Dengan teknologi laser cutting, kanopi Anda bisa menjadi elemen estetika yang mempercantik tampilan rumah. Pilih motif favorit Anda dari koleksi kami.',
    benefits: [
      'Motif cutting laser presisi untuk tampilan eksklusif',
      'Material besi berkualitas, kuat dan tahan lama',
      'Tersedia motif geometris, floral, arabesque, dan custom',
      'Finishing cat doff anti karat',
      'Konsultasi desain gratis sebelum produksi',
    ],
    priceRange: 'Rp900.000 - Rp3.500.000 / m²',
    priceMin: 900000,
    priceMax: 3500000,
    keywords: ['kanopi laser cutting palembang', 'kanopi cutting laser', 'kanopi besi cutting', 'kanopi motif'],
    motifs: ['Geometris Minimalis', 'Hexagon', 'Daun Tropis', 'Arabesque Modern', 'Garis Vertikal'],
  },
  {
    slug: 'partisi',
    title: 'Partisi & Dinding Laser Cutting',
    shortTitle: 'Partisi',
    description: 'Partisi interior dan dinding dekoratif dengan motif cutting laser. Solusi estetik untuk ruang tamu, kantor, dan cafe.',
    intro: 'Buat ruangan Anda lebih hidup dengan partisi laser cutting. Cocok untuk interior rumah, kantor, restoran, atau cafe. Tersedia berbagai motif dari yang minimalis hingga detail rumit.',
    benefits: [
      'Memisahkan ruangan tanpa mengurangi kesan luas',
      'Motif estetik untuk background foto instagramable',
      'Bisa untuk material besi, akrilik, atau kayu',
      'Desain custom sesuai tema ruangan',
      'Finishing halus, aman untuk interior',
    ],
    priceRange: 'Rp600.000 - Rp2.000.000 / m²',
    priceMin: 600000,
    priceMax: 2000000,
    keywords: ['partisi laser cutting palembang', 'partisi dinding cutting', 'sekat ruangan laser cutting'],
    motifs: ['Mozaik Lingkaran', 'Batik Nusantara', 'Moroccan Pattern', 'Floral Modern', 'Geometris'],
  },
  {
    slug: 'railing',
    title: 'Railing Tangga Laser Cutting',
    shortTitle: 'Railing',
    description: 'Railing tangga dengan motif cutting laser yang elegan. Kombinasi keamanan dan keindahan untuk rumah Anda.',
    intro: 'Railing tangga adalah elemen yang langsung terlihat saat memasuki rumah. Dengan motif cutting laser, railing tangga Anda bisa menjadi pusat perhatian yang elegan dan unik.',
    benefits: [
      'Motif eksklusif yang tidak pasaran',
      'Presisi tinggi, sambungan rapi tanpa cacat',
      'Kuat dan aman untuk pegangan tangga',
      'Pilihan motif geometris, floral, atau custom',
      'Finishing cat doff atau coating anti karat',
    ],
    priceRange: 'Rp750.000 - Rp2.500.000 / meter lari',
    priceMin: 750000,
    priceMax: 2500000,
    keywords: ['railing tangga laser cutting palembang', 'railing cutting laser', 'pagar tangga cutting'],
    motifs: ['Garis Vertikal Miring', 'Geometris Minimalis', 'Floral Modern', 'Pohon Gundul', 'Mozaik'],
  },
  {
    slug: 'fasad',
    title: 'Fasad Bangunan Laser Cutting',
    shortTitle: 'Fasad',
    description: 'Fasad bangunan dengan cutting laser untuk tampilan ikonik dan modern. Kesan mewah untuk rumah, kantor, atau gedung.',
    intro: 'First impression dimulai dari fasad. Dengan teknologi laser cutting, tampilan depan bangunan Anda akan terlihat ikonik, modern, dan berbeda dari yang lain. Cocok untuk rumah, ruko, maupun gedung perkantoran.',
    benefits: [
      'Tampilan bangunan yang unik dan ikonik',
      'Motif cutting yang presisi dan konsisten',
      'Material besi plat berkualitas dengan coating anti karat',
      'Tersedia motif kaligrafi, geometris, arabesque, dan abstrak',
      'Nilai tambah properti Anda',
    ],
    priceRange: 'Rp1.000.000 - Rp4.000.000 / m²',
    priceMin: 1000000,
    priceMax: 4000000,
    keywords: ['fasad laser cutting palembang', 'fasad bangunan cutting', 'tampak depan rumah cutting laser'],
    motifs: ['Kaligrafi Islami', 'Arabesque Modern', 'Daun Tropis', 'Hexagon', 'Batik Nusantara'],
  },
];
