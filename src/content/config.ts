import { defineCollection, z } from 'astro:content';

const tutorialSchema = z.object({
  title: z.string(),
  chapter: z.number(),
  stage: z.string(),
  stageName: z.string(),
  order: z.number(),
  description: z.string(),
  pubDate: z.coerce.date().default(() => new Date()),
  tags: z.array(z.string()).default([]),
});

const tutorials = defineCollection({
  type: 'content',
  schema: tutorialSchema,
});

const tutorialsEn = defineCollection({
  type: 'content',
  schema: tutorialSchema,
});

export const collections = { tutorials, tutorialsEn };
