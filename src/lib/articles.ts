/**
 * Penyaring status artikel.
 *
 * Semua halaman yang menampilkan artikel WAJIB memakai helper ini, supaya
 * artikel berstatus draft tidak ikut dibangun dan tidak ikut terdeploy.
 *
 * Aturannya sederhana:
 *   - published: false -> tidak dibangun sama sekali (404 di dev dan di hosting,
 *                         tidak masuk sitemap, tidak muncul di beranda)
 *   - published: true  -> dibangun, apa pun tanggalnya
 *
 * Tanggal TIDAK dipakai untuk menyaring. Tanggal hanya label yang tampil di
 * halaman. Kapan sebuah artikel benar-benar tayang sepenuhnya ditentukan oleh
 * kapan Anda mengubah published menjadi true lewat `terbit.py` lalu deploy.
 *
 * Mekanisme ini sama dengan interiorbatam, interiorbaturaja, lincahtravel,
 * dan sriwijayagrafika.com yang sudah teruji.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'blog'>;

const BULAN: Record<string, string> = {
  Januari: '01', Februari: '02', Maret: '03', April: '04',
  Mei: '05', Juni: '06', Juli: '07', Agustus: '08',
  September: '09', Oktober: '10', November: '11', Desember: '12',
};

/**
 * Tanggal ditulis dalam format "DD NamaBulan YYYY" (contoh "26 November 2026").
 * Fungsi ini mengubahnya menjadi angka untuk pengurutan, karena
 * `new Date("26 November 2026")` tidak dikenali JavaScript.
 */
export function parseTanggal(dateStr: string): number {
  const parts = dateStr.trim().split(' ');
  const day = (parts[0] || '01').padStart(2, '0');
  const month = BULAN[parts[1]] || '01';
  const year = parts[2] || '2026';
  return new Date(`${year}-${month}-${day}`).getTime();
}

/** Ambil artikel yang layak tayang (published true), urut tanggal terbaru. */
export async function getPublishedArticles(): Promise<Article[]> {
  const posts = await getCollection('blog');
  return posts
    .filter((post) => post.data.published)
    .sort((a, b) => parseTanggal(b.data.date) - parseTanggal(a.data.date));
}

/** True bila artikel boleh dibangun menjadi halaman. */
export function bolehTampil(post: Article): boolean {
  return post.data.published;
}
