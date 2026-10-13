export interface PriceItem {
  item: string;
  lowest: number;
  highest: number;
  unit: string;
  note?: string;
}

export interface MachineCuttingPrice {
  material: string;
  thickness: string;
  price: number;
  unit: string;
}

export const pricingFiberLaser: MachineCuttingPrice[] = [
  // Stainless Steel
  { material: 'Stainless Steel', thickness: '0,6 – 1,2 mm', price: 200000, unit: 'm²' },
  { material: 'Stainless Steel', thickness: '1,5 – 2 mm', price: 300000, unit: 'm²' },
  { material: 'Stainless Steel', thickness: '2,1 – 3 mm', price: 350000, unit: 'm²' },
  // Aluminium
  { material: 'Aluminium', thickness: '0,6 – 1,2 mm', price: 250000, unit: 'm²' },
  { material: 'Aluminium', thickness: '1,5 – 2 mm', price: 300000, unit: 'm²' },
  { material: 'Aluminium', thickness: '2,1 – 3 mm', price: 350000, unit: 'm²' },
  // Plat Besi & Galvanis
  { material: 'Plat Besi & Galvanis', thickness: '0,6 – 1,1 mm', price: 200000, unit: 'm²' },
  { material: 'Plat Besi & Galvanis', thickness: '1,4 – 2 mm', price: 250000, unit: 'm²' },
  { material: 'Plat Besi & Galvanis', thickness: '2,4 – 3,4 mm', price: 300000, unit: 'm²' },
  { material: 'Plat Besi & Galvanis', thickness: '3,8 – 5 mm', price: 400000, unit: 'm²' },
  { material: 'Plat Besi & Galvanis', thickness: '6 – 8 mm', price: 500000, unit: 'm²' },
  { material: 'Plat Besi & Galvanis', thickness: '8,1 – 9 mm', price: 600000, unit: 'm²' },
  { material: 'Plat Besi & Galvanis', thickness: '9,1 – 10 mm', price: 700000, unit: 'm²' },
  { material: 'Plat Besi & Galvanis', thickness: '10,1 – 11 mm', price: 800000, unit: 'm²' },
  { material: 'Plat Besi & Galvanis', thickness: '11,1 – 12 mm', price: 850000, unit: 'm²' },
];

export const pricingCncRouter: MachineCuttingPrice[] = [
  // Plywood
  { material: 'Plywood (Multiplek)', thickness: '3 mm', price: 200000, unit: 'keping' },
  { material: 'Plywood (Multiplek)', thickness: '4 – 6 mm', price: 270000, unit: 'keping' },
  { material: 'Plywood (Multiplek)', thickness: '7 – 9 mm', price: 320000, unit: 'keping' },
  { material: 'Plywood (Multiplek)', thickness: '10 – 12 mm', price: 370000, unit: 'keping' },
  { material: 'Plywood (Multiplek)', thickness: '13 – 20 mm', price: 420000, unit: 'keping' },
  // MDF / MHR & PVC
  { material: 'MDF / MHR & PVC', thickness: '3 mm', price: 200000, unit: 'keping' },
  { material: 'MDF / MHR & PVC', thickness: '4 – 6 mm', price: 250000, unit: 'keping' },
  { material: 'MDF / MHR & PVC', thickness: '7 – 9 mm', price: 300000, unit: 'keping' },
  { material: 'MDF / MHR & PVC', thickness: '10 – 12 mm', price: 350000, unit: 'keping' },
  { material: 'MDF / MHR & PVC', thickness: '13 – 20 mm', price: 400000, unit: 'keping' },
  // ACP
  { material: 'ACP (Aluminium Composite)', thickness: '3 mm', price: 200000, unit: 'keping' },
  { material: 'ACP (Aluminium Composite)', thickness: '4 mm', price: 250000, unit: 'keping' },
];

export const pricingCo2Laser: MachineCuttingPrice[] = [
  { material: 'Akrilik (Acrylic)', thickness: '2 – 10 mm', price: 4000, unit: 'menit' },
];

export const pricingServices: PriceItem[] = [
  { item: 'Jasa potong plat saja', lowest: 200000, highest: 850000, unit: 'm²', note: 'Tergantung material & ketebalan' },
  { item: 'Pagar jadi + pasang', lowest: 800000, highest: 3000000, unit: 'm²', note: 'Termasuk material & finishing' },
  { item: 'Kanopi jadi + pasang', lowest: 900000, highest: 3500000, unit: 'm²', note: 'Termasuk material & finishing' },
  { item: 'Partisi interior', lowest: 600000, highest: 2000000, unit: 'm²', note: 'Tergantung kerumitan motif' },
  { item: 'Railing tangga', lowest: 750000, highest: 2500000, unit: 'meter lari', note: 'Termasuk tiang & pegangan' },
  { item: 'Fasad bangunan', lowest: 1000000, highest: 4000000, unit: 'm²', note: 'Untuk fasad rumah/gedung' },
  { item: 'Plat nama / trofi custom', lowest: 50000, highest: 500000, unit: 'pcs', note: 'Termasuk engraving teks & logo' },
];

export const pricingMaterials: { material: string; thickness: string; priceRange: string }[] = [
  { material: 'Besi Plat', thickness: '0.8 - 2 mm', priceRange: 'Rp. 100.000 - Rp. 300.000' },
  { material: 'Stainless Steel', thickness: '0.6 - 1.5 mm', priceRange: 'Rp. 250.000 - Rp. 600.000' },
  { material: 'Akrilik', thickness: '2 - 10 mm', priceRange: 'Rp. 150.000 - Rp. 500.000' },
  { material: 'Kayu / MDF', thickness: '3 - 12 mm', priceRange: 'Rp. 100.000 - Rp. 350.000' },
  { material: 'ACP / PVC', thickness: '3 - 6 mm', priceRange: 'Rp. 100.000 - Rp. 250.000' },
];
