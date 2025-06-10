import logo from "../assets/royal-logo.jpg";

import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.section
      id="about"
      className="py-16 text-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // %20si görünse yeter
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Hakkımızda
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-600">
                Royal VIP Güzellik Salonu olarak, güzelliğin her kadının hakkı
                olduğuna inanıyoruz. Uzman kadromuzla, en son teknolojileri ve
                en kaliteli ürünleri kullanarak sizlere güvenli, konforlu ve
                kişiselleştirilmiş bir güzellik deneyimi sunuyoruz.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Misyonumuz, her müşterimizin kendini özel ve yenilenmiş
                hissetmesini sağlamak. Sıcak ve samimi bir ortamda, saç bakımı,
                cilt bakımı, tırnak hizmetleri ve daha fazlasında yanınızdayız.
                Güzelliğiniz için buradayız!
              </p>
              <p className="text-lg text-gray-600">
                Daha fazla bilgi için{" "}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-medium hover:text-pink-700 transition-colors duration-300"
                >
                  Instagram
                </a>{" "}
                veya{" "}
                <a
                  href="https://wa.me/901234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-medium hover:text-pink-700 transition-colors duration-300"
                >
                  WhatsApp
                </a>{" "}
                üzerinden bize ulaşabilirsiniz!
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={logo}
                alt="Royal VIP Güzellik Salonu"
                className="rounded-lg shadow-lg w-full max-w-md object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutUs;
