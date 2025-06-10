import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      className="py-16 text-gray-800"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // %20si görünse yeter
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Çalışma Saatleri */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Çalışma Saatlerimiz
            </h3>
            <div className="space-y-2 text-gray-700 text-lg">
              <p className="flex items-center gap-2">
                <FaClock className="text-pink-600" /> Pazartesi - Cumartesi:
                09:00 - 18:00
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-pink-600" /> Pazar:{" "}
                <span className="text-red-600 font-semibold">Kapalı</span>
              </p>
            </div>
          </div>

          {/* Adres ve İletişim */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Adres & İletişim Bilgileri
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="text-pink-600 text-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaMapMarkerAlt />
                </div>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Royalvip+g%C3%BCzellik+salonu/@37.7644089,30.5589975,17z"
                  rel="noopener noreferrer"
                  className="flex-1 hover:underline text-gray-900"
                >
                  <h4 className="font-bold">Adres</h4>
                  <p className="text-gray-600">
                    Ordu evi, Kepeci mahallesi 6 mart cadde, karşısı no 41-45/1,
                    32000 Burdur Merkez/Isparta
                  </p>
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="text-pink-600 text-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Telefon</h4>
                  <p className="text-gray-600">0506 449 3232</p>
                </div>
              </div>
              {/* E-posta aktif etmek istersen açabilirsin */}
              {/* 
              <div className="flex items-start space-x-3 group">
                <div className="text-pink-600 text-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">E-posta</h4>
                  <p className="text-gray-600">info@guzelliksalonu.com</p>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
