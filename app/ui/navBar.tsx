import Link from "next/link";
import ThemeSwitch from "./themeSwith";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav
      className="sticky top-0 left-0 w-full min-h-24 shadow bg-main select-none
                  px-5 flex flex-col sm:min-h-14 sm:flex-row sm:justify-between sm:items-stretch"
    >
      <div className="flex justify-center items-stretch flex-grow sm:flex-grow-0">
        <span className="px-2 flex items-center">
          <Image
            src={"/icon.jpg"}
            alt={"icon"}
            width={750}
            height={750}
            className="w-8 h-8 rounded-full shrink-0"
          />
        </span>
        <h1 className="px-2 flex items-center shrink-0 text-2xl font-bold">
          盼兮的博客
        </h1>
      </div>
      <div className="flex justify-center items-stretch flex-grow sm:flex-grow-0">
        {[
          { text: "文章", link: "/" },
          { text: "标签", link: "/" },
          { text: "关于", link: "/" },
          { text: "归档", link: "/" },
        ].map((l) => {
          return (
            <Link
              href={l.link}
              key={1}
              className="px-2 flex items-center leading-none shrink-0
                    hover:bg-hover hover:text-link-hover"
            >
              {l.text}
            </Link>
          );
        })}
        <ThemeSwitch className="px-2 flex items-center shrink-0 hover:bg-hover hover:text-link-hover" />
      </div>
    </nav>
  );
}
