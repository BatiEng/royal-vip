// function AboutUs() {
//   return (
//     <section className="py-16 bg-gray-50 text-gray-800" id="about">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
//           Hakkımızda
//         </h2>
//         <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
//           <div className="text-center max-w-3xl mx-auto">
//             <p className="text-lg text-gray-600 mb-6">
//               Güzellik Salonumuza hoş geldiniz! Misyonumuz, sizlere en kaliteli
//               güzellik hizmetlerini sunarak kendinizi özel ve yenilenmiş
//               hissettirmektir. Uzman ekibimizle, modern teknikler ve en iyi
//               ürünler kullanarak saç bakımı, cilt bakımı, tırnak hizmetleri ve
//               daha fazlasında yanınızdayız.
//             </p>
//             <p className="text-lg text-gray-600">
//               Her müşterimizin ihtiyaçlarına özel çözümler sunuyor, sıcak ve
//               samimi bir ortamda unutulmaz bir deneyim yaşatmayı hedefliyoruz.
//               Daha fazla bilgi için{" "}
//               <span className="text-pink-600 font-medium">Instagram</span> veya{" "}
//               <span className="text-pink-600 font-medium">WhatsApp</span>{" "}
//               üzerinden bize ulaşabilirsiniz!
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutUs;
import logo from "../assets/royal-logo.jpg";
import React from "react";

function AboutUs() {
  return (
    <section id="about" className="py-16 bg-pink-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Hakkımızda
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Metin */}
          <div>
            <p className="text-lg leading-relaxed mb-4">
              Royal VIP Güzellik Salonu olarak, güzelliğin her kadının hakkı
              olduğuna inanıyoruz. Uzman kadromuzla birlikte en yeni
              teknolojileri ve en kaliteli ürünleri bir araya getirerek sizlere
              güvenli ve konforlu bir hizmet sunuyoruz.
            </p>
            <p className="text-lg leading-relaxed">
              Misyonumuz; kendinizi özel ve değerli hissettirecek bakım
              deneyimleri yaşatmak. Güzelliğiniz için buradayız!
            </p>
          </div>

          {/* Görsel */}
          <div className="hidden sm:flex">
            <img
              src={logo} // kendi görsel yolunu buraya koy
              alt="Salonumuz"
              className="rounded-lg shadow-lg  w-100 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
