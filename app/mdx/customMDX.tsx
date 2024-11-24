import {MDXRemote} from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";

import 'katex/dist/katex.css';
// import 'highlight.js/styles/.min.css';

export default function CustomMDX(
    {source}: { source: string }
) {
    return <MDXRemote
        source={source}

        options={
            {
                parseFrontmatter: true,
                mdxOptions: {
                    remarkPlugins: [remarkGfm, remarkMath],
                    rehypePlugins: [rehypeKatex, rehypeHighlight]
                }
            }
        }
    />;
}