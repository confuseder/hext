import { CategorySchema } from "hexo/dist/types";
import { initHexo } from "../hexo";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const hexo = await initHexo();

  return {
    title: `分类 | ${hexo.config.title}`,
    description: hexo.config.description,
    authors: { name: hexo.config.author },
    icons: "/icon.jpg",
  };
}

export default async function CategoryList() {
  const hexo = await initHexo();

  const categoryList: CategorySchema[] = hexo.database
    .model("Category")
    .find({})
    .toArray();

  return (
    <div className="bg-g-m rounded px-6 py-6">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-c font-bold text-2xl">分类</h1>
        <span className="text-c-s">{`共 ${categoryList.length} 个`}</span>
      </header>
      <div className="flex flex-col gap-2">
        {categoryList.map((category, index: number) => {
          return (
            <div key={index} className="flex justify-between items-center">
              <Link
                className="text-c hover:text-c-a"
                href={`/category/${category.name}`}
              >
                {category.name}
              </Link>
              <span className="text-c-s">{`[${category.posts.length}]`}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
