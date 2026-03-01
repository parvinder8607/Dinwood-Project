import Image from "next/image";
import product1 from "@/assets/dinning_table.avif"
import product2 from "@/assets/chair.jpg"
import product3 from "@/assets/bookshelf.jpg"

export default function Featured() {
  return (
    <section className="py-20 container text-center">

      <h2 className="text-4xl font-bold">
        Featured <span className="text-orange-500">Collection</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

        {[
          { img: product1, name: "Artisan Dining Table", price: "$1899" },
          { img: product2, name: "Modern Lounge Chair", price: "$599" },
          { img: product3, name: "Rustic Bookshelf", price: "$799" },
        ].map((p, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow">

            <Image
              src={p.img}
              width={600}
              height={400}
              alt={p.name}
              className="h-64 object-cover"
            />

            <div className="p-6 text-left">
              <h3>{p.name}</h3>
              <p className="text-orange-500 font-bold mt-2">
                {p.price}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}