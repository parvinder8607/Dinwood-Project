import {
  Sofa,
  Hammer,
  Truck,
  Trees,
} from "lucide-react";

const services = [
  {
    title: "Custom Furniture Design",
    desc: "Bespoke furniture tailored to your space.",
    icon: Sofa,
  },
  {
    title: "Restoration Services",
    desc: "Restore antique furniture craftsmanship.",
    icon: Hammer,
  },
  {
    title: "Installation & Delivery",
    desc: "Professional delivery ensuring perfection.",
    icon: Truck,
  },
  {
    title: "Wood Consultation",
    desc: "Expert guidance on materials.",
    icon: Trees,
  },
];

export default function Services() {
  return (
    <section className="bg-[#f6f3ed] py-20">

      <div className="container text-center">

        <h2 className="text-4xl font-bold">
          Our <span className="text-orange-500">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="
                bg-white
                p-8
                rounded-xl
                shadow
                hover:shadow-xl
                transition
                group
                "
              >
                {/* Icon */}
                <div className="
                  w-16 h-16
                  flex items-center justify-center
                  bg-orange-100
                  rounded-full
                  mx-auto
                  mb-5
                  group-hover:bg-orange-500
                  transition
                ">
                  <Icon
                    size={28}
                    className="
                    text-orange-500
                    group-hover:text-white
                    transition
                    "
                  />
                </div>

                <h3 className="font-semibold text-lg">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3">
                  {service.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}