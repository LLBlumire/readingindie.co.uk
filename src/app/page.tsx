import Link from "next/link";
import { atkinson } from "~/app/font";

export default function Home() {
  return (
    <article className="prose prose-lg">
      <h2 className={atkinson.className}>Welcome!</h2>
      <p>
        Reading Indie Gamers is an inclusive gaming club dedicated to
        independently published and lesser known roleplaying games.
      </p>
      <p>
        In the interest of being a fun environment for everyone, please read and
        uphold our <Link href="/coc">Code of Conduct</Link> while participating
        in club activities, online and in person.
      </p>
      <h2 className={atkinson.className}>
        What Is A Tabletop Roleplaying Game?
      </h2>
      <p>
        Tabletop Roleplaying Games invite you and some friends to sit down, and
        imagine another world. It might be similar to ours, or it may be
        completely different and fantastical. You&apos;ll work together with
        your friends to tell a story in this world, and the rules of the game
        will guide that story.
      </p>
      <h2 className={atkinson.className}>What Is An Indie Game?</h2>
      <p>
        For our purposes, we&apos;re taking a generous definition of
        &ldquo;Sufficiently Indie&rdquo;.
      </p>
      <p>
        Imagine a scale, with &ldquo;two sentences on the back of a
        beermat&rdquo; on the left and &ldquo;One DnD&trade;&rdquo; on the
        right. Where one defines &ldquo;Sufficiently Indie&rdquo; on this scale
        will differ from person to person, but so long as the game you want to
        run or play isn&apos;t towards the far right of that spectrum it should
        be welcome.
      </p>
      <h2 className={atkinson.className}>Do you ever play D&D?</h2>
      <p>
        We focus on the other games that are available, and receive less
        commercial attention. Don&apos;t worry if you&pos;ve never played any
        other TTRPG before, many of the games we play are some of the easiest
        TTRPGs to learn, and are a fantastic gateway into the hobby!
      </p>
      <h2 className={atkinson.className}>Join The Discord</h2>
      <p>
        All of our events and activities are planned and organised through
        discord, so while we have a presence on other social platforms, if you
        want to participate then you&apos;ll need to find your way there!
      </p>
      <div className="not-prose">
        <Link
          href="https://discord.gg/vG4XtVK4mt"
          className={`bg-red-600 text-white p-4 px-8 my-8 text-4xl rounded-full block mx-auto w-max shadow transition-all ease-in-out hover:scale-105 ${atkinson.className}`}
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
