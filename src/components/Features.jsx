import { FaSpa, FaPaintBrush, FaStar, FaFeather, FaEye } from "react-icons/fa";
import { GiLipstick, GiLaserBlast, GiComb, GiNails } from "react-icons/gi";

const services = [
  { title: "Saç Bakımı", icon: <GiComb /> },
  { title: "Tırnak", icon: <GiNails /> },
  { title: "Protez Tırnak", icon: <FaStar /> },
  { title: "Kalıcı Oje", icon: <FaPaintBrush /> },
  { title: "Pedikür", icon: <FaSpa /> },
  { title: "İpek Kirpik", icon: <FaFeather /> },
  { title: "Kaş & Kirpik Lifting", icon: <FaEye /> },
  { title: "Microblading", icon: <GiLipstick /> },
  { title: "Kalıcı Makyaj", icon: <GiLipstick /> },
  { title: "Cilt Bakımı", icon: <FaSpa /> },
  { title: "Lazer Epilasyon", icon: <GiLaserBlast /> },
];

function Features() {
  return (
    <section className=" py-16 text-gray-800" id="services">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Hizmetlerimiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-6 flex items-center space-x-4 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-pink-50 group cursor-pointer"
            >
              <div className="flex-shrink-0 text-pink-600 text-3xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 group-hover:text-pink-600 transition-colors duration-300">
                {service.title}
              </h3>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-600">
          Detaylı bilgi almak için lütfen{" "}
          <span className="text-pink-600 font-medium">Instagram</span> veya{" "}
          <span className="text-pink-600 font-medium">WhatsApp</span> üzerinden
          iletişime geçin.
        </p>
      </div>
    </section>
  );
}

export default Features;
