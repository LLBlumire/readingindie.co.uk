import Link from "next/link";

export default function Nr() {
    return (
        <article className="prose prose-lg prose-headings:font-atkinson">
            <h2>Netrunner</h2>
            <p>
                Netrunner is a living card game produced by the
                non-profit <a href="https://nullsignal.games">Null Signal Games</a>.
            </p>
            <p>
                The game has a thriving competative scene, with tournaments
                happening all around the world.
            </p>
            <p>
                Netrunner is one of the primary card games played at RIG, with a
                local startup league currently ongoing, and a circuit opener
                tournament likely to happen somewhere in H1 2024.
            </p>
            <p>
                Our members are able to bring along tutorial decks to help teach
                you the game, and once you've learned you can build or netdeck
                your own list, and have it fully proxy printed and set up by our
                members for under £20.
            </p>
            <p>
                These proxies aren't just nice to have, they are fully legal in
                tournament play at all competative levels, keeping the barrier
                to entry to Netrunner lower than any other competative card game
                on the market.
            </p>
            <p>
                For those who do want to buy card sets and support Null Signal
                Games financially, we recommend purchasing them through
                the <a href="https://netrunnercards.co.uk/">Netrunner Cards UK</a> store.
            </p>
            <p>
                If you're in Reading and would like to learn more then:
                <div className="not-prose">
                    <Link
                        href="https://discord.gg/vG4XtVK4mt"
                        className="bg-red-600 text-white p-4 px-8 my-8 text-4xl rounded-full block mx-auto w-max shadow transition-all ease-in-out hover:scale-105 font-atkinson"
                    >
                        Join Us!
                    </Link>
                </div>
            </p>
        </article>
    );
}
