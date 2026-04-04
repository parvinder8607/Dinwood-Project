import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Dinwood Rohtak — Wooden Furniture & Interior Questions Answered",
  description:
    "Common questions about Dinwood's custom furniture, modular kitchens, wardrobes and interior woodwork in Rohtak, Haryana — pricing, process, timelines and more.",
};

const faqs = [
  {
    category: "Getting Started",
    items: [
      {
        q: "Do you sell furniture online or through a catalogue?",
        a: "No — and that's intentional. Every Dinwood project starts with a personal meeting at our Rohtak showroom. Wood is a material you need to see and touch, and your space is unique. We don't believe catalogue furniture serves you as well as a real conversation."
      },
      {
        q: "How do I begin a project with Dinwood?",
        a: "Simply visit our Rohtak showroom (Mon–Sat, 10 AM–7 PM), WhatsApp us, or give us a call. We'll discuss your requirements, visit your site if needed, and prepare a design and quote — all before any commitment from you."
      },
      {
        q: "Do you visit my home for measurements?",
        a: "Yes. For all projects, our team visits your home in Rohtak or nearby to take precise measurements before designing or building anything. This is included at no extra charge."
      },
    ]
  },
  {
    category: "Pricing & Timelines",
    items: [
      {
        q: "How much does custom furniture cost?",
        a: "It varies significantly based on wood species, size, design complexity and finish. As a rough guide: a solid sheesham dining table starts around ₹18,000–30,000; a custom wardrobe from ₹25,000 upwards; a modular kitchen from ₹1.5L upwards. We provide exact quotes after your site visit."
      },
      {
        q: "How long does it take to build and install?",
        a: "Custom furniture pieces typically take 2–4 weeks. Modular kitchens take 3–6 weeks. Interior woodwork projects (paneling, flooring) vary by scope but usually 1–3 weeks. We always give you a clear timeline in writing before we begin."
      },
      {
        q: "Do you require an advance payment?",
        a: "Yes. We typically require 50% advance to begin work, with the balance due before installation. For large projects we can discuss a milestone-based payment schedule."
      },
    ]
  },
  {
    category: "Materials & Quality",
    items: [
      {
        q: "What types of wood do you use?",
        a: "We work with solid sheesham (Indian Rosewood), teak, walnut, mango wood, and premium engineered ply for carcasses. We show you actual material samples at the showroom so you can make an informed choice based on budget and aesthetics."
      },
      {
        q: "Is MDF / engineered wood inferior to solid wood?",
        a: "Not necessarily — it depends on the application. Premium 18mm BWR ply is excellent for modular kitchen and wardrobe carcasses. Solid wood is best for furniture surfaces, table tops and doors. We use the right material for each part of the project."
      },
      {
        q: "Do you offer any warranty?",
        a: "Yes. We provide a 1-year warranty on workmanship for all projects, and pass on manufacturer warranties on hardware (hinges, channels, etc.). Solid wood furniture, if maintained properly, will last decades without issues."
      },
    ]
  },
  {
    category: "Delivery & Service Area",
    items: [
      {
        q: "Do you work outside Rohtak?",
        a: "Yes — we regularly work across Haryana including Bahadurgarh, Hisar, Panipat, Jhajjar, Bhiwani, Sonipat and nearby areas. Transport and installation costs may apply for distant locations. Contact us to confirm."
      },
      {
        q: "Do you handle installation?",
        a: "Absolutely. All Dinwood projects include professional installation by our own team — not subcontracted labour. We don't leave until you're completely satisfied with the result."
      },
      {
        q: "What if something needs to be fixed after installation?",
        a: "Call or WhatsApp us. We take post-installation support seriously. Minor adjustments are handled promptly at no charge within the warranty period."
      },
    ]
  },
];

// FAQPage JSON-LD
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap(cat =>
    cat.items.map(item => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  )
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-36 pb-16 max-w-5xl mx-auto px-5">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">Questions Answered</p>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.92] text-bark font-bold mb-4">
          FAQ
        </h1>
        <p className="font-body text-bark/50 max-w-md text-sm leading-relaxed">
          Everything you might want to know about working with Dinwood in Rohtak. Still have a question? Just ask.
        </p>
      </section>

      <section className="pb-28 max-w-5xl mx-auto px-5">
        {faqs.map((cat) => (
          <div key={cat.category} className="mb-14">
            <div className="divider mb-8">
              <span className="font-mono text-[10px] tracking-widest uppercase text-honey/80 shrink-0">{cat.category}</span>
            </div>

            <div className="space-y-4">
              {cat.items.map((item) => (
                <details key={item.q}
                  className="group border border-straw/50 bg-parch rounded-sm overflow-hidden">
                  <summary className="flex items-start justify-between gap-4 p-7 cursor-pointer list-none hover:bg-linen transition-colors">
                    <h2 className="font-display text-lg md:text-xl font-bold text-bark group-open:text-honey transition-colors">
                      {item.q}
                    </h2>
                    <span className="text-honey text-xl shrink-0 mt-0.5 font-light group-open:rotate-45 transition-transform duration-300">+</span>
                  </summary>
                  <div className="px-7 pb-7 border-t border-straw/30">
                    <p className="font-body text-bark/60 leading-relaxed text-sm pt-5">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Still have questions CTA */}
      <section className="py-20 bg-soil">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-parch mb-4">
            Still have a <em className="text-honey not-italic">question?</em>
          </h2>
          <p className="font-body text-parch/50 mb-8 leading-relaxed">
            The fastest way to get an answer is to WhatsApp us or come visit our Rohtak showroom.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 bg-honey text-bark text-[12px] font-mono tracking-widest uppercase hover:bg-straw transition-colors rounded-sm flex items-center gap-2">
              Contact Us <ArrowRight size={14}/>
            </Link>
            <a href="https://wa.me/919813352801" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 border border-parch/25 text-parch text-[12px] font-mono tracking-widest uppercase hover:border-honey/50 hover:text-honey transition-all rounded-sm">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
