//app/en/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }:any){

  const { slug } = await params;

  const res = await fetch(
    `https://api.memyachting.com/api/articles/${slug}`
  );

  if(!res.ok){
    return {};
  }

  const article = await res.json();

  return{
  title: article.titleEn || article.titleIt,
  description: article.excerptEn || article.excerptIt,

  alternates:{
    languages:{
      it:`https://memyachting.com/blog/${slug}`,
      en:`https://memyachting.com/en/blog/${slug}`
    }
  },

  openGraph:{
    title: article.titleEn || article.titleIt,
    description: article.excerptEn || article.excerptIt,
      images:[
  article.coverImage?.startsWith("http")
    ? article.coverImage
    : `https://api.memyachting.com${article.coverImage}`
]
    }
  };

}

async function getArticle(slug:string){

  const res = await fetch(
    `https://api.memyachting.com/api/articles/${slug}`,
    {
      next:{ revalidate:60 }
    }
  );

  if(!res.ok) return null;

  return res.json();

}

export default async function ArticlePage({
  params
}:{
  params: Promise<{ slug:string }>
}){

  const { slug } = await params;

  const article = await getArticle(slug);

  if(!article) return notFound();

  return(

    <main className="min-h-screen bg-white text-black">

      {/* COVER */}

      {article.coverImage && (

        <div className="h-[420px] overflow-hidden">

         <img
  src={
    article.coverImage?.startsWith("http")
      ? article.coverImage
      : `https://api.memyachting.com${article.coverImage}`
  }
  className="w-full h-full object-cover"
  alt={article.titleEn || article.titleIt}
/>

        </div>

      )}

      <article className="max-w-3xl mx-auto px-6 py-16">

  <div className="flex justify-between items-center mb-6">

  <Link
    href="/en/blog"
    className="inline-flex items-center text-sm text-gray-500 hover:text-black"
  >
    ← Back to articles
  </Link>

  <Link
    href={`/blog/${slug}`}
    className="text-sm text-gray-500 hover:text-black"
  >
    IT
  </Link>

</div>

  <h1 className="text-4xl font-light mb-6">
  {article.titleEn || article.titleIt}
</h1>

        <p className="text-sm text-gray-500 mt-2">
  ⏱ {article.readingTime} min read
</p>

        {/* BLOCKS */}

        {article.blocks?.map((block:any)=>{

          if(block.type==="text"){

            return(

              <p
                key={block.id}
                className="mb-6 leading-relaxed text-lg"
              >
                {block.contentEn?.text || block.contentIt?.text}
              </p>

            );

          }

          if(block.type==="image"){

            return(

              <img
  key={block.id}
  src={
    block.contentIt?.url?.startsWith("http")
      ? block.contentIt.url
      : `https://api.memyachting.com${block.contentIt?.url}`
  }
  className="my-10 rounded-lg"
  alt=""
/>

            );

          }

          return null;

        })}

        {/* CTA */}

        <div className="mt-16 border-t pt-10 text-center">

          <p className="text-lg mb-6">
            Discover these destinations by boat
          </p>

          <a
            href="https://app.memyachting.com"
            className="border border-black px-8 py-3 hover:bg-black hover:text-white transition"
          >
            Book a boat
          </a>

        </div>

      </article>

    </main>

  );

}