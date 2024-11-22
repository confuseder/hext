import Link from "next/link";
import {Archive, CalendarFold} from "lucide-react";

export default function ArticleCard() {
    return (
        <article className='w-full bg-main my-4 text-text rounded-md flex overflow-auto hover:shadow'>
            <div className='flex-col justify-between p-6'>
                <Link className='mb-3 text-text-t font-bold text-2xl' href='/'>
                    这是一个一个一个一个标题
                </Link>
                <div className="mb-3 text-text">
                    这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍
                    这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍
                    这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍
                    这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍这是介绍
                </div>
                <div className="text-text-l">
                    <span className='bg-tag text-text rounded-full px-3 py-1 mr-3 inline-flex gap-2'>
                        <CalendarFold/>
                        <time dateTime="2024-01-01T05:10:00.000Z">2024-01-01</time>
                    </span>
                    <Link className='bg-tag text-text rounded-full px-3 py-1 mr-3 inline-flex gap-2' href='/'>
                        <Archive />
                        <span>分类</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}