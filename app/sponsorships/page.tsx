export default function SponsorshipsPage() {
  return (
    <main className="bg-[#fffaf5]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Sponsorship
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
          Support Team Headwind
        </h1>

        <section className="mt-8 space-y-6 text-slate-800 leading-relaxed max-w-3xl">
          <p>
            Running a competitive sled dog team is both a privilege and a massive undertaking.
            Every training mile, every night run, and every race depends on high-quality gear,
            constant care, and a whole lot of dedication.
          </p>
          <p>
            If you’d like to be part of our journey, you can support us through Hanna’s GoFundMe campaign.
            You choose the amount you want to donate, and you can simply write in the comment section what
            you’d like your contribution to go toward. Below are some examples of what your support can make possible.
          </p>
          <p className="text-sm text-slate-600 italic">
            (Here we’ll link directly to Hanna’s GoFundMe once the campaign is live.)
          </p>
        </section>

        {/* Pakker */}
        <section className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Bootie Sponsorship */}
          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Bootie Sponsorship – 100 USD</h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Help keep our dogs&apos; paws safe on the trail. Each dog goes through hundreds of booties
              every season. These little “shoes” are essential for protecting their paws from ice, snow,
              and rough surfaces. Your Bootie Sponsorship helps the dogs be ready for adventure and able to
              perform at their best.
            </p>
          </div>

          {/* Buy a Mile */}
          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Buy a Mile – 100 USD</h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Support one mile of Hanna’s journey across Alaska. The Iditarod is over a thousand miles of
              wilderness, weather, mountains, and pure determination. When you “buy a mile,” you are directly
              supporting one mile of the very trail Hanna and the dogs will race across.
            </p>
            <p className="mt-2 text-slate-800">
              Your contribution helps cover race fees, dog food, equipment, logistics, and everything it takes
              to get the team to the starting line — and all the way to Nome.
            </p>
          </div>

          {/* Sled Sponsorship */}
          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Sled Sponsorship – 2000 USD</h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Give us the security that comes with a reliable sled. A solid sled is as important to the musher
              as a good harness is to the dogs. It needs to handle extreme weather, steep downhills, fast runs,
              and heavy loads. Your Sled Sponsorship helps us invest in and maintain one of our most important
              pieces of equipment.
            </p>
          </div>

          {/* Premium */}
          <div className="border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">Premium Sponsorships</h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              For those who wish to make a bigger impact, we offer a few special opportunities. These options
              provide meaningful support for the kennel while giving you a unique connection to our team.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900">Name a Dog – 6000 USD</h3>
                <p className="mt-1 text-slate-800">
                  When you name a puppy, you become part of their story from day one. Work closely with Hanna to
                  choose a name that reflects the puppy’s personality and the team’s traditions. You’ll receive
                  updates and photos as your dog grows, trains, and develops into a competitive athlete.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Exclusive Musher Experience With Hanna – 8000 USD
                </h3>
                <p className="mt-1 text-slate-800">
                  Experience sled dog racing like a pro. Spend a private day with Hanna and the dogs in Alta,
                  working hands-on with the dogs and learning the ins and outs of professional mushing. You’ll
                  drive your own team under Hanna’s guidance and get behind-the-scenes access to training, care,
                  and life on the trail.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
