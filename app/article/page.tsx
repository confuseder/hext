import Link from "next/link";
import {Archive, CalendarFold} from "lucide-react";
import CustomMDX from "@/app/mdx/customMDX";

export default function ArticlePage() {
    return (
        <article className="w-full bg-g-m text-c rounded overflow-x-hidden">
            <header className='flex flex-col justify-between px-8 my-6'>
                <Link className='mb-3 text-c font-bold text-2xl' href='/'>
                    这是一个一个一个一个标题
                </Link>
                <div className="text-c-s">
                    <span className='border rounded-full px-3 py-1 mr-3 inline-flex gap-2'>
                        <CalendarFold/>
                        <time dateTime="2024-01-01T05:10:00.000Z">2024-01-01</time>
                    </span>
                    <Link className='border rounded-full px-3 py-1 mr-3 inline-flex gap-2' href='/'>
                        <Archive/>
                        <span>分类</span>
                    </Link>
                </div>
            </header>
            <section id="blog_article_section" className="px-8 mb-6">
                文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
                文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字

                <CustomMDX
                    source={`
                       # GFM 支持测试

## 标题

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

---

## 文本样式

- **加粗**: **这是加粗文本**
- *斜体*: *这是斜体文本*
- ~~删除线~~: ~~这是删除线文本~~
- **_组合样式_**: **_这是加粗和斜体组合_**
- 普通文字包含 \`行内代码\`

---

## 引用

> 这是一个引用段落。
> 
> 你可以在引用中嵌套：
> 
> > 子引用。

---

## 列表

### 无序列表
- 项目 1
  - 子项目 1.1
  - 子项目 1.2
    - 子子项目 1.2.1
- 项目 2

### 有序列表
1. 第一项
2. 第二项
   1. 第二项的子项 1
   2. 第二项的子项 2
3. 第三项

---

## 链接和图片

### 链接
这是一个 [普通链接](https://www.example.com)。

这是一个引用式链接 [Google][1]。

[1]: https://www.google.com "Google's Homepage"

### 图片
![Markdown Logo](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)

\`\`\`js
console.log(1);console.log(1);console.log(1);console.log(1);console.log(1);console.log(1);console.log(1);console.log(1);
\`\`\`


       `}
                />
            </section>
        </article>
    );
}