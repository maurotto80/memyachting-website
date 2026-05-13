//app/blog/[slug]/page.tsx

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
    title: article.titleIt,
    description: article.excerptIt,
    openGraph:{
      title: article.titleIt,
      description: article.excerptIt,
      alternates:{
  languages:{
    it:`https://memyachting.com/blog/${slug}`,
    en:`https://memyachting.com/en/blog/${slug}`
  }
},
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
  alt={article.titleIt}
/>

        </div>

      )}

      <article className="max-w-3xl mx-auto px-6 py-16">

  <div className="flex justify-between items-center mb-6">

    <Link
      href="/blog"
      className="inline-flex items-center text-sm text-gray-500 hover:text-black"
    >
      ← Torna agli articoli
    </Link>

    <Link
      href={`/en/blog/${slug}`}
      className="text-sm text-gray-500 hover:text-black"
    >
      EN
    </Link>

  </div>

  <h1 className="text-4xl font-light mb-6">
    {article.titleIt}
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
                {block.contentIt?.text}
              </p>

            );

          }

          if(block.type==="image"){

  const imageUrl =
    block.contentIt?.url?.startsWith("http")
      ? block.contentIt.url
      : `https://api.memyachting.com${block.contentIt?.url}`;

  return(

    <figure
      key={block.id}
      className="my-12"
    >

      <div className="overflow-hidden rounded-2xl bg-zinc-100">

        <img
          src={imageUrl}
          alt={article.titleIt}
          className="
            w-full
            object-cover
            transition duration-700
            hover:scale-[1.02]
          "
          loading="lazy"
        />

      </div>

      {block.contentIt?.caption && (

        <figcaption className="mt-3 text-sm text-gray-500 text-center">
          {block.contentIt.caption}
        </figcaption>

      )}

    </figure>

  );

}

          return null;

        })}

        {/* CTA */}

<div className="mt-16 border-t pt-10 text-center">

  {slug === "americas-cup-napoli-2027" ? (

    <>

      <p className="text-lg mb-6">
        Scopri le esperienze dedicate
        all&apos;America&apos;s Cup Napoli 2027
      </p>

      <a
        href="/americas-cup-napoli"
        className="border border-black px-8 py-3 hover:bg-black hover:text-white transition"
      >
        America&apos;s Cup Experience
      </a>

    </>

  ) : (

    <>

      <p className="text-lg mb-6">
        Scopri queste destinazioni in barca
      </p>

      <a
        href="https://app.memyachting.com"
        className="border border-black px-8 py-3 hover:bg-black hover:text-white transition"
      >
        Prenota una barca
      </a>

    </>

  )}

</div>

      </article>

    </main>

  );

}