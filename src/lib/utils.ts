import { internalLinksMap } from '../data/internalLinks';

export function waUrl(phone: string, text?: string): string {
  const defaultMsg = 'Halo Admin laserindopalembang.com, saya tertarik dengan layanan laser cutting dan ingin konsultasi...';
  const raw = text || defaultMsg;
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch (_) {
    decoded = raw;
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(decoded)}`;
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

export function applyInternalLinks(body: string, usedLinks: Set<string>): string {
  const keywords = Object.keys(internalLinksMap).sort((a, b) => b.length - a.length);

  return body
    .split('\n')
    .map((line) => {
      if (/^#{1,6}\s/.test(line)) return line;

      let result = line;
      for (const kw of keywords) {
        if (usedLinks.has(kw)) continue;
        const url = internalLinksMap[kw];
        if (!url) continue;

        const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const re = new RegExp(`(?<!\\[)\\b(${escaped})\\b(?![^\\[\\]]*])`, 'i');
        const match = re.exec(result);

        if (match) {
          const link = `[${match[0]}](${url})`;
          result = result.slice(0, match.index) + link + result.slice(match.index + match[0].length);
          usedLinks.add(kw);
        }
      }

      return result;
    })
    .join('\n');
}
