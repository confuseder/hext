import Link from "next/link";
import { Archive, CalendarFold } from "lucide-react";
import { PostSchema } from "hexo/dist/types";

export default async function ArticleCard({
  postData,
  category,
}: {
  postData: PostSchema;
  category: string;
}) {
  return (
    <article className="flex w-full bg-g-m my-4 text-c rounded overflow-auto hover:shadow">
      <div className="flex flex-col gap-3 justify-between p-6">
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
              href="/"
            >
              <Archive />
              <span>{category}</span>
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
