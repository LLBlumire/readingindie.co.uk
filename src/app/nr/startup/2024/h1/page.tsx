import Link from "next/link";

export default function StartupH1CO2024() {
    return (
        <article className="prose prose-lg prose-headings:font-atkinson">
            <h2>Netrunner Startup Circuit Opener H1 2024</h2>
            <h3>Basic Info</h3>
            <table>
                <tr>
                    <th>Date:&nbsp;</th>
                    <td>17th of February 2024</td>
                </tr>
                <tr>
                    <th>Location:&nbsp;</th>
                    <td>RISC on London Street</td>
                </tr>
                <tr>
                    <th>Price:&nbsp;</th>
                    <td>Voluntary £5 donation requested</td>
                </tr>
                <tr>
                    <th>Format:&nbsp;</th>
                    <td>The Automota Initiative Startup (24.01 Banlist)</td>
                </tr>
            </table>
            <h3>Prizes</h3>
            <table>
                <tr>
                    <th>1st:&nbsp;</th>
                    <td>Invite to 2025 CBI</td>
                </tr>
                <tr>
                    <th>Top 2:&nbsp;</th>
                    <td>Cat's Cradle Playmat</td>
                </tr>
                <tr>
                    <th>Top 4:&nbsp;</th>
                    <td>Prepaid VoicePAD Alt Art Playset</td>
                </tr>
                <tr>
                    <th>Top 8:&nbsp;</th>
                    <td>Tatu-Bola Alt Art Playset</td>
                </tr>
                <tr>
                    <th>Random 2:&nbsp;</th>
                    <td>Drafter Alt Art Playset</td>
                </tr>
            </table>
            <p>
                Tournament page on <a href="https://alwaysberunning.net/tournaments/4081/rig-startup-circuit-opener-h1">Always Be Running</a>
            </p>
            <p>
                Join the Discord to discuss:
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
