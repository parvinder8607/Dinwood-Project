import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Dinwood | Book a Consultation in Rohtak, Haryana",
  description:
    "Visit Dinwood's showroom in Rohtak, Haryana to discuss your custom furniture, modular kitchen or interior woodwork project. WhatsApp, call, or walk in.",
  openGraph: {
    title: "Contact Dinwood | Wooden Interiors Showroom in Rohtak",
    description: "Book a consultation at Dinwood's Rohtak showroom. WhatsApp, call, email or walk in.",
  },
};

const contactMethods = [
  {
    icon: <MessageCircle size={22} className="text-honey" />,
    title: "WhatsApp",
    detail: "+91 XXXXX XXXXX",
    sub: "Fastest response — usually within an hour",
    href: "https://wa.me/91XXXXXXXXXX?text=Hi%20Dinwood%2C%20I%27d%20like%20to%20book%20a%20consultation",
    cta: "Chat Now",
    primary: true,
  },
  {
    icon: <Phone size={22} className="text-honey" />,
    title: "Phone Call",
    detail: "+91 XXXXX XXXXX",
    sub: "Mon–Sat · 10 AM – 7 PM",
    href: "tel:+91XXXXXXXXXX",
    cta: "Call Us",
    primary: false,
  },
  {
    icon: <Mail size={22} className="text-honey" />,
    title: "Email",
    detail: "hello@dinwood.in",
    sub: "We reply within 24 hours",
    href: "mailto:hello@dinwood.in",
    cta: "Send Email",
    primary: false,
  },
  {
    icon: <MapPin size={22} className="text-honey" />,
    title: "Walk In",
    detail: "Our Rohtak Showroom",
    sub: "Mon–Sat · 10 AM – 7 PM",
    href: "https://maps.google.com/?q=Rohtak+Haryana",
    cta: "Get Directions",
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 relative overflow-hidden"
        style={{ background:"linear-gradient(160deg,#2a1f10 0%,#3b2a1a 100%)" }}>
        <div className="max-w-5xl mx-auto px-5">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">Reach Out</p>
          <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.92] text-parch font-bold mb-5">
            Let&apos;s Talk<br /><em className="text-honey not-italic">Wood.</em>
          </h1>
          <p className="font-body text-parch/50 text-lg max-w-md leading-relaxed">
            Every great project starts with a conversation. Come see us in Rohtak, WhatsApp us, or send a message — we&apos;ll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactMethods.map((m) => (
            <a key={m.title} href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group flex flex-col p-8 border rounded-sm card-hover transition-all duration-300 ${
                m.primary
                  ? "bg-honey border-honey hover:bg-soil hover:border-soil"
                  : "bg-parch border-straw/60 hover:border-honey"
              }`}>
              <div className={`w-11 h-11 rounded-sm flex items-center justify-center mb-6 ${
                m.primary ? "bg-bark/20" : "bg-honey/10"
              }`}>
                {m.icon}
              </div>
              <h3 className={`font-display text-xl font-bold mb-1 ${m.primary ? "text-bark" : "text-bark"}`}>
                {m.title}
              </h3>
              <p className={`font-body text-sm font-medium mb-1 ${m.primary ? "text-bark" : "text-bark"}`}>
                {m.detail}
              </p>
              <p className={`font-mono text-[10px] tracking-wide mb-6 flex-1 ${m.primary ? "text-bark/60" : "text-bark/40"}`}>
                {m.sub}
              </p>
              <span className={`font-mono text-[11px] tracking-widest uppercase ${
                m.primary
                  ? "text-bark group-hover:text-honey transition-colors"
                  : "text-honey"
              }`}>
                {m.cta} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Map + info */}
      <section className="py-10 pb-28 max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Map placeholder */}
          <div className="bg-parch border border-straw/50 rounded-sm overflow-hidden">
            {/* Replace this div with actual Google Maps embed iframe */}
            <div className="aspect-video flex flex-col items-center justify-center gap-4 text-bark/30">
              <MapPin size={32} className="text-honey" />
              <p className="font-mono text-[11px] tracking-widest uppercase text-center">
                [ Google Maps embed goes here ]<br/>
                <span className="text-[9px]">Replace with &lt;iframe&gt; from Google Maps</span>
              </p>
            </div>
          </div>

          {/* Showroom info */}
          <div className="bg-parch border border-straw/50 rounded-sm p-10">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-6">Showroom Info</p>
            <h2 className="font-display text-3xl font-bold text-bark mb-8">
              Visit Us in Rohtak
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-honey/10 rounded-sm flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-honey" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-bark/40 mb-1">Address</p>
                  <p className="font-body text-bark/70">
                    Your Street Address,<br/>
                    Rohtak, Haryana — 124001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-honey/10 rounded-sm flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-honey" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-bark/40 mb-1">Opening Hours</p>
                  <div className="font-body text-bark/70 text-sm space-y-1">
                    <p>Monday – Saturday: 10:00 AM – 7:00 PM</p>
                    <p className="text-bark/40">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-honey/10 rounded-sm flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-honey" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-bark/40 mb-1">Phone & WhatsApp</p>
                  <a href="tel:+91XXXXXXXXXX" className="font-body text-bark/70 hover:text-honey transition-colors">
                    +91 XXXXX XXXXX
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-honey/10 rounded-sm flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-honey" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-bark/40 mb-1">Email</p>
                  <a href="mailto:hello@dinwood.in" className="font-body text-bark/70 hover:text-honey transition-colors">
                    hello@dinwood.in
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 bg-linen border border-straw/50 rounded-sm">
              <p className="font-mono text-[10px] tracking-widest uppercase text-honey mb-2">Pro Tip</p>
              <p className="font-body text-sm text-bark/55 leading-relaxed">
                WhatsApp is the fastest way to reach us. Send a message describing your project and we&apos;ll schedule a showroom visit at your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-14 bg-parch border-t border-straw/50">
        <div className="max-w-7xl mx-auto px-5">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-4 text-center">We Serve</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Rohtak","Bahadurgarh","Hisar","Panipat","Jhajjar","Bhiwani","Sonipat","Gurgaon","Delhi NCR"].map((city) => (
              <span key={city}
                className="px-5 py-2 border border-straw font-mono text-[10px] tracking-widest uppercase text-bark/50 rounded-sm bg-linen">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
