import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Wooden Interior Services in Rohtak | Custom Furniture, Kitchens, Wardrobes & More",
  description:
    "Dinwood offers custom furniture, modular kitchens, wardrobes, interior woodwork and office furniture in Rohtak, Haryana. All work starts with a personal consultation.",
};

const services = [
  {
    n:"01", emoji:"🪑", slug:"custom-furniture",
    title:"Custom Furniture",
    sub:"Tables · Beds · Chairs · Bespoke Pieces",
    desc:"Handbuilt to your exact specifications. From a single dining table to an entire room of furniture — every piece crafted with care in our Rohtak workshop.",
  },
  {
    n:"02", emoji:"🍳", slug:"modular-kitchens",
    title:"Modular Kitchens",
    sub:"L-Shape · U-Shape · Parallel · Island",
    desc:"Functional, beautiful kitchen layouts built for Indian cooking. Solid shutters, quality hardware, and every drawer sized for how you actually use your kitchen.",
  },
  {
    n:"03", emoji:"🚪", slug:"wardrobes-storage",
    title:"Wardrobes & Storage",
    sub:"Built-ins · Walk-ins · Sliding Systems",
    desc:"Floor-to-ceiling wardrobes that disappear into your room. From master bedroom walk-ins to children's room storage — we build it to fit perfectly.",
  },
  {
    n:"04", emoji:"🪵", slug:"interior-woodwork",
    title:"Interior Woodwork",
    sub:"Paneling · Flooring · Ceilings · Millwork",
    desc:"Wall paneling, herringbone floors, coffered ceilings, and architectural woodwork. Wood as the architecture of your interior.",
  },
  {
    n:"05", emoji:"💼", slug:"office-furniture",
    title:"Office Furniture",
    sub:"Workstations · Cabinets · Reception Desks",
    desc:"Professional, lasting office furniture for Rohtak businesses. Workstations that encourage focus and reception counters that make a first impression.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-5">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">What We Do</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.92] text-bark font-bold">Services</h1>
          <p className="font-body text-bark/55 max-w-xs text-sm leading-relaxed">
            All work begins with a visit to our Rohtak showroom. No online orders — every project is personal.
          </p>
        </div>
      </section>

      <section className="pb-28 max-w-7xl mx-auto px-5 flex flex-col gap-3">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`}
            className="group grid grid-cols-1 md:grid-cols-12 border border-straw/60 bg-parch hover:border-honey hover:bg-linen transition-all duration-400 rounded-sm overflow-hidden card-hover">
            <div className="md:col-span-4 aspect-video md:aspect-auto bg-bark/10 flex items-center justify-center min-h-[180px]">
              <div className="text-center text-bark/20">
                <div className="text-4xl mb-2">{s.emoji}</div>
                <span className="font-mono text-xs">[ {s.title} Photo ]</span>
              </div>
            </div>
            <div className="md:col-span-8 p-10 flex flex-col justify-center">
              <span className="font-mono text-[10px] tracking-widest text-honey/50 mb-3">{s.n}</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-bark group-hover:text-honey transition-colors mb-1">{s.title}</h2>
              <p className="font-mono text-[10px] tracking-widest uppercase text-bark/35 mb-5">{s.sub}</p>
              <p className="font-body text-sm text-bark/55 leading-relaxed mb-7 max-w-xl">{s.desc}</p>
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-honey">
                Explore <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform duration-300"/>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="py-20 bg-honey">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mb-4">Not sure where to start?</h2>
          <p className="font-body text-bark/65 mb-8">Come by our Rohtak showroom — we&apos;ll help you figure it out together.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-bark text-parch text-[12px] font-mono tracking-widest uppercase hover:bg-forest transition-colors duration-300 rounded-sm">
            Book a Visit <ArrowRight size={14}/>
          </Link>
        </div>
      </section>
    </>
  );
}
