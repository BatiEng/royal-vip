import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info + Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Royal VIP</h3>
            <p className="text-gray-400 mb-4">
              Size en iyi güzellik hizmetlerini sunuyoruz. Bizi ziyaret edin!
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaMapMarkerAlt className="text-pink-500" />
                <a
                  href="https://maps.app.goo.gl/4Fnp8JbnNbTuAWvN7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Isparta Merkez, İstiklal Mah. No:5
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaPhoneAlt className="text-pink-500" />
                <a href="tel:+905064493232">+90 506 449 32 32</a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-pink-500" />
                <a href="mailto:info@royalvipguzellik.com">
                  info@royalvipguzellik.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hizmetler"
                  className="text-gray-400 hover:text-pink-500 transition"
                >
                  Hizmetler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="text-gray-400 hover:text-pink-500 transition"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="#hakkimizda"
                  className="text-gray-400 hover:text-pink-500 transition"
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
            <div className="flex justify-center md:justify-start space-x-4 text-2xl">
              <a
                href="https://instagram.com/royalvip_isparta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/905064493232"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Royal VIP. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
