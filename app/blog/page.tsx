import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Woodwork & Interior Design Blog | Dinwood Rohtak",
  description:
    "Expert tips on custom furniture, modular kitchens, wooden interiors and home design from Dinwood — Rohtak's trusted woodcraft studio.",
};

const posts = [
  {
    slug: "craft-of-custom-furniture",
    title: "Why Custom Furniture Always Beats Ready-Made",
    excerpt: "Ready-made furniture fills a room. Custom furniture defines it. Here's the real cost comparison — and why Rohtak families are choosing bespoke.",
    category: "Furniture",
    readTime: "5 min",
    date: "March 2025",
    emoji: "🪑",
  },
  {
    slug: "why-sheesham-wood",
    title: "Sheesham vs Teak vs MDF: Which Wood is Right for Your Home?",
    excerpt: "With Haryana's climate and lifestyle in mind — a practical, honest guide to choosing the right wood species for furniture and interiors.",
    category: "Guide",
    readTime: "7 min",
    date: "February 2025",
    emoji: "🌳",
  },
  {
    slug: "transform-your-kitchen",
    title: "How a Modular Kitchen Transforms Your Rohtak Home",
    excerpt: "Beyond aesthetics — how the right kitchen layout changes how you cook, clean and spend time with family. With layouts suited to Indian homes.",
    category: "Kitchens",
    readTime: "6 min",
    date: "January 2025",
    emoji: "🍳",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-5">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-honey mb-5">Insights & Guides</p>
        <h1 className="font-display text-[clamp(3rem,9vw,7rem)] leading-[0.92] text-bark font-bold">
          The Woodlog
        </h1>
        <p className="font-body text-bark/50 mt-4 max-w-md text-sm leading-relaxed">
          Practical guides on wood, interiors and home design — written from our workshop in Rohtak.
        </p>
      </section>

      <section className="pb-28 max-w-7xl mx-auto px-5">
        {/* Featured post */}
        <Link href={`/blog/${posts[0].slug}`}
          className="group grid grid-cols-1 md:grid-cols-2 border border-straw/60 bg-parch hover:border-honey card-hover rounded-sm overflow-hidden mb-4 transition-all duration-300">
          <div className="aspect-video md:aspect-auto bg-bark/10 flex items-center justify-center min-h-[240px]">
            <div className="text-center text-bark/20">
              <div className="text-5xl mb-2">{posts[0].emoji}</div>
              <span className="font-mono text-xs">[ Blog Cover ]</span>
            </div>
          </div>
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5">
              <span className="stamp">{posts[0].category}</span>
              <span className="font-mono text-[9px] text-bark/30">{posts[0].readTime} read · {posts[0].date}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bark group-hover:text-honey transition-colors mb-4 leading-tight">
              {posts[0].title}
            </h2>
            <p className="font-body text-sm text-bark/55 leading-relaxed mb-8">{posts[0].excerpt}</p>
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-honey">
              Read Article <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform duration-300"/>
            </div>
          </div>
        </Link>

        {/* Other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group border border-straw/60 bg-parch hover:border-honey card-hover rounded-sm overflow-hidden transition-all duration-300">
              <div className="aspect-video bg-bark/10 flex items-center justify-center">
                <div className="text-center text-bark/20">
                  <div className="text-4xl mb-2">{post.emoji}</div>
                  <span className="font-mono text-xs">[ Blog Cover ]</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="stamp">{post.category}</span>
                  <span className="font-mono text-[9px] text-bark/30">{post.readTime} read · {post.date}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-bark group-hover:text-honey transition-colors mb-3 leading-tight">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-bark/50 leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-honey">
                  Read Article <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform duration-300"/>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
