export function waUrl(phone: string, text?: string): string {
  const msg = text || 'Halo%20Laserindo%20Palembang%2C%20saya%20mau%20tanya%20tentang...';
  return `https://wa.me/${phone}?text=${msg}`;
}

export function formatPrice(amount: number): string {
  return `Rp. ${amount.toLocaleString('id-ID')}`;
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function slugifyMotif(name: string): string {
  return name.toLowerCase()
    .replace(/&/g, 'dan')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export const KATALOG_SUFFIX: Record<string, string> = {
  'pagar': 'PG',
  'kanopi': 'KP',
  'partisi': 'PT',
  'railing': 'RT',
  'fasad': 'FS',
  'plat-nama': 'PN',
};

export function getKatalogDetails(id: string, service: string) {
  const suffix = KATALOG_SUFFIX[service] || '';
  const code = `${id}${suffix}`;
  const serviceTitle = service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const title = `${serviceTitle} Motif ${code}`;
  return { code, title, serviceLabel: serviceTitle };
}

const serviceSlugMap: Record<string, string> = {
  pagar: 'pagar', 'pagar depan': 'pagar',
  fasad: 'fasad',
  kanopi: 'kanopi',
  partisi: 'partisi',
  railing: 'railing',
  pintu: 'fasad',
};

export function motifImagePath(motifName: string, suitableFor: string[]): string {
  const raw = suitableFor[0]?.toLowerCase() || 'pagar';
  const serviceSlug = serviceSlugMap[raw] || 'pagar';
  return `/img/motif/${serviceSlug}-${slugifyMotif(motifName)}.webp`;
}
