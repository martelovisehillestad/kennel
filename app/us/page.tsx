import Image from "next/image";

export default function UsPage() {
  return (
    <main className="bg-[#fffaf5]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Us
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          The Headwind Husky team
        </h1>

        <div className="mt-10 border border-slate-200">
          <Image
            src="/raceteam.png"   
            alt="Headwind Husky team"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>

        <section className="mt-10 space-y-6 text-slate-800 leading-relaxed max-w-3xl">
          <p>
            Headwind Husky team is a long-distance sled dog team built on experience,
            collaboration, and generations of passion for mushing in the North.
          </p>
          <p className="font-medium text-slate-900">
            The name Headwind represents what defines us: we move into the wind, not away from it.
            We don’t avoid challenges — we work through them.
          </p>
          <p>
            Headwinds are challenges — tough weather, long nights, changing trails — and choosing
            to face them is what builds a true endurance team. Weather, darkness, and unpredictable
            trails are simply part of the sport, and facing them together is what forms a strong and
            reliable team.
          </p>
          <p>
            Led today by musher Hanna Lyrek — one of the most promising young athletes in the sport —
            Headwind is part of a new generation growing out of solid roots.
          </p>
          <p>
            The team stands on the foundation of strong mentors, family, friends and dedicated
            handlers who keep the dogs and operations running every single day. Team Headwind is
            not just one person; it’s a living community shaped by knowledge passed down and support
            from close friends.
          </p>
          <p>
            At the center of it all are the dogs: athletes who live, train, rest, and race as a unit.
            Their trust in us, and in each other, is the foundation the whole team is built on.
          </p>
          <p className="font-medium text-slate-900">
            Team Headwind is not one person’s story — it’s a collective effort. A community of people
            and dogs meeting every challenge head-on, mile by mile, across the Arctic trails we call home.
          </p>
        </section>
      </div>
    </main>
  );
}
