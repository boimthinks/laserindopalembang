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
];

export const pricingMaterials: { material: string; thickness: string; priceRange: string }[] = [
  { material: 'Besi Plat', thickness: '0.8 - 2 mm', priceRange: 'Rp100.000 - Rp300.000' },
  { material: 'Stainless Steel', thickness: '0.6 - 1.5 mm', priceRange: 'Rp250.000 - Rp600.000' },
  { material: 'Akrilik', thickness: '2 - 10 mm', priceRange: 'Rp150.000 - Rp500.000' },
  { material: 'Kayu / MDF', thickness: '3 - 12 mm', priceRange: 'Rp100.000 - Rp350.000' },
  { material: 'ACP / PVC', thickness: '3 - 6 mm', priceRange: 'Rp100.000 - Rp250.000' },
];
