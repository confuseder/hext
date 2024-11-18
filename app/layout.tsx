import "./globals.css";
import localFont from "next/font/local";
import { ThemeProvider } from "./ui/themeProvider";
import ThemeSwitch from "./ui/themeSwith";

const firaCode = localFont({
  src: "./fonts/FiraCode-VF.woff",
  variable: "--fira-vf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaCode.className} ${firaCode.variable} bg-background`}
      >
        <ThemeProvider defaultTheme="system" enableSystem>
          <ThemeSwitch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
