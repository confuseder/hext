"use client";
import Giscus from "@giscus/react";
import { useTheme } from "next-themes";
import { Suspense } from "react";

export default function Comments() {
  const { theme } = useTheme();

  return (
    <div className="bg-g-m rounded text-c px-8 py-6">
      <Suspense fallback={<Loading />}>
        <Giscus
          repo="confuseder/hext"
          repoId="R_kgDONQ_C2A"
          category="Show and tell"
          categoryId="DIC_kwDONQ_C2M4Ckrps"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={theme == "light" ? "light" : "dark"}
          lang="zh-CN"
          loading="lazy"
        />
      </Suspense>
    </div>
  );
}

function Loading() {
    return <span className="text-center">正在加载评论……</span>
}
