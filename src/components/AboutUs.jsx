import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import w1 from "../assets/shop-1.jpeg";
import w2 from "../assets/shop-2.jpeg";
import w3 from "../assets/shop-3.jpeg";
import w4 from "../assets/shop-4.jpeg";
import w5 from "../assets/shop-5.jpeg";
import salonVideo from "../assets/video.MP4"; // Replace with your actual video path

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const images = [w1, w2, w3, w4, w5];
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect for images
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <motion.section
      id="hakkimizda"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50/50 text-gray-800 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="absolute inset-0 opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-6">
        <div className="relative   rounded-2xl p-8 sm:p-12 border border-gray-200  transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Text */}
            <motion.div
              className="space-y-6"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-4xl font-bold">Hakkımızda</h3>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                Royal VIP Güzellik Salonu olarak, güzelliğin bir ayrıcalık
                değil, her kadının hakkı olduğuna inanıyoruz. Deneyimli
                uzmanlarımız, en son teknolojiler ve premium ürünlerle size
                özel, güvenli ve konforlu bir deneyim sunuyor.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                Misyonumuz, her müşterimizin kapımızdan yenilenmiş ve özgüven
                dolu ayrılmasını sağlamak. Saç bakımı, cilt bakımı, tırnak
                hizmetleri ve daha fazlasında, sıcak ve samimi bir ortamda
                sizinleyiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors duration-300"
                >
                  Instagram'da Bizi Keşfet
                </a>
                <a
                  href="https://wa.me/901234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-pink-600 text-pink-600 font-semibold rounded-full hover:bg-pink-50 transition-colors duration-300"
                >
                  WhatsApp ile İletişim
                </a>
              </div>
            </motion.div>

            {/* Right Media Section */}
            <motion.div
              className="flex flex-col items-center space-y-8"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {/* Video Section */}
              <div className="relative w-full max-w-md">
                <h3 className="mb-4 font-bold text-2xl text-center text-gray-900">
                  Salonumuzu Tanıyın
                </h3>
                <video
                  src={salonVideo}
                  controls
                  className="w-full h-64 object-cover rounded-xl "
                  poster={w1} // Using first image as poster
                />
              </div>

              {/* Image Slider */}
              <div className="relative w-full max-w-md">
                <h3 className="mb-4 font-bold text-2xl text-center text-gray-900">
                  Salonumuzdan Kareler
                </h3>
                <div className="relative overflow-hidden rounded-xl ">
                  <img
                    src={images[current]}
                    alt="Salon"
                    className="w-full h-96 object-cover rounded-xl transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                  {/* Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full  transition"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full  transition"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
