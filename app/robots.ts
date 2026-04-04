import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dinwood.in/sitemap.xml",
    host: "https://dinwood.in",
  };
}
