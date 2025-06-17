import React, { useState } from "react";
import logo from "../assets/logo.PNG"; // Adjust the path as necessary
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 text-black fixed top-0 left-0 w-full z-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* <div className="text-2xl font-bold tracking-wide">Royal VIP</div> */}
        <img src={logo} className="w-20" alt="" />

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#hizmetler" className="hover:text-pink-300 transition">
            Hizmetler
          </a>
          <a href="#hakkimizda" className="hover:text-pink-300 transition">
            Hakkımızda
          </a>
          <a href="#hakkimizda" className="hover:text-pink-300 transition">
            Galeri
          </a>
          <a href="#iletisim" className="hover:text-pink-300 transition">
            İletişim
          </a>
        </div>

        {/* Call to Action (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#appointment"
            className="bg-black/70 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition"
          >
            Ulaşım
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white text-gray-800 flex flex-col justify-between h-screen z-30">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)}>
              <svg
                className="w-8 h-8 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-grow flex flex-col items-center justify-center space-y-6 text-lg">
            <a
              href="#hizmetler"
              className="block text-gray-900 hover:text-pink-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Hizmetler
            </a>
            <a
              href="#hakkimizda"
              className="block text-gray-900 hover:text-pink-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Hakkımızda
            </a>
            <a
              href="#hakkimizda"
              className="block text-gray-900 hover:text-pink-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Galeri
            </a>
            <a
              href="#iletisim"
              className="block text-gray-900 hover:text-pink-600 transition"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </a>
            <a
              href="#appointment"
              className="inline-block bg-black/70 hover:bg-black/90 text-white px-6 py-3 rounded-full transition mt-4"
              onClick={() => setIsOpen(false)}
            >
              Randevu Al
            </a>
          </div>
          <div className="flex items-center justify-center pb-8">
            <img src={logo} className="w-35" alt="" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
