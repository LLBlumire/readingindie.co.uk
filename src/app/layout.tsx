import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Image from "next/image";
import { Atkinson_Hyperlegible, Inter } from "next/font/google";
import "~/app/styles/globals.css";
import Link from "next/link";

export const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-atkinson",
});
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Reading Indie Gamers",
  description:
    "A community for tabletop roleplaying game enjoyers in the town of Reading, Berkshrie.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${atkinson.variable}`}>
      <body className="flex flex-col gap-12 min-h-screen font-inter">
        <header className="bg-red-600 text-white mx-auto flex flex-col justify-center p-14 gap-10 font-atkinson">
          <h1 className="text-5xl text-center md:text-6xl">
            Reading Indie Gamers
          </h1>
          <nav className="text-2xl flex justify-between items-center flex-wrap flex-col gap-4 md:flex-row">
            <ul className="contents">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="nav-link">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/coc" className="nav-link">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow max-w-screen-sm mx-auto px-6 w-full">
          {children}
        </main>
        <footer className="flex gap-8 justify-center p-4">
          <Link href="https://www.facebook.com/groups/1248946379340552">
            <Image
              src="/icons/facebook.svg"
              width={48}
              height={48}
              className="text-red-600"
              alt="Facebook"
            ></Image>
          </Link>
          <Link href="https://www.instagram.com/ReadingIndie/">
            <Image
              src="/icons/instagram.svg"
              width={48}
              height={48}
              className="text-red-600"
              alt="Instagram"
            ></Image>
          </Link>
          <Link href="https://twitter.com/ReadingIndie">
            <Image
              src="/icons/twitter.svg"
              width={48}
              height={48}
              className="text-red-600"
              alt="Twitter"
            ></Image>
          </Link>
          <Link href="https://discord.gg/vG4XtVK4mt">
            <Image
              src="/icons/discord.svg"
              width={48}
              height={48}
              className="text-red-600"
              alt="Discord"
            ></Image>
          </Link>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
