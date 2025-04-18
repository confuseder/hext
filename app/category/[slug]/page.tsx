import { initHexo } from "../../hexo";
import { CategorySchema, PostSchema } from "hexo/dist/types";
import { Metadata } from "next";
import ArticleCard from "@/app/ui/articleCard";
import AnimationBox from "@/app/ui/animationBox";

const hexo = await initHexo();

export async function generateStaticParams() {
  const categoryList: CategorySchema[] = hexo.database
    .model("Category")
    .find({})
    .toArray();

  return categoryList.map((category) => {
    return {
      slug: category._id,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const category: CategorySchema = hexo.database.model("Category").findOne({
    _id: (await params).slug,
  });

  return {
    title: `${category.name} | ${hexo.config.title}`,
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
  const category: CategorySchema = hexo.database.model("Category").findOne({
    _id: (await params).slug
  });

  return (
    <>
      <div className="bg-g-m rounded px-8 py-6 mb-6 flex justify-between items-center">
        <h1 className="text-c font-bold text-2xl">
          {`分类：${category.name}`}
        </h1>
        <span className="text-c-s">{`共 ${category.posts.length} 篇`}</span>
      </div>
      <AnimationBox>
        {category.posts.map((post: PostSchema, index: number) => {
          return <ArticleCard key={index} postData={post} category={undefined} />;
        })}
      </AnimationBox>
    </>
  );
}
