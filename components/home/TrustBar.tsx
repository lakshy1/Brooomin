import { AreaBadge } from "@/components/shared/AreaBadge";
import { SERVICE_ZONES } from "@/lib/constants";

const stats = [
  "500+ Happy Homes",
  "5 Neighbourhoods Served",
  "4.9★ Average Rating",
  "100% Eco-Friendly Products",
];

export function TrustBar() {
  return (
    <section className="bg-primary text-white">
      <div className="section-shell py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-semibold">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {SERVICE_ZONES.map((zone) => (
            <AreaBadge key={zone} label={zone} />
          ))}
        </div>
      </div>
    </section>
  );
}
