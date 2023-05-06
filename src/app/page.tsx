import { atkinson } from "~/app/font";

export default function Home() {
  return (
    <section className="max-w-prose mx-auto mt-8 px-4">
      <h2 className={`text-2xl font-bold ${atkinson.className} md:text-3xl`}>
        Welcome To Reading Indie Gamers
      </h2>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi optio
        exercitationem maxime minus illum laudantium voluptates nam tempora
        error magnam soluta veritatis, perferendis maiores mollitia officia
        neque minima. Exercitationem, nesciunt.
      </p>
      <p className="mt-2">
        Eos, in? Deserunt, aliquid voluptate, magni incidunt earum saepe quas
        corporis repellat nostrum vel sequi ut rem neque quam expedita pariatur
        amet ad nisi maxime ipsum unde quae consectetur delectus.
      </p>
    </section>
  );
}
