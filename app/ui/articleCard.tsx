import Link from "next/link";
import { Archive, CalendarFold } from "lucide-react";
import { CategorySchema, PostSchema } from "hexo/dist/types";

export default async function ArticleCard({
  postData,
  category,
}: {
  postData: PostSchema;
  category: CategorySchema | undefined;
}) {
  return (
    <article className="flex w-full bg-g-m mb-4 text-c rounded overflow-auto hover:shadow">
      <div className="flex flex-col gap-3 justify-between px-8 py-6">
        <Link
          className="text-c font-bold text-2xl"
          href={`/posts/${postData.slug}`}
        >
          {postData.title}
        </Link>
        <div className="text-c-s">{postData.excerpt}</div>
        <div className="text-c-s">
          <span className="border rounded-full px-3 py-1 mr-3 inline-flex gap-2">
            <CalendarFold />
            <time dateTime={postData.date?.toISOString()}>
              {postData.date?.toDate().toLocaleDateString("zh-cn")}
            </time>
          </span>

          {category ? (
            <Link
              className="border text-c-s rounded-full px-3 py-1 mr-3 inline-flex gap-2"
              href={`/category/${category._id}`}
            >
              <Archive />
              <span>{category.name}</span>
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
