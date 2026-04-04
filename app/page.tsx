"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Hammer, ChevronDown, Star } from "lucide-react";

const services = [
  { icon: "🪑", title: "Custom Furniture",    desc: "Handcrafted tables, chairs, beds & bespoke pieces built exactly to your vision and space.",      href: "/services/custom-furniture",    tag: "Most Popular" },
  { icon: "🍳", title: "Modular Kitchens",    desc: "Functional, beautiful kitchen layouts in solid wood and high-grade ply — made for Indian cooking.", href: "/services/modular-kitchens",    tag: "" },
  { icon: "🚪", title: "Wardrobes & Storage", desc: "Floor-to-ceiling built-ins and walk-in closets that make every centimetre count.",                  href: "/services/wardrobes-storage",   tag: "" },
  { icon: "🪵", title: "Interior Woodwork",   desc: "Wall paneling, wooden flooring, ceilings and millwork that transform the bones of a room.",         href: "/services/interior-woodwork",   tag: "" },
  { icon: "💼", title: "Office Furniture",    desc: "Solid, professional workstations, cabinets and reception desks built for Rohtak businesses.",        href: "/services/office-furniture",    tag: "" },
];

const process = [
  { n: "01", title: "Visit & Discuss",  desc: "Come to our Rohtak showroom. We sit down, listen, and understand your space and style." },
  { n: "02", title: "Design & Plan",   desc: "Our team proposes a design — materials, finishes, dimensions. We revise until it's right." },
  { n: "03", title: "Craft in Workshop", desc: "Every piece is handbuilt in our local workshop by skilled craftsmen using quality wood." },
  { n: "04", title: "Install & Hand Over", desc: "We install with care and don't leave until you're completely satisfied." },
];

const testimonials = [
  { name: "Aakash Verma", loc: "Rohtak", stars: 5, text: "Dinwood built our entire modular kitchen from scratch. The quality is outstanding — solid sheesham, perfect finish. Highly recommended in Rohtak." },
  { name: "Priya Sharma", loc: "Rohtak", stars: 5, text: "Got a custom wardrobe made for our master bedroom. Fits perfectly and looks beautiful. The team was patient and professional throughout." },
  { name: "Rajesh Malik", loc: "Bahadurgarh", stars: 5, text: "Office furniture done in record time. Workstations, cabinets, reception counter — all top quality. Will definitely use Dinwood again." },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Hero entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".h-tag",   { opacity:0, y:20 }, { opacity:1, y:0, duration:0.8 })
        .fromTo(".h-title", { opacity:0, y:60 }, { opacity:1, y:0, duration:1.1 }, "-=0.5")
        .fromTo(".h-sub",   { opacity:0, y:25 }, { opacity:1, y:0, duration:0.8 }, "-=0.5")
        .fromTo(".h-cta",   { opacity:0, y:20 }, { opacity:1, y:0, duration:0.7 }, "-=0.4")
        .fromTo(".h-scroll",{ opacity:0 },        { opacity:1, duration:0.5 },     "-=0.2");

      // Scroll-triggered sections
      const fadeUp = (sel: string, trigger: string) =>
        gsap.fromTo(sel, { opacity:0, y:45 }, { opacity:1, y:0, duration:0.7, stagger:0.15,
          scrollTrigger: { trigger, start:"top 78%" } });

      fadeUp(".stat-item", ".stats-row");
      fadeUp(".service-card", ".services-grid");
      fadeUp(".process-card", ".process-row");
      fadeUp(".testimonial-card", ".testimonials-row");
    })();
  }, []);

  return (
    <>
      {/* ───── HERO ───── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grain"
        style={{ background: "linear-gradient(160deg,#2a1f10 0%,#3b2a1a 45%,#4a3520 100%)" }}
      >
        {/* wood rings decorative */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[600,800,1000,1200].map((s,i)=>(
            <div key={s} className="absolute rounded-full border border-honey/5"
              style={{ width:s, height:s, top:"50%", left:"50%",
                       transform:`translate(-50%,-50%)`, animationDelay:`${i*0.5}s` }} />
          ))}
          {/* warm light bleed */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-honey/8 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">
          <div className="h-tag opacity-0 inline-flex items-center gap-2 mb-8">
            <span className="stamp text-honey border-honey/50">Rohtak, Haryana</span>
            <span className="font-mono text-[10px] text-honey/50 tracking-widest uppercase">Est. since years</span>
          </div>

          <h1 className="h-title opacity-0 font-display text-[clamp(3.2rem,10vw,8.5rem)] leading-[0.92] text-parch mb-7">
            Wood that<br />
            <em className="text-honey not-italic">tells your story.</em>
          </h1>

          <p className="h-sub opacity-0 font-body text-lg text-parch/55 max-w-xl mx-auto leading-relaxed mb-10">
            Bespoke wooden interiors, custom furniture, modular kitchens and more — handcrafted in Rohtak for homes and offices across Haryana.
          </p>

          <div className="h-cta opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/gallery" className="px-8 py-4 bg-honey text-bark text-[12px] font-mono tracking-widest uppercase hover:bg-straw transition-colors duration-300 flex items-center gap-2 rounded-sm shadow-lg">
              See Our Work <ArrowRight size={14}/>
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-parch/25 text-parch text-[12px] font-mono tracking-widest uppercase hover:border-honey/60 hover:text-honey transition-all duration-300 rounded-sm">
              Book Showroom Visit
            </Link>
          </div>
        </div>

        <div className="h-scroll opacity-0 absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-parch/25">Scroll</span>
          <ChevronDown size={15} className="text-honey animate-bounce" />
        </div>

        {/* Decorative vertical text */}
        <span className="hidden lg:block absolute right-7 top-1/2 -translate-y-1/2 font-mono text-[9px] tracking-[0.28em] uppercase text-parch/18 rotate-90 whitespace-nowrap select-none">
          Premium Woodcraft · Rohtak Haryana
        </span>
      </section>

      {/* ───── STATS ───── */}
      <section className="stats-row py-14 bg-soil border-y border-bark/40">
        <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { v:"200+",   l:"Projects Done" },
            { v:"8+",     l:"Years of Craft" },
            { v:"5",      l:"Service Types" },
            { v:"Rohtak", l:"Home & Proud" },
          ].map((s) => (
            <div key={s.l} className="stat-item text-center opacity-0">
              <div className="font-display text-4xl md:text-5xl font-bold text-straw mb-1">{s.v}</div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-honey/60">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section className="py-24 max-w-7xl mx-auto px-5">
        <div className="mb-14 text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-3">What We Craft</p>
          <h2 className="font-display text-5xl md:text-6xl text-bark font-bold mb-4">Our Services</h2>
          <p className="font-body text-bark/55 max-w-md mx-auto text-sm leading-relaxed">
            Every service tailored to your space. No catalogues, no shortcuts — all work begins with a visit to our Rohtak showroom.
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link key={s.href} href={s.href}
              className="service-card opacity-0 group relative bg-parch border border-straw/60 p-8 rounded-sm hover:border-honey hover:shadow-lg card-hover transition-all duration-300 overflow-hidden">
              {s.tag && (
                <span className="absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase text-honey border border-honey/40 px-2 py-0.5">
                  {s.tag}
                </span>
              )}
              {/* wood grain bg */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background:"linear-gradient(135deg,rgba(201,137,58,0.06) 0%,transparent 70%)" }} />
              <div className="text-3xl mb-5">{s.icon}</div>
              <h3 className="font-display text-2xl font-bold text-bark mb-3 group-hover:text-honey transition-colors duration-300">{s.title}</h3>
              <p className="font-body text-sm text-bark/55 leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-honey">
                Learn More <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform duration-300"/>
              </div>
            </Link>
          ))}
          {/* CTA card */}
          <Link href="/contact"
            className="service-card opacity-0 group relative bg-honey p-8 rounded-sm hover:bg-soil card-hover transition-all duration-300 flex flex-col justify-between">
            <div>
              <Hammer size={28} className="text-bark mb-5"/>
              <h3 className="font-display text-2xl font-bold text-bark group-hover:text-parch transition-colors mb-3">Have a custom project?</h3>
              <p className="font-body text-sm text-bark/70 group-hover:text-parch/70 transition-colors leading-relaxed">
                Not on the list? We take on unique woodwork challenges. Come talk to us in Rohtak.
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-bark group-hover:text-parch mt-8 transition-colors">
              Book a Visit <ArrowRight size={12}/>
            </div>
          </Link>
        </div>
      </section>

      {/* ───── ABOUT TEASER ───── */}
      <section className="py-24 bg-parch border-y border-straw/50">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-bark/15 border border-straw flex items-center justify-center rounded-sm overflow-hidden">
              <div className="text-center text-bark/20">
                <div className="text-5xl mb-3">🪵</div>
                <span className="font-mono text-xs">[ Workshop Photo ]</span>
              </div>
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-honey text-bark px-6 py-4 shadow-xl rounded-sm">
              <div className="font-display text-3xl font-bold">8+</div>
              <div className="font-mono text-[9px] tracking-widest uppercase">Years Crafting</div>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">About Dinwood</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-bark leading-tight mb-5">
              Rohtak&apos;s trusted<br /><em className="text-honey not-italic">wood atelier</em>
            </h2>
            <p className="font-body text-bark/60 leading-relaxed mb-4">
              Dinwood was born from a love of honest materials and enduring craft. Based in Rohtak, Haryana, we combine traditional woodworking with thoughtful contemporary design — building spaces that feel genuinely yours.
            </p>
            <p className="font-body text-bark/60 leading-relaxed mb-8">
              We don&apos;t sell online. Every project begins with a face-to-face conversation, because great woodwork starts with truly understanding the people it&apos;s built for.
            </p>
            <Link href="/about" className="inline-flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-honey border-b border-honey/40 pb-1 hover:border-honey transition-colors">
              Our Story <ArrowRight size={12}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── PROCESS ───── */}
      <section className="py-24 max-w-7xl mx-auto px-5">
        <div className="mb-14 text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-3">How It Works</p>
          <h2 className="font-display text-5xl font-bold text-bark">The Dinwood Process</h2>
        </div>
        <div className="process-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <div key={p.n} className="process-card opacity-0 relative p-8 bg-parch border border-straw/60 rounded-sm">
              {i < process.length-1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-straw/40 z-0" />
              )}
              <span className="font-mono text-[11px] tracking-widest text-honey/50 block mb-4">{p.n}</span>
              <div className="w-8 h-8 border-2 border-honey rounded-full flex items-center justify-center mb-5">
                <div className="w-2.5 h-2.5 bg-honey rounded-full" />
              </div>
              <h3 className="font-display text-xl font-bold text-bark mb-3">{p.title}</h3>
              <p className="font-body text-sm text-bark/55 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="py-24 bg-soil">
        <div className="max-w-7xl mx-auto px-5">
          <div className="mb-14 text-center">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-3">What Clients Say</p>
            <h2 className="font-display text-5xl font-bold text-parch">Happy Homes</h2>
          </div>
          <div className="testimonials-row grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card opacity-0 bg-bark/40 border border-honey/15 p-8 rounded-sm">
                <div className="flex gap-1 mb-5">
                  {Array.from({length:t.stars}).map((_,i) => (
                    <Star key={i} size={13} className="text-honey fill-honey" />
                  ))}
                </div>
                <p className="font-body text-sm text-parch/70 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-display text-base font-bold text-straw">{t.name}</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-honey/50">{t.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── CTA BANNER ───── */}
      <section className="py-28 relative overflow-hidden"
        style={{ background:"linear-gradient(135deg,#3b2a1a 0%,#5c3d1e 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-honey/10 blur-[80px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-4">Ready to Begin?</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-parch mb-4 leading-tight">
            Let&apos;s build something<br />
            <em className="text-honey not-italic">beautiful together.</em>
          </h2>
          <p className="font-body text-parch/50 mb-10 max-w-md mx-auto leading-relaxed">
            Visit our showroom in Rohtak, WhatsApp us, or give us a call. No pressure, just a good conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-honey text-bark text-[12px] font-mono tracking-widest uppercase hover:bg-straw transition-colors duration-300 flex items-center gap-2 rounded-sm shadow-lg">
              Book a Consultation <ArrowRight size={14}/>
            </Link>
            <a href="https://wa.me/919813352801?text=Hi%20Dinwood!" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border border-parch/20 text-parch text-[12px] font-mono tracking-widest uppercase hover:border-honey/50 hover:text-honey transition-all duration-300 rounded-sm flex items-center gap-2">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
