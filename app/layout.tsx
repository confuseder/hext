import "./globals.css";
import { ThemeProvider } from "./ui/themeProvider";
import NavBar from "./ui/navBar";
import { Fira_Code, Noto_Sans_SC } from "next/font/google";

const notoSansSC = Noto_Sans_SC({
  variable: "--noto-sans-sc",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--fira-code",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSansSC.className} ${notoSansSC.variable} ${firaCode.variable} bg-g`}
      >
        <ThemeProvider defaultTheme="system" enableSystem>
          <NavBar />
          <main className="w-full h-[calc(100vh-3.5rem)] overflow-y-auto overflow-x-hidden pt-6 px-6 pb-6 scroll-container">
            <div className="max-w-mx mx-auto">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
