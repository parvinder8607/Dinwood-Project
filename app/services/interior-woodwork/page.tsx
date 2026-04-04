import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Interior Woodwork & Wood Paneling in Rohtak | Dinwood",
  description:
    "Dinwood installs wall paneling, wooden flooring, ceiling woodwork and architectural millwork in Rohtak, Haryana. Transform your interiors with natural wood.",
  keywords:["wood paneling Rohtak","wooden flooring Rohtak","interior woodwork Haryana","wall paneling Rohtak"],
};

export default function InteriorWoodworkPage() {
  return (
    <ServicePageTemplate
      number="04"
      title="Interior Woodwork"
      subtitle="Wall Paneling · Flooring · Ceilings · Millwork · Stairs"
      tagline="Wood as architecture — not just furniture."
      description={[
        "Wall paneling, herringbone flooring, coffered ceilings — when wood becomes the architecture of a room, everything changes. Dinwood brings this craft to homes and offices across Rohtak.",
        "We work with solid hardwood, engineered flooring, fluted panels and custom mouldings. Our team handles the full scope: measurement, supply, and professional installation.",
        "Whether it's a single feature wall or a complete interior wood treatment, we design it to feel considered and complete — never pasted on.",
      ]}
      features={[
        "Wall paneling — fluted, slat, solid and batten",
        "Hardwood & engineered wooden flooring",
        "Coffered and beam ceiling designs",
        "Wainscoting and dado rail detailing",
        "Architectural door and window frames",
        "Wooden staircases and railings",
        "Custom skirting and architrave",
        "Protective finish and sealing",
      ]}
      subServices={[
        { name:"Wall Paneling",      desc:"Fluted, slat and solid panel designs that add texture and depth." },
        { name:"Wooden Flooring",    desc:"Herringbone, straight and parquet hardwood floors installed perfectly." },
        { name:"Ceiling Woodwork",   desc:"Coffered ceilings, exposed beams and tray ceiling designs." },
        { name:"Feature Walls",      desc:"Statement wood feature walls for living rooms and bedrooms." },
        { name:"Stairs & Railings",  desc:"Wooden staircases, balusters and handrails built to design." },
        { name:"Architectural Millwork", desc:"Door frames, window trim, wainscoting and decorative moulding." },
      ]}
      ctaText="Bring wood into your walls"
    />
  );
}
