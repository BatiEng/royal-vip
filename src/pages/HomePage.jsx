import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Ulasim from "../components/Ulasim";

const heroSlides = [
  {
    title: "Royal VIP Güzellik Salonu",
    subtitle:
      "Her detayda zarafet, her bakımda özen. Şimdi kendine bir iyilik yap.",
    bgClass: "hero1",
  },
  {
    title: "Kendini Şımartmanın Tam Zamanı",
    subtitle:
      "Profesyonel ekibimizle güzelliğinizi ortaya çıkarın. Çünkü siz en iyisini hak ediyorsunuz.",
    bgClass: "hero2",
  },
  {
    title: "Doğallığın Zarafeti",
    subtitle:
      "Kalıcı güzellik, doğal dokunuşlarla başlar. Şimdi güzellik yolculuğuna çıkın.",
    bgClass: "hero3",
  },
];

function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ⏱️ Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // 6 saniyede bir slayt değiştir

    return () => clearInterval(interval); // component unmount olursa temizle
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const { title, subtitle, bgClass } = heroSlides[currentSlide];

  return (
    <div>
      {/* Hero Section */}
      <div className={`relative h-screen bg-cover bg-center ${bgClass}`}>
        <Navbar />
        <div className="absolute inset-0 bg-black/50 z-0" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 text-white max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-4">
              {title}
            </h1>
            <h2 className="text-lg md:text-2xl max-w-2xl">{subtitle}</h2>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="absolute bottom-10 left-6 md:left-16 z-10 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition text-white"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition text-white"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Diğer Bölümler */}
      <div className="">
        <Features />
        <AboutUs />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
