import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Sheesham vs Teak vs MDF: Which Wood for Your Home? | Dinwood Blog",
  description:
    "A practical guide to choosing wood for furniture and interiors in Haryana's climate. Sheesham, teak, walnut and MDF compared honestly by Dinwood, Rohtak.",
  keywords:["sheesham wood furniture","teak vs sheesham","MDF furniture Rohtak","best wood for Indian homes","wood guide Haryana"],
};

const comparison = [
  { property:"Durability",      sheesham:"★★★★★", teak:"★★★★★", walnut:"★★★★☆", mdf:"★★☆☆☆" },
  { property:"Humidity Resistance", sheesham:"★★★★☆", teak:"★★★★★", walnut:"★★★☆☆", mdf:"★★☆☆☆" },
  { property:"Workability",    sheesham:"★★★★☆", teak:"★★★☆☆", walnut:"★★★★★", mdf:"★★★★★" },
  { property:"Affordability",  sheesham:"★★★★☆", teak:"★★☆☆☆", walnut:"★★★☆☆", mdf:"★★★★★" },
  { property:"Aesthetics",     sheesham:"★★★★☆", teak:"★★★★★", walnut:"★★★★★", mdf:"★★★☆☆" },
  { property:"Longevity",      sheesham:"20-30 yrs", teak:"30+ yrs", walnut:"20-25 yrs", mdf:"5-8 yrs" },
];

export default function BlogPost2() {
  return (
    <>
      <section className="pt-36 pb-10 max-w-3xl mx-auto px-5">
        <Link href="/blog" className="font-mono text-[10px] tracking-widest uppercase text-honey/50 hover:text-honey mb-8 inline-block">
          ← The Woodlog
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="stamp">Guide</span>
          <span className="font-mono text-[10px] text-bark/35">7 min read · February 2025</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight mb-6">
          Sheesham vs Teak vs MDF: Which Wood is Right for Your Home?
        </h1>
        <p className="font-body text-lg text-bark/55 leading-relaxed italic">
          With Haryana&apos;s climate and Indian lifestyles in mind — an honest, practical guide to choosing the right wood for furniture and interiors.
        </p>
      </section>

      <section className="pb-5 max-w-3xl mx-auto px-5">
        <div className="aspect-video bg-parch border border-straw/50 flex items-center justify-center rounded-sm mb-12">
          <span className="font-mono text-sm text-bark/20">[ Hero Image — Wood Samples ]</span>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-5 pb-16">
        <div className="space-y-8">
          <p className="font-body text-bark/65 leading-relaxed">
            Walk into any furniture store or carpenter shop in Rohtak and you&apos;ll hear terms like sheesham, teak, plywood, MDF, and engineered wood. What do they actually mean for your home? And which should you choose? Here&apos;s what we tell every customer who visits our showroom.
          </p>

          <h2 className="font-display text-3xl font-bold text-bark">Sheesham (Indian Rosewood)</h2>
          <p className="font-body text-bark/65 leading-relaxed">
            Sheesham is the workhorse of Indian furniture — and for good reason. It&apos;s native to the subcontinent, naturally resistant to decay and termites, and has a beautiful interlocked grain that polishes to a warm reddish-brown. It handles Haryana&apos;s hot summers and occasional humidity well.
          </p>
          <p className="font-body text-bark/65 leading-relaxed">
            At Dinwood, sheesham is our most requested solid wood. It&apos;s excellent for dining tables, beds, study furniture and wardrobes — anywhere you want long-lasting solid wood without teak&apos;s price premium.
          </p>

          <h2 className="font-display text-3xl font-bold text-bark">Teak</h2>
          <p className="font-body text-bark/65 leading-relaxed">
            Teak is the gold standard globally — and it earns that reputation. It has natural oils that make it extraordinarily resistant to moisture, insects, and weathering. A teak dining table built today will outlast everyone in your household.
          </p>
          <p className="font-body text-bark/65 leading-relaxed">
            The honest downside: good teak is expensive, and the market is flooded with lower-grade plantation teak that doesn&apos;t carry the same properties. At Dinwood, we source responsibly and show you exactly what grade you&apos;re getting.
          </p>

          <h2 className="font-display text-3xl font-bold text-bark">Walnut</h2>
          <p className="font-body text-bark/65 leading-relaxed">
            Walnut has become very popular in contemporary Indian interiors. Its chocolate-brown tone, fine grain and exceptional workability make it ideal for precision furniture — detailed cabinetry, office desks, and statement pieces. It&apos;s slightly softer than teak but beautiful and durable.
          </p>

          <h2 className="font-display text-3xl font-bold text-bark">MDF & Engineered Wood</h2>
          <p className="font-body text-bark/65 leading-relaxed">
            MDF (Medium Density Fibreboard) is made from compressed wood fibres. It&apos;s smooth, uniform, easy to work with, and much cheaper than solid wood. Used widely in modular kitchens and wardrobes for carcasses (internal structure) with solid wood or laminate shutters.
          </p>
          <p className="font-body text-bark/65 leading-relaxed">
            Our honest take: good quality ply carcasses with solid wood or laminate shutters is a smart, cost-effective approach for kitchen cabinets and wardrobe internals. But for furniture surfaces, solid wood always wins on longevity.
          </p>
        </div>

        {/* Comparison table */}
        <div className="my-14">
          <h2 className="font-display text-3xl font-bold text-bark mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto rounded-sm border border-straw/50">
            <table className="w-full min-w-[540px]">
              <thead>
                <tr className="bg-parch border-b border-straw/50">
                  <th className="text-left p-4 font-mono text-[10px] tracking-widest uppercase text-bark/50">Property</th>
                  <th className="p-4 font-mono text-[10px] tracking-widest uppercase text-honey">Sheesham</th>
                  <th className="p-4 font-mono text-[10px] tracking-widest uppercase text-bark/50">Teak</th>
                  <th className="p-4 font-mono text-[10px] tracking-widest uppercase text-bark/50">Walnut</th>
                  <th className="p-4 font-mono text-[10px] tracking-widest uppercase text-bark/50">MDF</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.property} className={`border-b border-straw/30 ${i%2===0?"bg-linen":"bg-cream"}`}>
                    <td className="p-4 font-body text-sm text-bark/70">{row.property}</td>
                    <td className="p-4 text-center font-mono text-xs text-honey">{row.sheesham}</td>
                    <td className="p-4 text-center font-mono text-xs text-bark/50">{row.teak}</td>
                    <td className="p-4 text-center font-mono text-xs text-bark/50">{row.walnut}</td>
                    <td className="p-4 text-center font-mono text-xs text-bark/50">{row.mdf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-3xl font-bold text-bark">Our recommendation for Rohtak homes</h2>
          <ul className="space-y-3">
            {[
              "Furniture (beds, tables, chairs): Sheesham or teak solid wood",
              "Modular kitchen carcasses: Premium 18mm BWR ply",
              "Kitchen shutters: Solid wood or high-pressure laminate",
              "Wardrobe carcasses: Premium ply, solid wood shutters",
              "Wall paneling: Solid sheesham or engineered oak",
              "Flooring: Engineered hardwood (more stable than solid in Indian climates)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-bark/65">
                <Check size={14} className="text-honey mt-0.5 shrink-0"/>
                {item}
              </li>
            ))}
          </ul>
          <p className="font-body text-bark/65 leading-relaxed">
            When you visit Dinwood in Rohtak, we show you actual samples of every material. You can feel the difference between grades, understand the cost tradeoffs, and make a decision you&apos;ll be happy with in ten years.
          </p>
        </div>

        <div className="mt-16 pt-10 border-t border-straw/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-honey/60 mb-2">Written by</p>
              <p className="font-display text-xl font-bold text-bark">The Dinwood Team</p>
              <p className="font-body text-sm text-bark/40">Rohtak, Haryana</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-honey text-bark text-[11px] font-mono tracking-widest uppercase hover:bg-soil hover:text-parch transition-colors rounded-sm">
              Book a Consultation <ArrowRight size={12}/>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
