import Image from "next/image";
import Link from "next/link";
import { env } from "process";
import { z } from "zod";
import { atkinson } from "~/app/font";

const EventValidator = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  scheduled_start_time: z.string().datetime({ offset: true }),
  scheduled_end_time: z.string().datetime({ offset: true }).nullable(),
  entity_metadata: z.object({ location: z.string().nullable() }).nullable(),
  image: z.string().nullable(),
  user_count: z.number().optional(),
});
type Event = z.infer<typeof EventValidator>;

const EventListValidator = z.array(EventValidator);

export const revalidate = "production" ? 120 : 30;

export default async function Coc() {
  const serverEvents = await fetch(
    `https://discord.com/api/v10/guilds/${env.DISCORD_GUILD}/scheduled-events?with_user_count=true`,
    {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN ?? ""}`,
      },
    }
  )
    .then((value) => value.json())
    .then((value) => {
      console.log(value);
      return value;
    })
    .then((value) => EventListValidator.parse(value));

  serverEvents.sort((a, b) =>
    new Date(a.scheduled_start_time) < new Date(b.scheduled_start_time) ? -1 : 1
  );

  return (
    <div className="flex flex-col gap-8 my-10">
      {serverEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  const startTime = new Date(event.scheduled_start_time);
  const imageUrl = event.image
    ? `https://cdn.discordapp.com/guild-events/${event.id}/${event.image}.png?size=1024`
    : null;
  return (
    <>
      <div className="border rounded-xl overflow-hidden">
        {imageUrl ? (
          <div className="w-full relative aspect-[2.5]">
            <Image src={imageUrl} alt="" fill />
          </div>
        ) : null}
        <div className="px-6 py-4 flex flex-col gap-4">
          <div className={`flex justify-between ${atkinson.className}`}>
            <div>
              {startTime.toLocaleString("en-GB", {
                timeZone: "Europe/London",
              })}
            </div>
            <div>
              {event.entity_metadata?.location ?? (
                <Link href="https://discord.gg/vG4XtVK4mt">On Discord</Link>
              )}
            </div>
          </div>
          <h3 className={`text-2xl ${atkinson.className}`}>{event.name}</h3>
          <p className="">{event.description}</p>
          <div className="flex gap-4 items-center justify-end">
            <div className={atkinson.className}>
              Current Players: {event.user_count ?? 0}
            </div>
            <Link
              href="https://discord.gg/vG4XtVK4mt"
              className={`bg-red-600 px-4 py-2 rounded-full text-white hover:scale-105 transition-all ease-in-out ${atkinson.className}`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
