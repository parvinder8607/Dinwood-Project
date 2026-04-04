import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, Hammer, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Dinwood | Rohtak's Premier Woodcraft Studio",
  description:
    "Learn about Dinwood — Rohtak's trusted wood atelier. We craft bespoke furniture and wooden interiors with traditional skill and contemporary vision across Haryana.",
  openGraph: {
    title: "About Dinwood | Woodcraft Studio in Rohtak, Haryana",
    description: "Our story, values, and the people behind Rohtak's favourite wooden interior studio.",
  },
};

const values = [
  {
    icon: <Leaf size={22} className="text-honey" />,
    title: "Honest Materials",
    desc: "Solid sheesham, teak, walnut and premium ply — no substitutes, no shortcuts. We use wood that lasts generations.",
  },
  {
    icon: <Hammer size={22} className="text-honey" />,
    title: "Handcrafted Always",
    desc: "Every piece is hand-built in our Rohtak workshop. No factory lines. Real craftsmen who take pride in their work.",
  },
  {
    icon: <Users size={22} className="text-honey" />,
    title: "Relationship First",
    desc: "We don't sell online. Every project starts with meeting you — because your home deserves that personal care.",
  },
  {
    icon: <MapPin size={22} className="text-honey" />,
    title: "Proudly Local",
    desc: "Born in Rohtak, serving Haryana. We employ local craftsmen and take pride in our roots and community.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden"
        style={{ background:"linear-gradient(160deg,#2a1f10 0%,#3b2a1a 100%)" }}>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linen" style={{ clipPath:"ellipse(55% 100% at 50% 100%)" }} />
        <div className="relative max-w-5xl mx-auto px-5 text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">Our Story</p>
          <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] text-parch font-bold mb-6">
            Crafted in<br /><em className="text-honey not-italic">Rohtak.</em>
          </h1>
          <p className="font-body text-parch/55 text-lg max-w-xl mx-auto leading-relaxed">
            A family of craftsmen dedicated to turning raw wood into spaces that feel like home.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 items-center">
          <div className="md:col-span-6 relative">
            <div className="aspect-[3/4] bg-parch border border-straw flex items-center justify-center rounded-sm overflow-hidden">
              <div className="text-center text-bark/20">
                <div className="text-6xl mb-3">🏭</div>
                <span className="font-mono text-xs">[ Workshop Interior Photo ]</span>
              </div>
            </div>
            {/* accent block */}
            <div className="absolute -bottom-6 -right-6 bg-honey/15 border border-honey/30 p-6 w-44 hidden md:block">
              <div className="font-display text-4xl font-bold text-bark">200+</div>
              <div className="font-mono text-[9px] tracking-widest uppercase text-honey/70">Projects<br/>Completed</div>
            </div>
          </div>

          <div className="md:col-span-6">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">Who We Are</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight mb-6">
              From Rohtak,<br /><em className="text-honey not-italic">for Haryana</em>
            </h2>
            <p className="font-body text-bark/60 leading-relaxed mb-5">
              Dinwood was born from a simple belief — that the spaces we live in shape who we are. Our founder started with a small workshop in Rohtak, a handful of tools, and a deep respect for wood as a material.
            </p>
            <p className="font-body text-bark/60 leading-relaxed mb-5">
              Over the years, we&apos;ve grown into a full-service woodcraft studio without losing what makes us special: personal attention, local craftsmanship, and an absolute commitment to quality.
            </p>
            <p className="font-body text-bark/60 leading-relaxed mb-8">
              We serve Rohtak, Bahadurgarh, Hisar, Panipat and across Haryana — always starting with a visit, always ending with a handshake.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-honey text-bark text-[11px] font-mono tracking-widest uppercase hover:bg-soil hover:text-parch transition-colors duration-300 rounded-sm">
              Visit Our Showroom <ArrowRight size={13}/>
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-parch border-y border-straw/50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-14 text-center">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-3">What We Believe</p>
            <h2 className="font-display text-5xl font-bold text-bark">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-linen border border-straw/60 p-8 rounded-sm card-hover">
                <div className="w-10 h-10 bg-honey/10 flex items-center justify-center mb-6 rounded-sm">{v.icon}</div>
                <h3 className="font-display text-xl font-bold text-bark mb-3">{v.title}</h3>
                <p className="font-body text-sm text-bark/55 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="py-24 max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-3">See the Craft</p>
          <h2 className="font-display text-5xl font-bold text-bark mb-4">Our Work</h2>
          <p className="font-body text-bark/55 max-w-md mx-auto text-sm leading-relaxed">
            Browse projects we&apos;ve completed across Rohtak and Haryana.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {Array.from({length:6}).map((_,i) => (
            <div key={i} className={`bg-parch border border-straw/50 flex items-center justify-center ${i===0?"md:col-span-2 aspect-video":"aspect-square"}`}>
              <span className="font-mono text-[10px] text-bark/20">[ Photo {i+1} ]</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/gallery" className="inline-flex items-center gap-3 px-8 py-4 border border-honey/50 text-honey text-[11px] font-mono tracking-widest uppercase hover:bg-honey hover:text-bark transition-all duration-300 rounded-sm">
            View Full Gallery <ArrowRight size={13}/>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-soil">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-parch mb-4">
            Come meet us <em className="text-honey not-italic">in Rohtak</em>
          </h2>
          <p className="font-body text-parch/50 mb-8 leading-relaxed">
            Our showroom is open Monday through Saturday. Walk in, feel the wood, meet the craftsmen.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-honey text-bark text-[12px] font-mono tracking-widest uppercase hover:bg-straw transition-colors duration-300 rounded-sm shadow-lg">
            Get Directions <ArrowRight size={14}/>
          </Link>
        </div>
      </section>
    </>
  );
}
