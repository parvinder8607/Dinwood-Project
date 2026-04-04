"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Custom Furniture",    href: "/services/custom-furniture" },
  { label: "Modular Kitchens",    href: "/services/modular-kitchens" },
  { label: "Wardrobes & Storage", href: "/services/wardrobes-storage" },
  { label: "Interior Woodwork",   href: "/services/interior-woodwork" },
  { label: "Office Furniture",    href: "/services/office-furniture" },
];

const navLinks = [
  { label: "Home",    href: "/" },
  { label: "About",   href: "/about" },
  { label: "Services", href: "/services", children: services },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog",    href: "/blog" },
  { label: "FAQ",     href: "/faq" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen,  setDropOpen]  = useState(false);
  const [mobServOpen, setMobServOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled
        ? "bg-linen/95 backdrop-blur-sm shadow-sm border-b border-straw/40 py-3"
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none select-none">
          <span className="font-display text-2xl font-bold tracking-wide text-bark">
            Dinwood
          </span>
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-honey/80">
            Wooden Interiors · Rohtak
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}
              >
                <button className="flex items-center gap-1 font-body text-sm text-bark/80 hover:text-honey transition-colors duration-300">
                  {link.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-300 ${dropOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-cream border border-straw/50 shadow-lg rounded-sm overflow-hidden transition-all duration-300 origin-top ${
                  dropOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"
                }`}>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setDropOpen(false)}
                      className="block px-5 py-3 text-[12px] font-body text-bark/70 hover:text-honey hover:bg-parch transition-colors border-b border-straw/20 last:border-0"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-sm text-bark/80 hover:text-honey link-underline transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-honey text-cream text-[11px] font-mono tracking-widest uppercase hover:bg-soil transition-colors duration-300 rounded-sm shadow-md"
        >
          Book Consultation
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden text-bark p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 bg-cream border-t border-straw/40 ${
        mobileOpen ? "max-h-screen" : "max-h-0"
      }`}>
        <div className="px-5 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children ? (
                <>
                  <button
                    className="flex items-center gap-2 font-body text-sm text-bark/80 w-full text-left"
                    onClick={() => setMobServOpen(!mobServOpen)}
                  >
                    {link.label}
                    <ChevronDown size={13} className={`transition-transform ${mobServOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobServOpen && (
                    <div className="mt-2 pl-4 border-l-2 border-straw flex flex-col gap-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-[12px] font-body text-bark/60 hover:text-honey"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-sm text-bark/80 hover:text-honey"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-5 py-3 bg-honey text-cream text-[11px] font-mono tracking-widest uppercase text-center rounded-sm"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
