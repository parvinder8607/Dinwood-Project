import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Woodwork Portfolio & Gallery | Dinwood Projects in Rohtak & Haryana",
  description:
    "Browse Dinwood's portfolio of custom furniture, modular kitchens, wardrobes and interior woodwork projects completed across Rohtak and Haryana.",
  openGraph: {
    title: "Dinwood Gallery | Woodcraft Projects in Rohtak, Haryana",
    description: "See our custom furniture, kitchens, wardrobes and interior woodwork — all handcrafted in Rohtak.",
  },
};

const categories = ["All", "Furniture", "Kitchens", "Wardrobes", "Interiors", "Office"];

const projects = [
  { id:1,  title:"Sheesham Dining Table",          cat:"Furniture",  loc:"Rohtak",       span:"col-span-2" },
  { id:2,  title:"L-Shape Modular Kitchen",        cat:"Kitchens",   loc:"Rohtak",       span:"col-span-1" },
  { id:3,  title:"Floor-to-Ceiling Wardrobe",      cat:"Wardrobes",  loc:"Rohtak",       span:"col-span-1" },
  { id:4,  title:"Walnut Wall Paneling",           cat:"Interiors",  loc:"Hisar",        span:"col-span-1" },
  { id:5,  title:"Executive Office Desk",          cat:"Office",     loc:"Rohtak",       span:"col-span-2" },
  { id:6,  title:"Custom Storage Bed",             cat:"Furniture",  loc:"Bahadurgarh",  span:"col-span-1" },
  { id:7,  title:"Walk-in Wardrobe with Lighting", cat:"Wardrobes",  loc:"Rohtak",       span:"col-span-2" },
  { id:8,  title:"Herringbone Oak Flooring",       cat:"Interiors",  loc:"Panipat",      span:"col-span-1" },
  { id:9,  title:"U-Shape Modular Kitchen",        cat:"Kitchens",   loc:"Rohtak",       span:"col-span-1" },
  { id:10, title:"Reception Counter & Cabin",      cat:"Office",     loc:"Rohtak",       span:"col-span-1" },
  { id:11, title:"Teak Study + Bookshelf Set",     cat:"Furniture",  loc:"Rohtak",       span:"col-span-1" },
  { id:12, title:"Coffered Ceiling Woodwork",      cat:"Interiors",  loc:"Rohtak",       span:"col-span-2" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-5">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">Our Portfolio</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-4">
          <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.92] text-bark font-bold">Gallery</h1>
          <p className="font-body text-bark/50 max-w-xs text-sm leading-relaxed">
            Projects completed across Rohtak, Bahadurgarh, Hisar, Panipat and Haryana.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="max-w-7xl mx-auto px-5 mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, i) => (
            <button key={cat}
              className={`px-5 py-2 font-mono text-[10px] tracking-widest uppercase border rounded-sm transition-all duration-300 ${
                i === 0
                  ? "bg-honey text-bark border-honey"
                  : "border-straw text-bark/50 hover:border-honey hover:text-honey bg-transparent"
              }`}>
              {cat}
            </button>
          ))}
        </div>
        <p className="font-mono text-[9px] tracking-widest uppercase text-bark/30 mt-3">
          Showing {projects.length} projects — filters are functional when connected to a CMS
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-5 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {projects.map((p) => (
            <div key={p.id}
              className={`group relative bg-parch border border-straw/50 overflow-hidden cursor-pointer card-hover rounded-sm ${p.span === "col-span-2" ? "md:col-span-2" : ""}`}>
              <div className={`flex items-center justify-center ${p.span === "col-span-2" ? "aspect-[16/7]" : "aspect-square"}`}>
                <div className="text-center text-bark/20">
                  <div className="text-3xl mb-2">🪵</div>
                  <span className="font-mono text-[10px]">[ {p.title} ]</span>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bark/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-7">
                <span className="font-mono text-[9px] tracking-widest uppercase text-honey mb-2">
                  {p.cat} · {p.loc}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-parch font-bold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-soil">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-4">Like What You See?</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-parch mb-4">
            Let&apos;s build something <em className="text-honey not-italic">yours</em>
          </h2>
          <p className="font-body text-parch/50 mb-8 leading-relaxed">
            Every project in this gallery started with a conversation in Rohtak. Yours can too.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-honey text-bark text-[12px] font-mono tracking-widest uppercase hover:bg-straw transition-colors rounded-sm shadow-lg">
            Book Consultation <ArrowRight size={14}/>
          </Link>
        </div>
      </section>
    </>
  );
}
