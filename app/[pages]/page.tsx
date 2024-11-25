import Link from "next/link";
import { initHexo } from "../hexo";
import CustomMDX from "../mdx/customMDX";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const hexo = await initHexo();

  const pages = hexo.database.model("Page").toArray();

  return pages
    .filter((page) => page.url != undefined)
    .map((page) => {
      return {
        pages: page.url,
      };
    });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const hexo = await initHexo();

  const data = hexo.database.model("Page").findOne({
    url: (await params).pages,
  });

  return {
    title: `${data.title} | ${hexo.config.title}`,
    description: hexo.config.description,
    authors: { name: hexo.config.author },
    icons: "/icon.jpg",
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ pages: string }>;
}) {
  const hexo = await initHexo();

  const data = hexo.database.model("Page").findOne({
    url: (await params).pages,
  });

  if (!data) {
    return notFound();
  }

  return (
    <article className="w-full bg-g-m text-c rounded overflow-x-hidden">
      <header className="flex flex-col justify-between px-8 my-6">
        <Link className="mb-3 text-c font-bold text-2xl" href={data.url}>
          {data.title}
        </Link>
      </header>
      <section id="blog_article_section" className="px-8 mb-6">
        <CustomMDX source={data.raw} />
      </section>
    </article>
  );
}
