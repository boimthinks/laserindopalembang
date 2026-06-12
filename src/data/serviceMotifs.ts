export interface ServiceMotifItem {
  slug: string;
  name: string;
  description: string;
  image: string;
  serviceSlug: string;
  seoTitle: string;
  keywords: string[];
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/&/g, 'dan').replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

import { services } from './services';

export const serviceMotifs: ServiceMotifItem[] = services.flatMap((s) => {
  return s.motifs.map((name) => {
    const slug = slugify(name);
    return {
      slug,
      name,
      description: `Motif ${name} untuk ${s.title.toLowerCase()} di Palembang. Hasil cutting presisi, rapi, dan tahan lama. Cocok untuk mempercantik tampilan ${s.shortTitle.toLowerCase()} Anda.`,
      image: `/img/motif/${s.slug}-${slug}.webp`,
      serviceSlug: s.slug,
      seoTitle: `Motif ${name} untuk ${s.title} Palembang. Cepat, Presisi & Berkualitas`,
      keywords: [`motif ${name.toLowerCase()} ${s.title.toLowerCase()} palembang`, `${name} ${s.slug} laser cutting palembang`, `motif ${s.slug} ${name.toLowerCase()}`],
    };
  });
});
