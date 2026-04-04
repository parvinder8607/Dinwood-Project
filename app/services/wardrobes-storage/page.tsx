import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Custom Wardrobes & Storage in Rohtak | Dinwood",
  description:
    "Dinwood builds floor-to-ceiling wardrobes, walk-in closets and modular storage systems in Rohtak, Haryana. Sliding or hinged, fully custom — fitted to your room perfectly.",
  keywords:["wardrobe Rohtak","walk-in closet Rohtak","built-in wardrobe Haryana","sliding wardrobe Rohtak"],
};

export default function WardrobesPage() {
  return (
    <ServicePageTemplate
      number="03"
      title="Wardrobes & Storage"
      subtitle="Built-ins · Walk-ins · Sliding Doors · Overhead Units"
      tagline="Storage that fits your life — not the other way around."
      description={[
        "A wardrobe should disappear into the room. At Dinwood, we design floor-to-ceiling wardrobes that use every centimetre of your wall while looking like they've always been there.",
        "We offer sliding and hinged door systems, walk-in closet designs, and integrated storage solutions with custom internal organizers, LED lighting, and mirror options.",
        "Every wardrobe is built to your room dimensions in our Rohtak workshop — no off-the-shelf sizing, no compromises.",
      ]}
      features={[
        "Floor-to-ceiling fitted design",
        "Sliding and hinged door options",
        "Custom internal organizers",
        "Integrated LED strip lighting",
        "Full-length mirror panel options",
        "Loft storage above wardrobe",
        "Soft-close mechanisms",
        "Multiple finish choices",
      ]}
      subServices={[
        { name:"Bedroom Wardrobes",  desc:"Fitted floor-to-ceiling wardrobes tailored to your bedroom walls." },
        { name:"Walk-in Closets",    desc:"Full walk-in closet design with island storage and lighting." },
        { name:"Sliding Door Wardrobes", desc:"Space-saving sliding systems for tight rooms." },
        { name:"Children's Wardrobes", desc:"Smart, playful storage for kids' rooms that grows with them." },
        { name:"Loft Storage",       desc:"Overhead storage above wardrobes to use ceiling height fully." },
        { name:"TV + Storage Units", desc:"Combined media and storage solutions for living rooms." },
      ]}
      ctaText="Let's design your perfect storage"
    />
  );
}
