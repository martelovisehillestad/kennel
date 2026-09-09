"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { DonationCTA } from "@/components/DonationCTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Page() {
  return (
    <main className="bg-[#fffaf5] text-slate-900">
      {/* HERO */}
      <section>
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-y-12 md:gap-x-16">
            {/* Tekst */}
            <div className="md:col-span-5 pr-0 md:pr-6">
              <span className="block text-[11px] uppercase tracking-[0.15em] text-slate-500">
                Iditarod • Alaska
              </span>
              <h1 className={`${playfair.className} mt-4 text-4xl sm:text-5xl font-semibold leading-snug`}>
                Hjelp oss til<br />startstreken – og helt til Nome
              </h1>
              <p className="mt-5 text-slate-700 text-[15px] leading-relaxed max-w-sm">
                Støtt hundenes reise til Iditarod – bli en del av eventyret.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/dogs"
                  className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white"
                >
                  Se våre hunder
                </a>
                <a
                  href="#donate"
                  className="rounded-full border border-[var(--brand)] px-6 py-2.5 text-sm font-medium text-[var(--brand)] hover:bg-[var(--brand)]/5"
                >
                  Støtt oss
                </a>
              </div>
            </div>

            {/* Bilde */}
            <div className="md:col-span-7 flex justify-end">
              <div className="w-full max-w-[780px]">
                <Image
                  src="/raceteam.png"
                  alt="Team Headwind race team"
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE MUSHER / TEAM (kommer før hundene) */}
      <section className="py-20 border-t border-white/40">
        <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Bilde (stables først på mobil) */}
          <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden">
            <Image
              src="/musher.jpg"
              alt="The musher"
              width={1000}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Tekst */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">The Musher</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla sapien ut mi
              tempus, nec interdum libero tempor. In aliquet, arcu quis imperdiet porttitor, turpis
              magna ullamcorper nunc, sed lacinia urna lectus eget urna.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Suspendisse potenti. Phasellus fermentum tellus nec mi ullamcorper, et feugiat arcu
              commodo. Praesent eget dignissim arcu. Vivamus tempus mi vitae lectus dictum, ut
              faucibus justo fermentum.
            </p>
            <a
              href="/mushers"
              className="inline-block rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-white hover:bg-slate-800 transition"
            >
              Learn more about the team
            </a>
          </div>
        </div>
      </section>

      {/* THE LEADERS */}
      <section className="py-20 border-t border-white/40">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className={`${playfair.className} text-4xl font-semibold mb-10`}>The Leaders</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center mb-12">
            {[
              { name: "DRACO", role: "Leaddog" },
              { name: "FREYA", role: "Leaddog" },
              { name: "BLIZZARD", role: "Leaddog" },
            ].map((dog, i) => (
              <div
                key={i}
                className="group w-[260px] border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <Image
                    src="/test12.png"
                    alt={dog.name}
                    width={260}
                    height={260}
                    className="block w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    priority
                  />
                </div>
                <div className="py-4 px-4 text-center">
                  <h3 className="text-lg font-semibold tracking-wide">{dog.name}</h3>
                  <p className="text-[13px] text-slate-500 mt-1">{dog.role}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/dogs"
            className="inline-block rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-white hover:bg-slate-800 transition"
          >
            See the whole team
          </a>
        </div>
      </section>

      {/* DONASJON */}
      <section id="donate" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Gi en donasjon</h2>
          <p className="mt-2 text-slate-600">Vipps/Stripe støttes (kan aktiveres senere).</p>
          <DonationCTA />
          <p className="mt-6 text-xs text-slate-500">
            Pengene går til fôr, veterinær, reise/Alaska og depoter langs løypa.
          </p>
        </div>
      </section>
    </main>
  );
}
