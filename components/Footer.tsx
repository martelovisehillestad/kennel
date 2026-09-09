import Image from "next/image";
import Link from "next/link";

const BRAND = "#b4d4e0"; // isblå aksentfarge fra navbaren

export default function Footer() {
  return (
    <footer className="border-t border-white/40 bg-[#fffaf5]">
      {/* Toppdel */}
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo og kort tekst */}
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              alt="Team Headwind"
              src="/headwindhorisontal-logo.png"
              width={160}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
            Team Headwind — racing Iditarod med fokus på hundevelferd, natur og ekte lagarbeid.
          </p>
        </div>

        {/* Navigasjon */}
        <nav className="text-sm">
          <div className="mb-3 font-semibold text-slate-900">Navigate</div>
          <ul className="space-y-2">
            <li><Link href="/dogs" className="hover:opacity-70 transition">The Dogs</Link></li>
            <li><Link href="/mushers" className="hover:opacity-70 transition">The Mushers</Link></li>
            <li><Link href="/raceteam" className="hover:opacity-70 transition">The Raceteam</Link></li>
            <li><Link href="/adventures" className="hover:opacity-70 transition">Adventures & Talks</Link></li>
            <li><Link href="/newsletter" className="hover:opacity-70 transition">Newsletter</Link></li>
          </ul>
        </nav>

        {/* Kontaktinfo */}
        <div className="text-sm">
          <div className="mb-3 font-semibold text-slate-900">Contact</div>
          <ul className="space-y-2 text-slate-600">
            <li>Tromsø, Norway</li>
            <li>
              <a
                href="mailto:post@teamheadwind.no"
                className="underline decoration-transparent hover:decoration-slate-400 transition"
              >
                post@teamheadwind.no
              </a>
            </li>
            <li>
              <a
                href="tel:+4790000000"
                className="underline decoration-transparent hover:decoration-slate-400 transition"
              >
                +47 900 00 000
              </a>
            </li>
          </ul>
        </div>

        {/* Sosiale medier + nyhetsbrev */}
        <div className="text-sm">
          <div className="mb-3 font-semibold text-slate-900">Follow</div>
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              aria-label="Instagram"
              href="https://instagram.com"
              target="_blank"
              className="p-2 border border-slate-300 hover:border-slate-400 transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              aria-label="Facebook"
              href="https://facebook.com"
              target="_blank"
              className="p-2 border border-slate-300 hover:border-slate-400 transition"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0 1 14 6h3v3h-3c-.3 0-1 .2-1 1V12h4l-.5 3h-3.5v7A10 10 0 0 0 22 12z" />
              </svg>
            </a>
          </div>

          <div className="mt-6">
            <Link
              href="/newsletter"
              className="inline-block px-5 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition"
              style={{ borderRadius: 999 }}
            >
              Join our newsletter
            </Link>
          </div>
        </div>
      </div>

      {/* Bunnlinje */}
      <div className="border-t border-white/40">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Team Headwind — All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:opacity-70 transition" style={{ color: BRAND }}>
              Privacy
            </Link>
            <span className="text-slate-400">•</span>
            <Link href="/terms" className="hover:opacity-70 transition" style={{ color: BRAND }}>
              Terms
            </Link>
            <span className="text-slate-400">•</span>
            <Link href="/contact" className="hover:opacity-70 transition" style={{ color: BRAND }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
