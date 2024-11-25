import Link from "next/link";
import { initHexo } from "../../hexo";
import CustomMDX from "../../mdx/customMDX";
import { notFound } from "next/navigation";
import { Archive, CalendarFold } from "lucide-react";
import { PostSchema } from "hexo/dist/types";
import { Metadata } from "next";

export async function generateStaticParams() {
  const hexo = await initHexo();

  const pages = hexo.database.model("Post").toArray();

  return pages.map((page) => {
    return {
      slug: page.slug,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const hexo = await initHexo();

  const data: PostSchema = hexo.database.model("Post").findOne({
    slug: (await params).slug,
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
  params: Promise<{ slug: string }>;
}) {
  const hexo = await initHexo();

  const data: PostSchema = hexo.database.model("Post").findOne({
    slug: (await params).slug,
  });

  if (!data) {
    return notFound();
  }

  const category = hexo.database.model("Category").findOne({
    id: hexo.database.model("PostCategory").findOne({ post_id: data.id }),
  });

  return (
    <article className="w-full bg-g-m text-c rounded overflow-x-hidden">
      <header className="flex flex-col justify-between px-8 my-6">
        <Link
          className="mb-3 text-c font-bold text-2xl"
          href={`/posts/${data._id}`}
        >
          {data.title}
        </Link>
        <div className="text-c-s">
          <span className="border rounded-full px-3 py-1 mr-3 inline-flex gap-2">
            <CalendarFold />
            <time dateTime={data.date?.toISOString()}>
              {data.date?.toDate().toLocaleDateString("zh-cn")}
            </time>
          </span>

          {category?.name ? (
            <Link
              className="border text-text rounded-full px-3 py-1 mr-3 inline-flex gap-2"
              href="/"
            >
              <Archive />
              <span>{category?.name}</span>
            </Link>
          ) : null}
        </div>
      </header>
      <section id="blog_article_section" className="px-8 mb-6">
        <CustomMDX source={data.raw || ""} />
      </section>
    </article>
  );
}
