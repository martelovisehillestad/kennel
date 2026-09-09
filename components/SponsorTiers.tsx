const tiers = [
  { name: "Bronse", price: "5 000 kr", perks: ["Logo på nettside", "1 SoMe-innlegg"] },
  { name: "Sølv",   price: "15 000 kr", perks: ["Alt i Bronse", "Logo på klær/slede*", "3 SoMe-innlegg"] },
  { name: "Gull",   price: "40 000 kr", perks: ["Alt i Sølv", "Oppdateringer fra løypa", "Bedriftsbesøk etter sesong"] },
];

export function SponsorTiers() {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {tiers.map((t) => (
        <div key={t.name} className="rounded-2xl border p-5 shadow">
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-500">{t.name}</div>
          <div className="mt-1 text-2xl font-bold">{t.price}</div>
          <ul className="mt-3 space-y-1 text-sm text-slate-700">
            {t.perks.map((p) => <li key={p}>• {p}</li>)}
          </ul>
          <a
            href={`/checkout/sponsor?tier=${encodeURIComponent(t.name)}`}
            className="mt-4 block rounded-xl bg-slate-900 px-4 py-2 text-center font-medium text-white"
          >
            Velg {t.name}
          </a>
          <p className="mt-2 text-xs text-slate-500">*Etter avtale og tilgjengelig plassering.</p>
        </div>
      ))}
    </div>
  );
}
