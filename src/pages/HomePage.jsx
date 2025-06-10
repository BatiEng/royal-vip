import React from "react";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function HomePage() {
  return (
    <div className="">
      <div className="hero relative h-screen bg-cover bg-center">
        <Navbar />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* İçerik */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 text-white max-w-5xl">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-4">
            Royal VIP Güzellik Salonu
          </h1>
          <h2 className="text-lg md:text-2xl max-w-2xl">
            Her detayda zarafet, her bakımda özen. Şimdi kendine bir iyilik yap.
          </h2>
        </div>
      </div>

      <div className="bg-pink-50">
        {" "}
        <Features />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
