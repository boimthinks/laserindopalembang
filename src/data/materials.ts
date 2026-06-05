export interface MaterialItem {
  slug: string;
  title: string;
  description: string;
  intro: string;
  thickness: string;
  advantages: string[];
  uses: string[];
  priceRange: string;
}

export const materials: MaterialItem[] = [
  { slug: 'besi', title: 'Cutting Besi Palembang', description: 'Jasa cutting besi plat laser cutting di Palembang. Presisi tinggi untuk pagar, kanopi, dan konstruksi.', intro: 'Besi plat adalah material paling populer untuk laser cutting. Kuat, tahan lama, dan bisa dibentuk menjadi berbagai motif. Cocok untuk pagar, kanopi, fasad, dan railing.', thickness: '0.8 - 2 mm', advantages: ['Kuat dan tahan lama', 'Mudah dibentuk dan dilas', 'Harga terjangkau', 'Finishing cat doff anti karat'], uses: ['Pagar', 'Kanopi', 'Fasad', 'Railing', 'Partisi'], priceRange: 'Rp100.000 - Rp300.000 / m²' },
  { slug: 'stainless', title: 'Cutting Stainless Palembang', description: 'Jasa cutting stainless steel laser cutting Palembang. Tahan karat, kilap, untuk aplikasi interior dan eksterior.', intro: 'Stainless steel adalah pilihan premium untuk laser cutting. Tahan karat, tampilan mengkilap, dan cocok untuk aplikasi interior maupun eksterior yang membutuhkan kesan mewah.', thickness: '0.6 - 1.5 mm', advantages: ['Tahan karat sempurna', 'Tampilan premium mengkilap', 'Mudah dibersihkan', 'Cocok untuk interior modern'], uses: ['Railing', 'Fasad', 'Partisi', 'Aksesoris interior'], priceRange: 'Rp250.000 - Rp600.000 / m²' },
  { slug: 'akrilik', title: 'Cutting Akrilik Palembang', description: 'Jasa cutting akrilik laser cutting Palembang. Untuk signage, partisi, hiasan dinding, dan dekorasi.', intro: 'Akrilik adalah material serbaguna untuk laser cutting. Ringan, transparan, dan tersedia berbagai warna. Cocok untuk partisi interior, signage, hiasan dinding, dan Ram Box sound system.', thickness: '2 - 10 mm', advantages: ['Ringan dan mudah dipasang', 'Tersedia berbagai warna', 'Tepi potongan bening mengkilap', 'Cocok untuk dekorasi interior'], uses: ['Partisi', 'Signage', 'Hiasan Dinding', 'Ram Box', 'Dekorasi'], priceRange: 'Rp150.000 - Rp500.000 / m²' },
  { slug: 'kayu-mdf', title: 'Cutting Kayu & MDF Palembang', description: 'Jasa cutting kayu dan MDF laser cutting Palembang. Untuk furniture, partisi, dan elemen dekoratif.', intro: 'Kayu dan MDF adalah material natural yang memberi kesan hangat. Dengan laser cutting, Anda bisa membuat motif rumit pada kayu untuk furniture, partisi, atau elemen dekoratif.', thickness: '3 - 12 mm', advantages: ['Tampilan natural dan hangat', 'Bisa untuk furniture custom', 'Motif presisi tanpa serpihan', 'Ramah lingkungan'], uses: ['Furniture', 'Partisi', 'Hiasan Dinding', 'Dekorasi'], priceRange: 'Rp100.000 - Rp350.000 / m²' },
  { slug: 'acp-pvc', title: 'Cutting ACP & PVC Palembang', description: 'Jasa cutting ACP dan PVC laser cutting Palembang. Untuk plang, partisi ringan, dan aplikasi eksterior.', intro: 'ACP (Aluminum Composite Panel) dan PVC adalah material ringan yang cocok untuk aplikasi eksterior seperti plang toko, fasad ringan, dan partisi. Tahan cuaca dan mudah perawatan.', thickness: '3 - 6 mm', advantages: ['Ringan dan kuat', 'Tahan cuaca ekstrim', 'Perawatan mudah', 'Cocok untuk eksterior'], uses: ['Plang Toko', 'Fasad Ringan', 'Partisi', 'Signage'], priceRange: 'Rp100.000 - Rp250.000 / m²' },
];
