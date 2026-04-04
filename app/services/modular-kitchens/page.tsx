import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Modular Kitchens in Rohtak | Wooden Kitchen Design by Dinwood",
  description:
    "Dinwood designs and builds modular kitchens in Rohtak, Haryana — L-shape, U-shape, parallel and island layouts in solid wood shutters and premium hardware.",
  keywords:["modular kitchen Rohtak","wooden kitchen Haryana","kitchen interior Rohtak","modular kitchen designer Rohtak"],
};

export default function ModularKitchensPage() {
  return (
    <ServicePageTemplate
      number="02"
      title="Modular Kitchens"
      subtitle="L-Shape · U-Shape · Parallel · Straight · Island"
      tagline="Kitchens built for how Indians actually cook — not Western showrooms."
      description={[
        "A modular kitchen isn't just about looks — it's about how you move, how you cook, how much storage you actually need. At Dinwood, we design around your habits first.",
        "We build with solid wood shutters, quality ply carcasses and trusted hardware brands. Everything is made in our Rohtak workshop to your exact kitchen dimensions.",
        "From a basic 2-wall kitchen to a full island setup with overhead storage — we've built kitchens across Rohtak and Haryana that families cook in every day.",
      ]}
      features={[
        "Site measurement & layout planning",
        "Solid wood & laminate shutter options",
        "Soft-close hinges and drawer systems",
        "Under-cabinet and overhead lighting",
        "Granite, quartz or laminate countertop",
        "Chimney & appliance integration",
        "Full installation by our team",
        "Warranty on hardware and finish",
      ]}
      subServices={[
        { name:"L-Shape Kitchen",    desc:"The most popular layout for medium kitchens — great workflow and storage." },
        { name:"U-Shape Kitchen",    desc:"Maximum storage and counter space. Perfect for serious cooks." },
        { name:"Parallel Kitchen",   desc:"Efficient two-wall design for long, narrow kitchen spaces." },
        { name:"Straight Kitchen",   desc:"Clean single-wall layout for compact apartments and studios." },
        { name:"Island Kitchen",     desc:"Statement kitchen with a central island — for large, open-plan homes." },
        { name:"Breakfast Counter",  desc:"Add a practical breakfast bar to any kitchen layout." },
      ]}
      ctaText="Ready to redesign your kitchen?"
    />
  );
}
