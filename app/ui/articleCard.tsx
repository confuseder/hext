import Link from "next/link";
import { Archive, CalendarFold } from "lucide-react";

export default function ArticleCard() {
  return (
    <article className="flex w-full bg-g-m my-4 text-c rounded overflow-auto hover:shadow">
      <div className="flex flex-col gap-3 justify-between p-6">
        <Link className="text-c font-bold text-2xl" href="/">
          这是一个一个一个一个标题
        </Link>
        <div className="text-c-s">
          这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍
          这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍
          这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍
          这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍
        </div>
        <div className="text-c-s">
          <span className="border rounded-full px-3 py-1 mr-3 inline-flex gap-2">
            <CalendarFold />
            <time dateTime="2024-01-01T05:10:00.000Z">2024-01-01</time>
          </span>
          <Link
            className="border text-text rounded-full px-3 py-1 mr-3 inline-flex gap-2"
            href="/"
          >
            <Archive />
            <span>分类</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
