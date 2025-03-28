import ArticleCard from "@/app/ui/articleCard";
import { initHexo } from "./hexo";
import { PostSchema } from "hexo/dist/types";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const hexo = await initHexo();

  return {
    title: hexo.config.title,
    description: hexo.config.description,
    authors: { name: hexo.config.author },
    icons: "/icon.jpg",
  };
}

export default async function Home() {
  const hexo = await initHexo();

  const posts = hexo.database.model("Post").find({}).sort("-date");

  return (
    <div>
      {posts.map((post: PostSchema, index) => {
        const category = hexo.database.model("Category").findOne({
          _id: hexo.database.model("PostCategory").findOne({ post_id: post._id })
            ?.category_id,
        });

        return (
          <ArticleCard key={index} postData={post} category={category} />
        );
      })}
    </div>
  );
}
