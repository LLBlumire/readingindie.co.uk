"use client";

import Link from "next/link";

export default function Error() {
  return (
    <>
      <p className="mt-8">
        Something went wrong loading data from discord. You can still see our
        upcoming events if you join our discord.
      </p>
      <Link
        href="https://discord.gg/vG4XtVK4mt"
        className="bg-red-600 text-white p-4 px-8 mt-8 text-4xl rounded-full block mx-auto w-max shadow hover:bg-red-500 transition-all ease-in-out hover:scale-105 font-atkinson"
      >
        Join Us!
      </Link>
    </>
  );
}
