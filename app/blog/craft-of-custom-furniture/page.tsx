import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Custom Furniture Always Beats Ready-Made | Dinwood Blog",
  description:
    "Ready-made furniture fills a room. Custom furniture defines it. A practical cost comparison and guide for Rohtak homeowners considering bespoke wooden furniture.",
  keywords:["custom furniture vs ready made","bespoke furniture Rohtak","why custom furniture","wooden furniture guide Haryana"],
};

export default function BlogPost1() {
  return (
    <>
      <section className="pt-36 pb-10 max-w-3xl mx-auto px-5">
        <Link href="/blog" className="font-mono text-[10px] tracking-widest uppercase text-honey/50 hover:text-honey mb-8 inline-block">
          ← The Woodlog
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="stamp">Furniture</span>
          <span className="font-mono text-[10px] text-bark/35">5 min read · March 2025</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight mb-6">
          Why Custom Furniture Always Beats Ready-Made
        </h1>
        <p className="font-body text-lg text-bark/55 leading-relaxed italic">
          Ready-made furniture fills a room. Custom furniture defines it. Here&apos;s the honest comparison every Rohtak homeowner should read before buying.
        </p>
      </section>

      <section className="pb-5 max-w-3xl mx-auto px-5">
        <div className="aspect-video bg-parch border border-straw/50 flex items-center justify-center rounded-sm mb-12">
          <span className="font-mono text-sm text-bark/20">[ Hero Image — Custom Furniture ]</span>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-5 pb-28">
        <div className="prose-dinwood space-y-8">
          <p className="font-body text-bark/65 leading-relaxed text-base">
            Walk into any furniture shop in Rohtak and you&apos;ll find rows of sofas, beds and dining sets in three or four standard sizes. They look fine in the showroom. But take one home, and suddenly the dining table is 6 inches too long for your dining room, the wardrobe only fits three-quarters of your clothes, and the sofa faces the wrong wall because it can&apos;t fit any other way.
          </p>

          <h2 className="font-display text-3xl font-bold text-bark">The real cost of ready-made</h2>
          <p className="font-body text-bark/65 leading-relaxed">
            Ready-made furniture seems cheaper upfront. But factor in what you actually lose: you compromise on size, compromise on finish, and often compromise on material quality. Then, five years later, the joints start failing because it was built for a price point, not a lifetime.
          </p>
          <p className="font-body text-bark/65 leading-relaxed">
            Custom furniture built by Dinwood in our Rohtak workshop uses solid sheesham or teak with proper joinery. It costs more upfront, yes — but it lasts 20 to 30 years. The per-year cost of quality custom furniture is often lower than mid-range ready-made that needs replacing in five.
          </p>

          <h2 className="font-display text-3xl font-bold text-bark">Your space, your sizes</h2>
          <p className="font-body text-bark/65 leading-relaxed">
            Indian homes — especially in Rohtak and across Haryana — come in all shapes. Old havelis with unusual room proportions. Modern apartments with awkward alcoves. Builder flats where every centimetre matters. Custom furniture fits your actual room, not the average room.
          </p>
          <p className="font-body text-bark/65 leading-relaxed">
            A custom dining table for a family that eats together every night can be built exactly the right size. A wardrobe can fill the full height of your wall, using space that a standard wardrobe leaves wasted. A study desk can be built into an awkward corner instead of leaving it empty.
          </p>

          <h2 className="font-display text-3xl font-bold text-bark">Wood that tells the truth</h2>
          <p className="font-body text-bark/65 leading-relaxed">
            Most ready-made furniture in India is built with MDF or particle board dressed up with veneer or laminate. It looks good for a year or two, then starts to swell, chip or delaminate — especially in Haryana&apos;s summer humidity.
          </p>
          <p className="font-body text-bark/65 leading-relaxed">
            Solid sheesham, teak or walnut doesn&apos;t pretend to be something it isn&apos;t. It ages honestly. It gets better with time. The grain deepens, the wood develops a patina, and 15 years later it&apos;s still solid and beautiful.
          </p>

          <h2 className="font-display text-3xl font-bold text-bark">How to get started</h2>
          <p className="font-body text-bark/65 leading-relaxed">
            At Dinwood, we start every project with a visit to our Rohtak showroom. You see the materials, touch the samples, and we talk about what you actually need. No catalogue. No pressure. Just a real conversation about your home.
          </p>
          <p className="font-body text-bark/65 leading-relaxed">
            Come by any day Monday through Saturday, or WhatsApp us to schedule a time. Let&apos;s figure out what your home really needs.
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
