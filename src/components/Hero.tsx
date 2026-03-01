import Image from "next/image";
import hero from "@/assets/hero.jpg"

export default function Hero() {
  return (
    <section className="relative h-screen">

      <Image
        src={hero}
        fill
        priority
        alt="Furniture"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="container relative h-full flex items-center">

        <div className="text-white max-w-xl">

          <h1 className="text-5xl md:text-6xl leading-tight">
            Crafting Timeless
            <span className="text-orange-500 block">
              Furniture with Passion
            </span>
          </h1>

          <p className="mt-2 md:mt-6 text-gray-200">
            Experience the art of woodcraft where tradition
            meets modern design.
          </p>

          <div className="flex gap-4 mt-3 md:mt-8">
            <button className="bg-orange-500 px-6 py-3 rounded">
              Explore Collection →
            </button>

            <button className="border px-6 py-3 rounded">
              Custom Order
            </button>
          </div>

          {/* stats */}
          <div className="flex gap-10 mt-6 md:mt-12 text-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-500">25+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-500">500+</h3>
              <p>Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-500">1000+</h3>
              <p>Custom Pieces</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}