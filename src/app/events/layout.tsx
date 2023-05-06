import { ReactNode } from "react";
import { atkinson } from "~/app/font";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h2
        className={`text-2xl font-bold ${atkinson.className} md:text-3xl mb-2`}
      >
        Upcoming Events
      </h2>
      {children}
    </>
  );
}
