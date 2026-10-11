import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const reading = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/reading' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    en: z.string(),
    sections: z.number(),
  }),
});

export const collections = { reading };
