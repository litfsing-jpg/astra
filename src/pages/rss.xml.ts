import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  return rss({
    title: 'Блог Карповой Ольги',
    description: 'Практические советы по здоровому образу жизни, питанию и полезным привычкам',
    site: context.site!.toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/astra/blog/${post.slug}/`,
    })),
    customData: '<language>ru</language>',
  });
}
