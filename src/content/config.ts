import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    label: z.string(),       // e.g. "// adobe express"
    title: z.string(),       // bold impact headline
    period: z.string(),      // e.g. "2022 – present"
    bullets: z.array(z.string()),
    tags: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const photos = defineCollection({
  type: 'data',
  schema: z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
    order: z.number().default(0),
  }),
});

const drawings = defineCollection({
  type: 'data',
  schema: z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string().optional(),
    medium: z.string().optional(),   // e.g. "pen & ink", "pencil"
    order: z.number().default(0),
  }),
});

export const collections = { work, photos, drawings };
