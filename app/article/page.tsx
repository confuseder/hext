import Link from "next/link";
import {Archive, CalendarFold} from "lucide-react";
import CustomMDX from "@/app/mdx/customMDX";

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

                <CustomMDX
                    source={`
                        # GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done

$$
L = \\frac{1}{2} \\rho v^2 S C_L
$$             
       
$$
\\begin{aligned}
    \\text{优化目标:} \\quad & \\min_{x, y} \\quad F(x, y) = \\frac{1}{2} x^T Q x + c^T x + \\frac{\\lambda}{2} \\|y - A x\\|^2, \\\\
    \\text{约束条件:} \\quad & 
    \\begin{cases} 
        A_1 x + B_1 y \\leq d_1, \\\\
        A_2 x - B_2 y = d_2, \\\\
        x \\geq 0, \\quad y \\in \\mathbb{R}^n,
    \\end{cases} \\\\
    \\text{变量更新规则:} \\quad & 
    \\begin{aligned}
        x^{(k+1)} &= \\arg\\min_{x} \\left( \\frac{1}{2} x^T Q x + c^T x + \\frac{\\lambda}{2} \\|y^{(k)} - A x\\|^2 \\right), \\\\
        y^{(k+1)} &= \\text{prox}_{g}\\left(y^{(k)} - \\alpha \\nabla h(y^{(k)})\\right),
    \\end{aligned} \\\\
    \\text{误差评估:} \\quad & 
    \\text{Residual}_x = \\|A x - b\\|, \\quad \\text{Residual}_y = \\|C y - e\\|.
\\end{aligned}
$$

\`\`\`js
console.log(1);
\`\`\`

       `}
                />
            </section>
        </article>
    );
}