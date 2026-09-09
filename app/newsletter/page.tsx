export default function NewsletterPage() {
  return (
    <main className="bg-[#fffaf5]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Newsletter
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Newsletter & Stories from the Trail
        </h1>

        <section className="mt-8 space-y-6 text-slate-800 leading-relaxed max-w-3xl">
          <p>
            In our newsletter we share adventures, race updates, kennel life, and the small moments that
            define a sled dog team. You’ll get stories about the dogs, the mushers, the races, and the
            Arctic trails we call home.
          </p>
          <p>
            You&apos;ll also find reflections from the road, behind-the-scenes notes, and updates on how
            your support helps us move forward.
          </p>
          <p className="text-sm text-slate-600 italic">
            (Here we can later embed a real signup-form for the newsletter.)
          </p>
        </section>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Adventures</h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Stories from long training runs, night trips, and race preparations — the everyday life that
              builds an Iditarod team step by step.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Talks & Events</h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Updates on talks, school visits, and events where we share what it means to work with sled dogs
              in the North.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Kennel News</h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              New dogs, training milestones, race plans, and everyday moments from the yard.
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Roger&apos;s Blog</h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Reflections from a lifetime on the trail — long-form stories and insights from Roger.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
