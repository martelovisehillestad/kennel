import Image from "next/image";

type DogInfo = {
  name: string;
  role: string;
};

const raceTeam: DogInfo[] = [
  { name: "Dog Name 1", role: "Lead dog" },
  { name: "Dog Name 2", role: "Lead dog" },
  { name: "Dog Name 3", role: "Swing dog" },
  { name: "Dog Name 4", role: "Team dog" },
  { name: "Dog Name 5", role: "Team dog" },
  { name: "Dog Name 6", role: "Wheel dog" },
];

const adventureTeam: DogInfo[] = [
  { name: "Dog Name 7", role: "Trail companion" },
  { name: "Dog Name 8", role: "Adventure dog" },
  { name: "Dog Name 9", role: "Tour leader" },
  { name: "Dog Name 10", role: "Adventure dog" },
];

const puppyLitter: DogInfo[] = [
  { name: "Puppy 1", role: "Future athlete" },
  { name: "Puppy 2", role: "Future athlete" },
  { name: "Puppy 3", role: "Future athlete" },
  { name: "Puppy 4", role: "Future athlete" },
];

function DogCard({ dog, teamLabel }: { dog: DogInfo; teamLabel: string }) {
  return (
    <article className="flex flex-col border border-slate-200 bg-white">
      {/* Bildet – skarpe kanter */}
      <div className="relative aspect-[4/3]">
        <Image
          src="/test12.png"
          alt={dog.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Tekst under bildet */}
      <div className="flex flex-col gap-1 border-t border-slate-100 px-3 py-3">
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
          {teamLabel} • {dog.role}
        </span>
        <h3 className="text-sm font-semibold tracking-tight text-slate-900">
          {dog.name}
        </h3>
      </div>
    </article>
  );
}

export default function DogsPage() {
  return (
    <main className="bg-[#fffaf5]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Overordnet tittel */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          The Dogs
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">
          The dogs of Team Headwind
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-700 leading-relaxed">
          On this page you&apos;ll find a visual overview of the dogs that shape our days:
          the race team preparing for Iditarod, the adventure team, and the young dogs
          growing into tomorrow&apos;s athletes.
        </p>

        {/* RACE TEAM */}
        <section className="mt-12">
          <header className="flex flex-col gap-2 border-b border-slate-200 pb-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Race Team
            </h2>
            <p className="max-w-2xl text-sm text-slate-700 leading-relaxed">
              These are the dogs preparing to stand on the starting line of Iditarod 2026 –
              the group we&apos;ve trained with through dark mornings, long autumn miles, and
              countless small moments that build trust on the trail.
            </p>
          </header>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {raceTeam.map((dog) => (
              <DogCard key={dog.name} dog={dog} teamLabel="Race team" />
            ))}
          </div>
        </section>

        {/* ADVENTURE TEAM */}
        <section className="mt-16">
          <header className="flex flex-col gap-2 border-b border-slate-200 pb-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Adventure Team
            </h2>
            <p className="max-w-2xl text-sm text-slate-700 leading-relaxed">
              The adventure pack: dogs who shape our everyday life in the kennel – tours,
              training runs, and the miles that build future race teams.
            </p>
          </header>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {adventureTeam.map((dog) => (
              <DogCard key={dog.name} dog={dog} teamLabel="Adventure team" />
            ))}
          </div>
        </section>

        {/* PUPPY LITTER */}
        <section className="mt-16">
          <header className="flex flex-col gap-2 border-b border-slate-200 pb-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">
              Puppy Litter
            </h2>
            <p className="max-w-2xl text-sm text-slate-700 leading-relaxed">
              Young, eager, and full of potential – future athletes learning the trails and
              building confidence, one run at a time.
            </p>
          </header>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {puppyLitter.map((dog) => (
              <DogCard key={dog.name} dog={dog} teamLabel="Future athletes" />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

