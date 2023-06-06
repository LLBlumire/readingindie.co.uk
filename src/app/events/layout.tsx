import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h2 className={`text-2xl font-bold font-atkinson md:text-3xl mb-2`}>
        Upcoming Events
      </h2>
      {children}
    </>
  );
}
