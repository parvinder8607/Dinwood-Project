import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

interface ServicePageProps {
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string[];
  features: string[];
  subServices: { name: string; desc: string }[];
  ctaText: string;
}

export default function ServicePageTemplate({
  number, title, subtitle, tagline, description, features, subServices, ctaText
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 relative overflow-hidden"
        style={{ background:"linear-gradient(160deg,#2a1f10 0%,#3b2a1a 100%)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <Link href="/services" className="font-mono text-[10px] tracking-widest uppercase text-honey/50 hover:text-honey transition-colors mb-8 inline-block">
            ← All Services
          </Link>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-4">Service {number}</p>
          <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.92] text-parch font-bold mb-4">
            {title}
          </h1>
          <p className="font-mono text-[10px] tracking-widest uppercase text-parch/30 mb-6">{subtitle}</p>
          <p className="font-body text-parch/55 text-lg max-w-xl leading-relaxed">{tagline}</p>
        </div>
      </section>

      {/* Hero image */}
      <section className="max-w-7xl mx-auto px-5 -mt-0 mb-20 pt-10">
        <div className="aspect-video bg-parch border border-straw/50 flex items-center justify-center rounded-sm">
          <span className="font-mono text-sm text-bark/20">[ {title} Project Photo ]</span>
        </div>
      </section>

      {/* Description + features */}
      <section className="pb-24 max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">The Detail</p>
          {description.map((p, i) => (
            <p key={i} className="font-body text-bark/60 leading-relaxed mb-4">{p}</p>
          ))}
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">What&apos;s Included</p>
          <ul className="flex flex-col gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check size={14} className="text-honey mt-0.5 shrink-0" />
                <span className="font-body text-sm text-bark/60">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sub-services */}
      <section className="py-20 bg-parch border-y border-straw/50">
        <div className="max-w-7xl mx-auto px-5">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-10">Types We Build</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subServices.map((s) => (
              <div key={s.name} className="bg-linen border border-straw/60 p-7 rounded-sm card-hover">
                <div className="w-6 h-0.5 bg-honey mb-5" />
                <h3 className="font-display text-xl font-bold text-bark mb-2">{s.name}</h3>
                <p className="font-body text-sm text-bark/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-3xl mx-auto px-5 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-bark mb-4">
          {ctaText}
        </h2>
        <p className="font-body text-bark/55 mb-10 leading-relaxed">
          Visit our showroom in Rohtak — bring a sketch, a photo, or just an idea. We&apos;ll take it from there.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="px-8 py-4 bg-honey text-bark text-[12px] font-mono tracking-widest uppercase hover:bg-soil hover:text-parch transition-colors duration-300 flex items-center gap-2 rounded-sm shadow-md">
            Book Consultation <ArrowRight size={14}/>
          </Link>
          <Link href="/gallery" className="px-8 py-4 border border-honey/40 text-honey text-[12px] font-mono tracking-widest uppercase hover:bg-honey/10 transition-colors duration-300 rounded-sm">
            See Gallery
          </Link>
        </div>
      </section>
    </>
  );
}
