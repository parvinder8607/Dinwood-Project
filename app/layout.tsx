import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dinwood.shop"),
  title: {
    default: "Dinwood | Premium Wooden Interiors & Custom Furniture in Rohtak, Haryana",
    template: "%s | Dinwood – Rohtak",
  },
  description:
    "Dinwood crafts bespoke wooden interiors, custom furniture, modular kitchens, wardrobes, and interior woodwork in Rohtak, Haryana. Visit our showroom for a personal consultation.",
  keywords: [
    "wooden furniture Rohtak",
    "custom furniture Rohtak Haryana",
    "modular kitchen Rohtak",
    "wooden wardrobe Rohtak",
    "interior woodwork Rohtak",
    "office furniture Rohtak",
    "wood interior designer Haryana",
    "Dinwood Rohtak",
    "best carpenter Rohtak",
    "sheesham furniture Haryana",
    "wooden interior design Rohtak",
    "furniture shop Rohtak",
  ],
  openGraph: {
    title: "Dinwood | Premium Wooden Interiors in Rohtak, Haryana",
    description:
      "Bespoke wooden furniture, modular kitchens, wardrobes & interior woodwork crafted in Rohtak. Book a showroom visit.",
    url: "https://dinwood.shop",
    siteName: "Dinwood",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinwood | Wooden Interiors & Furniture — Rohtak, Haryana",
    description:
      "Bespoke wood interiors crafted with traditional skill and love in Rohtak, Haryana.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://dinwood.shop" },
  verification: { google: "YOUR_GOOGLE_VERIFICATION_CODE" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://dinwood.shop",
  name: "Dinwood",
  description:
    "Premium wooden interiors, custom furniture, modular kitchens, wardrobes and interior woodwork in Rohtak, Haryana.",
  url: "https://dinwood.shop",
  telephone: "+91-9813352801",
  email: "info@dinwood.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Saini Pura, rahad road",
    addressLocality: "Rohtak",
    addressRegion: "Haryana",
    postalCode: "124001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.8955,
    longitude: 76.6066,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  priceRange: "₹₹₹",
  hasMap: "https://maps.google.com/?q=Dinwood+Rohtak",
  sameAs: [
    "https://www.instagram.com/dinwood",
    "https://wa.me/919813352801",
  ],
  servesCuisine: null,
  image: "https://dinwood.shop/og-image.jpg",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 28.8955, longitude: 76.6066 },
    geoRadius: "50000",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/919813352801?text=Hi%20Dinwood%2C%20I%27d%20like%20to%20book%20a%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="wa-float"
          aria-label="Chat on WhatsApp"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.549 4.103 1.508 5.831L0 24l6.335-1.484A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.773 9.773 0 01-5.037-1.396l-.361-.215-3.762.882.924-3.647-.235-.374A9.786 9.786 0 012.182 12C2.182 6.575 6.575 2.182 12 2.182S21.818 6.575 21.818 12 17.425 21.818 12 21.818z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
