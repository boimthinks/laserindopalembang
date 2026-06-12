export interface Motif {
  id: number;
  name: string;
  icon: string;
  description: string;
  category: string;
  suitableFor: string[];
  isPopular?: boolean;
  isTrending?: boolean;
}

export const motifs: Motif[] = [
  { id: 1, name: 'Geometris Minimalis', icon: '◆', description: 'Kotak, segitiga, dan garis tegas. Pola modern yang clean dan elegan.', category: 'Modern', suitableFor: ['Pagar', 'Fasad', 'Kanopi'], isPopular: true },
  { id: 2, name: 'Floral Modern', icon: '🌿', description: 'Daun tropis, monstera, dan palem. Memberi kesan natural dan segar.', category: 'Natural', suitableFor: ['Pagar', 'Partisi', 'Kanopi'] },
  { id: 3, name: 'Kaligrafi / Islami', icon: '🕌', description: 'Arabesque dan geometri Islam. Cocok untuk tampilan religius dan mewah.', category: 'Religius', suitableFor: ['Pagar Depan', 'Fasad', 'Partisi'] },
  { id: 4, name: 'Hexagon / Sarang Lebah', icon: '⬡', description: 'Pola hexagon berulang yang industrial dan modern.', category: 'Industrial', suitableFor: ['Fasad', 'Kanopi', 'Partisi'] },
  { id: 5, name: 'Pohon Ranting', icon: '🌳', description: 'Batang dan ranting artistik. Cocok untuk tampilan natural-elegant.', category: 'Artistik', suitableFor: ['Fasad', 'Pagar', 'Railing'] },
  { id: 6, name: 'Moroccan Pattern', icon: '🔶', description: 'Pola Maroko geometris yang rumit dan mewah.', category: 'Mewah', suitableFor: ['Fasad', 'Partisi', 'Pagar'] },
  { id: 7, name: 'Daun Tropis Lebar', icon: '🌴', description: 'Monstera, palem, dan daun pisang. Tren 2026 untuk tampilan tropical.', category: 'Tropical', suitableFor: ['Pagar', 'Partisi', 'Kanopi'], isTrending: true },
  { id: 8, name: 'Garis Vertikal Miring', icon: '📏', description: 'Garis tipis sejajar. Minimalis, hemat biaya, dan tetap elegan.', category: 'Minimalis', suitableFor: ['Railing', 'Pagar', 'Kanopi'] },
  { id: 9, name: 'Mozaik Lingkaran', icon: '◎', description: 'Lingkaran dan bunga artistik. Cocok untuk kanopi dan fasad.', category: 'Artistik', suitableFor: ['Kanopi', 'Fasad', 'Partisi'] },
  { id: 10, name: 'Batik Nusantara', icon: '🦚', description: 'Motif batik tradisional Indonesia. Unik dan penuh makna.', category: 'Klasik', suitableFor: ['Partisi', 'Fasad', 'Pagar'], isTrending: true },
  { id: 11, name: 'Songket Palembang', icon: '✨', description: 'Motif songket khas Palembang. Bangga dengan kearifan lokal.', category: 'Lokal', suitableFor: ['Pagar', 'Fasad', 'Pintu'], isPopular: true },
  { id: 12, name: 'Mandala Geometris', icon: '🔯', description: 'Pola mandala yang rumit dan simetris. Cocok untuk pagar depan.', category: 'Spiritual', suitableFor: ['Pagar Depan', 'Fasad', 'Partisi'] },
  { id: 13, name: 'Naga & Burung Merak', icon: '🐉', description: 'Motif naga dan merak abstrak. Berani dan penuh karakter.', category: 'Statement', suitableFor: ['Pagar', 'Pintu', 'Fasad'] },
  { id: 14, name: 'Anyaman Tradisional', icon: '𓋴', description: 'Pola anyaman yang rapi. Kesan tradisional yang modern.', category: 'Tradisional', suitableFor: ['Pagar', 'Partisi', 'Railing'] },
  { id: 15, name: 'Star Diamond', icon: '✦', description: 'Pola bintang dan berlian. Elegan untuk pagar dan railing.', category: 'Modern', suitableFor: ['Pagar', 'Railing', 'Kanopi'] },
];

export const motifCategories = [...new Set(motifs.map((m) => m.category))];
