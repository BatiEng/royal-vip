import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Royal VIP</h3>
            <p className="text-gray-400">
              Size en iyi güzellik hizmetlerini sunuyoruz. Bizi ziyaret edin!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                >
                  Hizmetler
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                >
                  Hakkımızda
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Bizi Takip Edin
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://instagram.com/royalvip_isparta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 text-2xl transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/905064493232"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 text-2xl transition-colors duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Royal VIP. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
