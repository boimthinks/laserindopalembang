import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().max(40), // Sesuai aturan: judul pendek untuk card
    titleSeo: z.string().max(100), // Judul panjang untuk SEO/H1
    excerpt: z.string().min(20).max(300),
    date: z.string(), // Format: DD NamaBulan YYYY
    topik: z.enum(['tips', 'studi kasus', 'panduan', 'kabar']),
    imgurl: z.string(),
    imgalt: z.string().optional(),
    imgPrompt: z.string().optional(),
    pengantar: z.string().min(50).max(500),
    kesimpulan: z.string().min(50).max(500),
    published: z.boolean().default(true),
  }),
});

export const collections = { blog };
