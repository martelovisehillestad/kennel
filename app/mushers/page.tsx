import Image from "next/image";

export default function MushersPage() {
  return (
    <main className="bg-[#fffaf5]">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          The Mushers
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          The Mushers behind Headwind
        </h1>

        {/* Hanna – bilde venstre */}
        <section className="mt-16 grid gap-8 md:grid-cols-[360px,1fr] items-start">
          <Image
            src="/test12.png"
            alt="Hanna Lyrek"
            width={360}
            height={480}
            className="block w-[360px] h-auto object-cover border border-slate-200"
          />

          <div className="space-y-3 text-slate-800 leading-relaxed">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 leading-tight">
              Hanna Lyrek
            </h2>
            <p>
              Hanna Lyrek grew up in the heart of northern mushing culture,
              surrounded by dogs, races, and a community where sledding is a
              way of life.
            </p>
            <p>
              She has completed some of the toughest events in the sport —
              including Iditarod and Finnmarksløpet — earning recognition for
              her calm leadership and deep understanding of her dogs.
            </p>
            <p>
              Her daily work with the team reflects a long tradition of
              knowledge passed down through generations of mushers.
            </p>
          </div>
        </section>

        {/* Roger – bilde høyre */}
        <section className="mt-24 grid gap-8 md:grid-cols-[1fr,360px] items-start">
          <div className="space-y-3 text-slate-800 leading-relaxed">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 leading-tight">
              Roger Dahl
            </h2>
            <p>
              Roger Dahl is one of the most experienced long-distance mushers
              in Northern Norway, with decades of experience on the trail.
            </p>
            <p>
              Known for consistency and endurance, his career has been closely
              tied to Finnmarksløpet and the development of the sport in the
              region.
            </p>
            <p>
              As a mentor, Roger continues to guide the next generation with
              knowledge built over thousands of kilometers.
            </p>
          </div>

          <Image
            src="/test12.png"
            alt="Roger Dahl"
            width={360}
            height={480}
            className="block w-[360px] h-auto object-cover border border-slate-200"
          />
        </section>

        {/* Extended crew */}
        <section className="mt-24 border-t border-slate-200 pt-8">
          <h2 className="text-lg font-semibold text-slate-900">
            The extended crew
          </h2>
          <p className="mt-3 max-w-prose text-slate-700 leading-relaxed">
            Around Hanna and Roger is a circle of handlers and close friends
            who keep the kennel running day to day — on the trail and at home.
          </p>

          <ul className="mt-4 grid gap-2 text-slate-800 md:grid-cols-2">
            <li>Linnea</li>
            <li>Ingrid</li>
            <li>Gøran</li>
            <li>Trine</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
