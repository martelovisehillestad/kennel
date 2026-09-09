"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const NAV = [
  { href: "/us", label: "Us" },
  { href: "/mushers", label: "The Mushers" },
  { href: "/dogs", label: "The Dogs" },
  { href: "/sponsorships", label: "Sponsorships" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (!scrolledRef.current && y > 80) {
        scrolledRef.current = true;
        setScrolled(true);
      } else if (scrolledRef.current && y < 40) {
        scrolledRef.current = false;
        setScrolled(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-[padding,box-shadow] duration-300 ease-out ${
        scrolled
          ? "py-2 shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
          : "py-6"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center gap-4">

        {/* LOGO */}
        <Link
          href="/"
          className={`transition-[opacity,max-height] duration-300 overflow-hidden ${
            scrolled
              ? "opacity-0 max-h-0 pointer-events-none"
              : "opacity-100 max-h-24"
          }`}
        >
          <Image
            alt="Team Headwind"
            src="/navlogo.png"
            width={260}
            height={72}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* NAV */}
        <nav
          className={`${playfair.className} flex items-center justify-center gap-8 text-[15px]`}
        >
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors duration-200 ${
                  active
                    ? "text-[var(--brand-hover)]"
                    : "text-[var(--brand)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
