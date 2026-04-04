import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Office Furniture in Rohtak | Custom Workstations by Dinwood",
  description:
    "Dinwood crafts custom office furniture for businesses in Rohtak, Haryana — workstations, reception desks, cabinets and conference tables built to last.",
  keywords:["office furniture Rohtak","custom workstation Rohtak","reception desk Haryana","commercial furniture Rohtak"],
};

export default function OfficeFurniturePage() {
  return (
    <ServicePageTemplate
      number="05"
      title="Office Furniture"
      subtitle="Workstations · Reception Desks · Cabinets · Conference Tables"
      tagline="Professional spaces deserve furniture that works as hard as you do."
      description={[
        "Offices in Rohtak are growing — and the furniture they deserve should reflect that ambition. Dinwood builds commercial-grade wooden furniture that makes a statement without sacrificing function.",
        "From a single executive desk to a full office fitout — workstations, storage cabinets, reception counters, conference tables and more — all built to your floor plan and brand identity.",
        "We understand commercial timelines. Our team works efficiently without cutting corners, and we deliver furniture that holds up to daily professional use for years.",
      ]}
      features={[
        "Custom sizing to your office floor plan",
        "Ergonomic workstation design",
        "Integrated cable management",
        "Lockable drawers and storage",
        "Scratch and stain resistant finishes",
        "Reception counter with branding options",
        "Conference table in any size",
        "Bulk order discounts available",
      ]}
      subServices={[
        { name:"Workstations",        desc:"Individual and cluster workstations designed for focus and productivity." },
        { name:"Executive Desks",     desc:"Solid wood executive desks that command respect." },
        { name:"Reception Counters",  desc:"First-impression reception desks with integrated storage." },
        { name:"Storage Cabinets",    desc:"Filing cabinets, overhead units and open shelving systems." },
        { name:"Conference Tables",   desc:"Round, rectangular or custom-shaped conference tables for any team size." },
        { name:"Cabin Furniture",     desc:"Complete manager and director cabin furniture packages." },
      ]}
      ctaText="Let's furnish your office"
    />
  );
}
