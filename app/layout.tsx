import "./globals.css";
import { ThemeProvider } from "./ui/themeProvider";
import NavBar from "./ui/navBar";
import { Noto_Sans_SC } from "next/font/google";

const notoSansSC = Noto_Sans_SC({
  variable: "--noto-sans-sc",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSansSC.className} ${notoSansSC.variable} bg-g`}>
        <ThemeProvider defaultTheme="system" enableSystem>
          <NavBar />
          <main className="max-w-mx mx-auto p-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
