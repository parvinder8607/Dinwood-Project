import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dinwood.shop";
  
  // Use a fixed date (or fetch from your DB) to prevent the "shifting date" error
  const lastMod = new Date("2026-04-04"); 

  const routes = [
    { url: "",                                    priority: 1.0,  changeFrequency: "monthly" as const },
    { url: "/about",                              priority: 0.8,  changeFrequency: "monthly" as const },
    { url: "/services",                           priority: 0.9,  changeFrequency: "monthly" as const },
    { url: "/services/custom-furniture",          priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/services/modular-kitchens",          priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/services/wardrobes-storage",         priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/services/interior-woodwork",         priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/services/office-furniture",          priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/gallery",                            priority: 0.8,  changeFrequency: "weekly" as const },
    { url: "/blog",                               priority: 0.7,  changeFrequency: "weekly" as const },
    { url: "/blog/craft-of-custom-furniture",     priority: 0.65, changeFrequency: "yearly" as const },
    { url: "/blog/why-sheesham-wood",             priority: 0.65, changeFrequency: "yearly" as const },
    { url: "/blog/transform-your-kitchen",        priority: 0.65, changeFrequency: "yearly" as const },
    { url: "/faq",                                priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/contact",                            priority: 0.9,  changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    // Removing millisecond precision helps with some parsers
    lastModified: lastMod.toISOString().split('T')[0], 
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}