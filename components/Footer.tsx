import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

const services = [
  { label: "Custom Furniture",    href: "/services/custom-furniture" },
  { label: "Modular Kitchens",    href: "/services/modular-kitchens" },
  { label: "Wardrobes & Storage", href: "/services/wardrobes-storage" },
  { label: "Interior Woodwork",   href: "/services/interior-woodwork" },
  { label: "Office Furniture",    href: "/services/office-furniture" },
];

export default function Footer() {
  return (
    <footer className="bg-bark text-parch">
      {/* Top band */}
      <div className="border-b border-soil">
        <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div>
            <div className="mb-5">
              <span className="font-display text-3xl font-bold text-straw block">Dinwood</span>
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-honey/70">
                Wooden Interiors · Rohtak
              </span>
            </div>
            <p className="font-body text-sm text-parch/60 leading-relaxed mb-6">
              Crafting timeless wooden spaces for homes and offices across Rohtak and Haryana. Every piece, made with care.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com/dinwood" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-soil flex items-center justify-center text-parch/40 hover:text-honey hover:border-honey transition-colors duration-300" aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href="https://wa.me/919813352801" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 border border-soil flex items-center justify-center text-parch/40 hover:text-honey hover:border-honey transition-colors duration-300" aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.549 4.103 1.508 5.831L0 24l6.335-1.484A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.773 9.773 0 01-5.037-1.396l-.361-.215-3.762.882.924-3.647-.235-.374A9.786 9.786 0 012.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">Navigate</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home",    href: "/" },
                { label: "About",   href: "/about" },
                { label: "Gallery", href: "/gallery" },
                { label: "Blog",    href: "/blog" },
                { label: "FAQ",     href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-body text-sm text-parch/55 hover:text-honey transition-colors duration-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="font-body text-sm text-parch/55 hover:text-honey transition-colors duration-300">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">Visit Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm font-body text-parch/55">
                <MapPin size={14} className="text-honey mt-0.5 shrink-0" />
                <span>Your Address, Rohtak,<br />Haryana — 124001</span>
              </li>
              <li className="flex items-center gap-3 text-sm font-body text-parch/55">
                <Phone size={14} className="text-honey shrink-0" />
                <a href="tel:+919813352801" className="hover:text-honey transition-colors">+91 98133 52801</a>
              </li>
              <li className="flex items-center gap-3 text-sm font-body text-parch/55">
                <Mail size={14} className="text-honey shrink-0" />
                <a href="mailto:info@dinwood.in" className="hover:text-honey transition-colors">info@dinwood.in</a>
              </li>
              <li className="flex items-center gap-3 text-sm font-body text-parch/55">
                <Clock size={14} className="text-honey shrink-0" />
                <span>Mon–Sat · 10 AM – 7 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[10px] tracking-widest text-parch/25 uppercase">
          © {new Date().getFullYear()} Dinwood · Rohtak, Haryana · All Rights Reserved
        </p>
        <p className="font-mono text-[10px] tracking-widest text-parch/25 uppercase">
          Handcrafted in India 🪵
        </p>
      </div>
    </footer>
  );
}
