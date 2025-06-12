import { FaSpa, FaPaintBrush, FaStar, FaFeather, FaEye } from "react-icons/fa";
import { GiLipstick, GiLaserBlast, GiComb, GiNails } from "react-icons/gi";
import { motion } from "framer-motion";

import hair from "../assets/hair.jpg";
import hairDetail from "../assets/hair-detail.jpeg";
import microblading from "../assets/micro.jpeg";
import skinCare from "../assets/cilt.jpg";
import lazer from "../assets/cihazlar.jpeg";
import kaskirpik from "../assets/kas-kirpik.jpeg";
import ipek from "../assets/ipek-kirpik.jpeg";
import makeup from "../assets/kalici.jpeg";
import pedicur from "../assets/pedikur.jpeg";
import tirnak1 from "../assets/tirnak-1.jpg";
import buzlazer from "../assets/buzlazer.jpeg";
import protein from "../assets/protein.jpg";
import FeatureItem from "./FeatureItem";

const services = [
  {
    title: "Saç Bakımı",
    description: "Saçlarınıza ışıltı ve canlılık kazandırın.",
    image: hair,
  },
  {
    title: "Protez Tırnak",
    description:
      "Şıklığınızı tamamlayan, zarif ve göz alıcı Nail Art tasarımları.",
    image: tirnak1,
  },

  {
    title: "Pedikür",
    description: "Ayaklarınıza hak ettiği bakımı sunuyoruz.",
    image: pedicur,
  },
  {
    title: "İpek Kirpik",
    description: "Doğal ve etkileyici bakışlar için ipek kirpik.",
    image: ipek,
  },
  {
    title: "Kaş & Kirpik Lifting",
    description: "Daha belirgin ve hacimli kaş/kirpik görünümü.",
    image: kaskirpik,
  },
  {
    title: "Microblading",
    description: "Doğal kaş çizimiyle dolgun görünüm kazanın.",
    image: microblading,
  },
  {
    title: "Kalıcı Makyaj",
    description: "Gün boyu kalıcı güzellik, özel tekniklerle.",
    image: makeup,
  },
  {
    title: "Cilt Bakımı",
    description: "Cildinize özel bakım uygulamalarıyla yenilenin.",
    image: skinCare,
  },
  {
    title: "Lazer Epilasyon",
    description: "Pürüzsüz cilt için kalıcı lazer epilasyon.",
    image: lazer,
  },
  {
    title: "Saç Analizi",
    description: "Saç tipinize özel analiz ve bakım önerileri.",
    image: hairDetail,
  },
  {
    title: "Saç Proteinlerimiz",
    description: "Saç sağlığınızı artıran özel protein tedavileri.",
    image: protein,
  },
  {
    title: "Buz Lazer",
    description: "Ağrısız ve hızlı lazer epilasyon deneyimi.",
    image: buzlazer,
  },
];

function Features() {
  return (
    <motion.section
      className="py-10 text-gray-800"
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 mb-30">
          Hizmetlerimiz
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20">
          {services.map((service, index) => (
            <FeatureItem
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-gray-600 mt-20">
          Detaylı bilgi almak için lütfen{" "}
          <span className="text-pink-600 font-medium">Instagram</span> veya{" "}
          <span className="text-pink-600 font-medium">WhatsApp</span> üzerinden
          iletişime geçin.
        </p>
      </div>
    </motion.section>
  );
}

export default Features;
