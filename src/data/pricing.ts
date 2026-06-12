export interface PriceItem {
  item: string;
  lowest: number;
  highest: number;
  unit: string;
  note?: string;
}

export const pricingServices: PriceItem[] = [
  { item: 'Jasa potong plat', lowest: 100000, highest: 750000, unit: 'm²', note: 'Tergantung material & ketebalan' },
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
