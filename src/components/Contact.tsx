export default function Contact() {
  return (
    <section className="bg-gray-100 py-20">

      <div className="container grid lg:grid-cols-2 gap-10">

        <div className="bg-orange-600 text-white p-10 rounded-xl">
          <h2 className="text-3xl font-bold">
            Let's Create Together
          </h2>

          <p className="mt-4">
            Our team helps you every step of the way.
          </p>
        </div>

        <form className="space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Full Name"/>
          <input className="w-full p-3 border rounded" placeholder="Email"/>
          <textarea
            className="w-full p-3 border rounded h-32"
            placeholder="Message"
          />
          <button className="bg-orange-500 text-white w-full py-3 rounded">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}