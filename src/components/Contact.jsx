import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-16  text-gray-800" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          İletişim
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Bize Ulaşın
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Adınız
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-600 focus:border-pink-600 outline-none transition-colors duration-300"
                  placeholder="Adınızı girin"
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
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-600 focus:border-pink-600 outline-none transition-colors duration-300"
                  placeholder="E-posta adresinizi girin"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-pink-600 focus:border-pink-600 outline-none transition-colors duration-300"
                  placeholder="Mesajınızı yazın"
                ></textarea>
              </div>
              <button className="w-full bg-pink-600 text-white font-semibold py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                Gönder
              </button>
            </div>
          </div>

          {/* Address and Contact Info */}
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
                  href="https://www.google.com/maps/place/Royalvip+g%C3%BCzellik+salonu/@37.7644089,30.5589975,17z/data=!3m1!4b1!4m6!3m5!1s0x14c5b500614d2633:0x220dfd887b529806!8m2!3d37.7644089!4d30.5589975!16s%2Fg%2F11xfqk5nq7?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                  rel="noopener noreferrer"
                  className="flex-1 hover:underline text-gray-900"
                >
                  <h4 className="font-bold text-gray-900">Adres</h4>
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
              <div className="flex items-start space-x-3 group">
                {/* <div className="text-pink-600 text-2xl group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">E-posta</h4>
                  <p className="text-gray-600">info@guzelliksalonu.com</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
