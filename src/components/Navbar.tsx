"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow z-50">
      <nav className="container flex justify-between items-center py-4">

        <h1 className="text-xl md:text-2xl font-bold text-orange-500">
          Dinwood
        </h1>

        <ul className="hidden md:flex gap-8">
          <li>Home</li>
          <li>Services</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>

        <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded">
          Get Quote
        </button>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white shadow">
          <ul className="flex flex-col gap-4 p-6">
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
}