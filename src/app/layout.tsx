import { Metadata } from "next";
import Image from "next/image";
import { Atkinson_Hyperlegible, Inter } from "next/font/google";
import "~/app/styles/globals.css";
import Link from "next/link";
import { atkinson, inter } from "./font";

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
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <header
          className={`bg-red-600 text-white font-bold max-w-max mx-auto flex flex-col justify-center py-14 px-10 gap-14 ${atkinson.className}`}
        >
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
        <main className="flex-grow">{children}</main>
        <footer className="flex gap-8 justify-center p-4">
          <Image
            src="/icons/facebook.svg"
            width={48}
            height={48}
            className="text-red-600"
            alt="Facebook"
          ></Image>
          <Image
            src="/icons/instagram.svg"
            width={48}
            height={48}
            className="text-red-600"
            alt="Instagram"
          ></Image>
          <Image
            src="/icons/twitter.svg"
            width={48}
            height={48}
            className="text-red-600"
            alt="Twitter"
          ></Image>
          <Image
            src="/icons/discord.svg"
            width={48}
            height={48}
            className="text-red-600"
            alt="Discord"
          ></Image>
        </footer>
      </body>
    </html>
  );
}
