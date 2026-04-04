import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How a Modular Kitchen Transforms Your Rohtak Home | Dinwood Blog",
  description:
    "Beyond aesthetics — how the right modular kitchen layout changes how you cook, clean and live. A practical guide for Rohtak and Haryana homeowners from Dinwood.",
  keywords:["modular kitchen Rohtak","kitchen design Haryana","best kitchen layout Indian home","modular kitchen guide"],
};

export default function BlogPost3() {
  return (
    <>
      <section className="pt-36 pb-10 max-w-3xl mx-auto px-5">
        <Link href="/blog" className="font-mono text-[10px] tracking-widest uppercase text-honey/50 hover:text-honey mb-8 inline-block">
          ← The Woodlog
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className="stamp">Kitchens</span>
          <span className="font-mono text-[10px] text-bark/35">6 min read · January 2025</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight mb-6">
          How a Modular Kitchen Transforms Your Rohtak Home
        </h1>
        <p className="font-body text-lg text-bark/55 leading-relaxed italic">
          Beyond aesthetics — the right kitchen layout changes how you cook, clean and spend time with family. A practical guide designed for Indian homes.
        </p>
      </section>

      <section className="pb-5 max-w-3xl mx-auto px-5">
        <div className="aspect-video bg-parch border border-straw/50 flex items-center justify-center rounded-sm mb-12">
          <span className="font-mono text-sm text-bark/20">[ Hero Image — Modular Kitchen ]</span>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-5 pb-16 space-y-8">
        <p className="font-body text-bark/65 leading-relaxed">
          Most kitchens in Rohtak homes were designed decades ago — open shelves, heavy granite slabs, no thought given to where things actually go. A modular kitchen isn&apos;t just about making it look nice on Instagram. It&apos;s about making your daily life measurably better.
        </p>

        <h2 className="font-display text-3xl font-bold text-bark">What &ldquo;modular&rdquo; actually means</h2>
        <p className="font-body text-bark/65 leading-relaxed">
          A modular kitchen is built from standardised cabinets — base units, wall units, and tall units — assembled together and finished with shutters, a countertop, and hardware. Because each module is consistent in quality and construction, the final kitchen is stronger, more functional, and more repairable than traditional built-in kitchens.
        </p>

        <h2 className="font-display text-3xl font-bold text-bark">Choosing the right layout for Indian cooking</h2>
        <p className="font-body text-bark/65 leading-relaxed">
          Indian cooking is intensive. We use more burners, more utensils, more spices, and more counter space than most international kitchen designs account for. The layout you choose needs to handle this reality.
        </p>
        <div className="bg-parch border border-straw/50 rounded-sm p-7 space-y-4">
          {[
            { layout:"L-Shape", desc:"Best for most Rohtak homes. Great workflow, good storage, fits medium-sized kitchens." },
            { layout:"U-Shape", desc:"Maximum counter space and storage. Ideal if you cook frequently with family." },
            { layout:"Parallel", desc:"Two facing walls. Extremely efficient for long, narrow kitchens." },
            { layout:"Straight", desc:"Single wall. Best for compact apartments where space is tight." },
          ].map((l) => (
            <div key={l.layout} className="flex gap-4">
              <div className="font-mono text-[10px] tracking-widest uppercase text-honey w-24 pt-1 shrink-0">{l.layout}</div>
              <p className="font-body text-sm text-bark/60">{l.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-3xl font-bold text-bark">The details that matter daily</h2>
        <p className="font-body text-bark/65 leading-relaxed">
          The quality of a modular kitchen shows in the small things: how smoothly a drawer glides under a full load of vessels, whether the hinges stay aligned after two years of heavy use, how well the countertop holds up to hot pots and vigorous chopping.
        </p>
        <p className="font-body text-bark/65 leading-relaxed">
          At Dinwood, we use premium 18mm BWR (Boiling Water Resistant) plywood for carcasses — not cheaper MR-grade ply — because Rohtak kitchens see real steam and heat. Our shutters use solid wood or high-pressure laminates, and we fit Hettich or Häfele hardware that lasts.
        </p>

        <h2 className="font-display text-3xl font-bold text-bark">What to expect when you visit us</h2>
        <p className="font-body text-bark/65 leading-relaxed">
          We start with your kitchen dimensions and your cooking habits — not a catalogue. From there we design a layout, show you material and colour options, and give you a clear quote before anything is built.
        </p>
        <p className="font-body text-bark/65 leading-relaxed">
          Most modular kitchens take 3–5 weeks from approval to installation. We handle everything in-house — no subcontracting — so quality stays consistent from start to finish.
        </p>

        <div className="mt-16 pt-10 border-t border-straw/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-widest uppercase text-honey/60 mb-2">Written by</p>
              <p className="font-display text-xl font-bold text-bark">The Dinwood Team</p>
              <p className="font-body text-sm text-bark/40">Rohtak, Haryana</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-honey text-bark text-[11px] font-mono tracking-widest uppercase hover:bg-soil hover:text-parch transition-colors rounded-sm">
              Book a Kitchen Consultation <ArrowRight size={12}/>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
