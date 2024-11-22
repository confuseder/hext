import Link from "next/link";
import {Archive, CalendarFold} from "lucide-react";

export default function ArticlePage() {
    return (
        <article className="w-full bg-main text-text rounded-md overflow-x-hidden">
            <header className='flex flex-col justify-between px-8 my-6'>
                <Link className='mb-3 text-text-t font-bold text-2xl' href='/'>
                    这是一个一个一个一个标题
                </Link>
                <div className="text-text-l">
                    <span className='bg-tag text-text rounded-full px-3 py-1 mr-3 inline-flex gap-2'>
                        <CalendarFold/>
                        <time dateTime="2024-01-01T05:10:00.000Z">2024-01-01</time>
                    </span>
                    <Link className='bg-tag text-text rounded-full px-3 py-1 mr-3 inline-flex gap-2' href='/'>
                        <Archive/>
                        <span>分类</span>
                    </Link>
                </div>
            </header>
            <section className="px-8 mb-6">
                文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
            </section>
        </article>
    );
}