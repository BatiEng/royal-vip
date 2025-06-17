import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import { Helmet } from "react-helmet";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
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
      {/* SEO Title & Meta */}
      <Helmet>
        <title>
          Royal VIP Güzellik Salonu | Isparta Cilt Bakımı, Lazer Epilasyon &
          Protez Tırnak
        </title>
        <meta
          name="description"
          content="Isparta'nın profesyonel güzellik salonu Royal VIP ile cilt bakımı, lazer epilasyon, protez tırnak ve kaş tasarımı hizmetlerini deneyimleyin."
        />
        <meta
          name="keywords"
          content="Isparta güzellik salonu, protez tırnak Isparta, lazer epilasyon Isparta, cilt bakımı Isparta, kaş tasarımı"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://royalvipguzellik.com/" />
        <meta
          property="og:title"
          content="Royal VIP Güzellik Salonu | Isparta Cilt Bakımı, Lazer Epilasyon & Protez Tırnak"
        />
        <meta
          property="og:description"
          content="Isparta'nın profesyonel güzellik merkezi. Kalıcı güzellik için cilt bakımı, lazer epilasyon ve protez tırnak hizmetleri."
        />
        <meta
          property="og:image"
          content="https://royalvipguzellik.com/logo.PNG"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Royal VIP Güzellik Salonu | Isparta Cilt Bakımı, Lazer Epilasyon & Protez Tırnak"
        />
        <meta
          name="twitter:description"
          content="Isparta'da profesyonel güzellik ve bakım hizmetleri: Lazer epilasyon, protez tırnak ve cilt bakımı."
        />
        <meta
          name="twitter:image"
          content="https://royalvipguzellik.com/logo.PNG"
        />
      </Helmet>

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
      <div>
        <Features />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
