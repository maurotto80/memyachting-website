//app/en/blog/page.tsx

import Link from "next/link";

async function getArticles() {
  const res = await fetch(
    "https://api.memyachting.com/api/articles",
    {
      next: { revalidate: 1 }
    }
  );

  if (!res.ok) return [];

  return res.json();
}

export default async function BlogPage() {

  const articles = await getArticles();

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}

      <section className="bg-black text-white py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-light tracking-widest">
          NAUTICAL BLOG
        </h1>

        <p className="mt-4 opacity-70">
          Guides, itineraries and tips to explore Capri,
Ischia and the Amalfi Coast by boat
        </p>

      </section>

      {/* LISTA ARTICOLI */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {articles.map((article:any)=>{

            return(

              <Link
                key={article.id}
                href={`/en/blog/${article.slug}`}
                className="group"
              >

                {article.coverImage && (

                  <div className="overflow-hidden rounded-lg">

                    <img
  src={
    article.coverImage?.startsWith("http")
      ? article.coverImage
      : `https://api.memyachting.com${article.coverImage}`
  }
  className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
  alt={article.titleIt}
/>

                  </div>

                )}

                <h2 className="mt-4 text-xl font-semibold group-hover:underline">
                  {article.titleEn || article.titleIt}
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  {article.readingTime} min read
                </p>

              </Link>

            );

          })}

        </div>

      </section>

    </main>
  );
}