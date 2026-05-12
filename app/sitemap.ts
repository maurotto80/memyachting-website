import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const baseUrl = "https://memyachting.com";

  // articoli blog
  let articles: any[] = [];

  try {

    const res = await fetch(
      "https://api.memyachting.com/api/articles",
      {
        next: { revalidate: 3600 }
      }
    );

    if (res.ok) {
      articles = await res.json();
    }

  } catch (e) {
    console.log("SITEMAP ARTICLES ERROR", e);
  }

  const articleUrls = articles.flatMap((article) => [

    {
      url: `${baseUrl}/blog/${article.slug}`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/en/blog/${article.slug}`,
      lastModified: new Date(),
    }

  ]);

  return [

    // HOME
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    // BLOG
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
    },

    // AMERICA'S CUP
    {
      url: `${baseUrl}/americas-cup-napoli`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/en/americas-cup-naples`,
      lastModified: new Date(),
    },

    // ARTICOLI
    ...articleUrls,

  ];
}