export function DonationCTA() {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      <a href="/checkout/donate?amount=200"  className="rounded-xl border px-4 py-2 font-medium">200 kr</a>
      <a href="/checkout/donate?amount=500"  className="rounded-xl border px-4 py-2 font-medium">500 kr</a>
      <a href="/checkout/donate?amount=1000" className="rounded-xl border px-4 py-2 font-medium">1 000 kr</a>
      <a href="/checkout/donate" className="rounded-xl bg-slate-900 px-4 py-2 font-medium text-white">Valgfritt beløp</a>
      <a href="/checkout/vipps" className="rounded-xl bg-slate-900 px-4 py-2 font-medium text-white">Vipps</a>
    </div>
  );
}
