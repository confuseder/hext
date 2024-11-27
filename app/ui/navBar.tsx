import Link from "next/link";
import ThemeSwitch from "./themeSwith";
import { initHexo } from "../hexo";

export default async function NavBar() {
  const hexo = await initHexo();

  const pages = hexo.database.model("Page").toArray();
  pages.unshift({ title: "分类", url: "category", source: "", path: "" });
  pages.unshift({ title: "首页", url: "", source: "", path: "" });

  return (
    <nav
      className="sticky top-0 left-0 w-full min-h-24 shadow bg-g-m text-c select-none z-50
                  px-5 flex flex-col sm:min-h-14 sm:flex-row sm:justify-between sm:items-stretch"
    >
      <div className="flex justify-center items-stretch flex-grow sm:flex-grow-0">
        <span className="px-2 flex items-center">
          <img
            src="/icon.jpg"
            alt={"icon"}
            width={750}
            height={750}
            className="w-8 h-8 rounded-full shrink-0"
          />
        </span>
        <h1 className="px-2 flex items-center shrink-0 text-2xl font-bold">
          {hexo.config.title}
        </h1>
      </div>
      <div className="flex justify-center items-stretch flex-grow sm:flex-grow-0">
        {pages.map((l, index) => {
          return (
            <>
              {l.url != undefined ? (
                <Link
                  href={`/${l.url}`}
                  key={index}
                  className="px-2 flex items-center leading-none shrink-0
                    hover:bg-g-n hover:text-c-a"
                >
                  {l.title}
                </Link>
              ) : null}
            </>
          );
        })}
        <ThemeSwitch className="px-2 flex items-center shrink-0 hover:bg-g-n hover:text-c-a" />
      </div>
    </nav>
  );
}
