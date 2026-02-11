import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const site = context.site!.toString().replace(/\/$/, '');

  const items = posts.map((post) => {
    const link = `${site}/blog/${post.slug}/`;
    const pubDate = post.data.pubDate.toUTCString();
    return `    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description><![CDATA[${post.data.description}]]></description>
      <pubDate>${pubDate}</pubDate>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[Блог Карповой Ольги]]></title>
    <description><![CDATA[Практические советы по здоровому образу жизни, питанию и полезным привычкам]]></description>
    <link>${site}/</link>
    <language>ru</language>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
