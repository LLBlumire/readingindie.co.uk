import Link from "next/link";

export default function Home() {
  return (
    <article className="prose prose-lg prose-headings:font-atkinson">
      <h2>Welcome!</h2>
      <p>
        Reading Indie Gamers is an inclusive gaming club dedicated to
        independently published and lesser known analogue games.
      </p>
      <p>
        In the interest of being a fun environment for everyone, please read and
        uphold our <Link href="/coc">Code of Conduct</Link> while participating
        in club activities, online and in person.
      </p>
      <h2>What Is An Analogue Game?</h2>
      <p>
        Analogue games are those played sat around a table using physical items,
        as distinct from video games. They tend to fall under the broad headings
        of Roleplaying Games, Board Games, Card Games, and Wargames; though
        these categories can often blend together.
      </p>
      <h2>What Is An Indie Game?</h2>
      <p>
        For our purposes, we&apos;re taking a generous definition of
        &ldquo;Indie&rdquo;.
      </p>
      <p>
        In particular, what is considered &ldquo;Indie&rdquo; can vary
        significantly between different genres of analogue game, and is
        generally easiest to define by what it isn't rather than what it is.
        There is no hard and fast rule for determining if something is
        sufficiently indie, but as long as it's not a game with a monopoly in
        its genre and one that is not heavily embedded into the cultural
        zeitgeist it&apos;s almost certainly welcome!
      </p>
      <h2>Join The Discord</h2>
      <p>
        All of our events and activities are planned and organised through
        discord, so while we have a presence on other social platforms, if you
        want to participate then you&apos;ll need to find your way there!
      </p>
      <div className="not-prose">
        <Link
          href="https://discord.gg/vG4XtVK4mt"
          className="bg-red-600 text-white p-4 px-8 my-8 text-4xl rounded-full block mx-auto w-max shadow transition-all ease-in-out hover:scale-105 font-atkinson"
        >
          Join Us!
        </Link>
      </div>
      <p>Our Discord is open to any of the following:</p>
      <ul>
        <li>Those who live in or around Reading.</li>
        <li>Those willing to commute to the Reading area to participate.</li>
      </ul>
      <p>
        We focus primarily on in person events, and so if you aren&apos;t from
        Reading or nearby, there&apos;s little reason for you to join!
      </p>
    </article>
  );
}
