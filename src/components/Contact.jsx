import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Lütfen tüm alanları doldurun.");
      return;
    }
    // Here you would typically send the form data to a backend
    setFormStatus("Mesajınız gönderildi!");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormStatus(""), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className="py-16 bg-gradient-to-b from-gray-50 to-white text-gray-800"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Bize Ulaşın
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Çalışma Saatleri */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Çalışma Saatlerimiz
            </h3>
            <div className="space-y-4 text-gray-700 text-lg">
              <p className="flex items-center gap-3">
                <FaClock className="text-pink-600 flex-shrink-0" />
                <span>Pazartesi - Cumartesi: 09:00 - 18:00</span>
              </p>
              <p className="flex items-center gap-3">
                <FaClock className="text-pink-600 flex-shrink-0" />
                <span>
                  Pazar:{" "}
                  <span className="text-red-600 font-semibold">Kapalı</span>
                </span>
              </p>
            </div>
          </motion.div>

          {/* Adres ve İletişim */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Adres & İletişim Bilgileri
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3 group"
                variants={itemVariants}
              >
                <FaMapMarkerAlt className="text-pink-600 text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Royalvip+g%C3%BCzellik+salonu/@37.7644089,30.5589975,17z"
                  rel="noopener noreferrer"
                  className="flex-1 hover:underline text-gray-900"
                  aria-label="Salon adresimizi Google Haritalar'da görüntüle"
                >
                  <h4 className="font-bold">Adres</h4>
                  <p className="text-gray-600">
                    Ordu evi, Kepeci mahallesi 6 mart cadde, karşısı no 41-45/1,
                    32000 Burdur Merkez/Isparta
                  </p>
                </a>
              </motion.div>
              <motion.div
                className="flex items-start space-x-3 group"
                variants={itemVariants}
              >
                <FaPhone className="text-pink-600 text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">Telefon</h4>
                  <a
                    href="tel:+905064493232"
                    className="text-gray-600 hover:underline"
                  >
                    0506 449 3232
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex items-start space-x-3 group"
                variants={itemVariants}
              >
                <FaEnvelope className="text-pink-600 text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-gray-900">E-posta</h4>
                  <a
                    href="mailto:info@guzelliksalonu.com"
                    className="text-gray-600 hover:underline"
                  >
                    info@guzelliksalonu.com
                  </a>
                </div>
              </motion.div>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                  aria-label="Bizi Instagram'da takip et"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 transition-colors"
                  aria-label="Bizi Facebook'ta takip et"
                >
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* İletişim Formu */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
            variants={itemVariants}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Mesaj Gönder
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  required
                  aria-required="true"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors duration-300"
              >
                Gönder
              </button>
              {formStatus && (
                <p
                  className={`text-center ${
                    formStatus.includes("gönderildi")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {formStatus}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
