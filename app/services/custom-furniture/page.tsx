import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Custom Furniture in Rohtak | Handcrafted by Dinwood",
  description:
    "Dinwood crafts bespoke custom furniture in Rohtak — dining tables, beds, study desks, chairs and accent pieces handbuilt to your exact specs. Visit our Haryana showroom.",
  keywords: ["custom furniture Rohtak","handcrafted furniture Haryana","wooden furniture maker Rohtak","bespoke dining table Rohtak"],
};

export default function CustomFurniturePage() {
  return (
    <ServicePageTemplate
      number="01"
      title="Custom Furniture"
      subtitle="Tables · Beds · Chairs · Sofas · Accent Pieces"
      tagline="Built to your dimensions, your taste, your life — not from a catalogue."
      description={[
        "Mass-produced furniture fits a generic room. Dinwood furniture fits yours. Every piece starts as a conversation — about your space, your lifestyle, the wood species that appeals to you.",
        "Our craftsmen work in our Rohtak workshop using solid sheesham, teak, walnut and quality engineered wood. We handle everything from joinery to final finish, and only hand over when you're completely satisfied.",
        "Whether you need a single statement piece or an entire room of custom furniture, the process is the same: we meet, we design together, we build, we install.",
      ]}
      features={[
        "Solid wood & premium ply options",
        "Fully custom dimensions to your room",
        "Choice of wood species, grain & finish",
        "In-home measurement visit included",
        "3D design preview before we build",
        "Professional installation",
        "Post-installation support",
        "Rohtak & Haryana delivery",
      ]}
      subServices={[
        { name:"Dining Tables",      desc:"Solid-top tables in sheesham, teak or walnut. Any size, any shape." },
        { name:"Bed Frames",         desc:"Platform beds, storage beds, four-poster and upholstered frame options." },
        { name:"Study & Work Desks", desc:"Ergonomic desks with cable management, drawers and custom sizing." },
        { name:"Chairs & Seating",   desc:"Dining chairs, armchairs and benches matched to your furniture." },
        { name:"Coffee & Side Tables",desc:"Statement pieces and accent tables that anchor a living room." },
        { name:"TV Units & Consoles", desc:"Media units with cable management, integrated storage and clean lines." },
      ]}
      ctaText="Have a piece in mind?"
    />
  );
}
