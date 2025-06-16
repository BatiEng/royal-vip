import React from "react";

const Teklif = () => {
  const basicFeatures = [
    "Müşteri telefon numarası ve mesaj ile SMS gönderimi",
    "Randevudan 1 saat önce otomatik SMS hatırlatması",
    "Basit ve kullanıcı dostu arayüz",
  ];

  const advancedFeatures = [
    "Toplu SMS gönderimi",
    "Kişiselleştirilmiş SMS gönderimi",
    "Randevudan 1 saat önce otomatik bilgilendirme SMS",
    "Müşteri kayıt sistemi (Ad, Soyad, Telefon, Geçmiş hizmet bilgisi)",
    "Müşteriden kazanılan toplam gelir takibi",
    "Genel, günlük, haftalık ve aylık ciro raporları",
    "Mobil uyumlu panel (tablet ve telefon uyumlu)",
    "Hediye: 10.000 SMS",
    "Kullanım eğitimi dahil",
  ];

  const comparison = [
    ["Özellik", "Temel Paket", "Gelişmiş Paket"],
    ["SMS Gönderimi", "✅", "✅"],
    ["Randevu Hatırlatma", "✅", "✅"],
    ["Toplu SMS Gönderimi", "❌", "✅"],
    ["Özel SMS Gönderimi", "❌", "✅"],
    ["Müşteri Kaydı", "❌", "✅"],
    ["Gelir Takibi", "❌", "✅"],
    ["Ciro Raporları", "❌", "✅"],
    ["Mobil Uyum", "❌", "✅"],
    ["Hediye SMS", "❌", "🎁 10.000"],
    ["Kullanım Eğitimi", "❌", "✅"],
    ["Fiyat", "6.000 TL", "25.000 TL"],
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
          Size Özel Teklifimiz
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Temel Paket
            </h2>
            <p className="text-3xl font-semibold text-gray-900 mb-6">
              6.000 TL
            </p>
            <ul className="space-y-3">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
              Hemen Başla
            </button>
          </div>

          <div className="p-8 bg-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Gelişmiş Paket
            </h2>
            <p className="text-3xl font-semibold text-gray-900 mb-6">
              25.000 TL
            </p>
            <ul className="space-y-3">
              {advancedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold">
              Hemen Başla
            </button>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Paket Karşılaştırması
        </h3>
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full bg-white text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                {comparison[0].map((col, index) => (
                  <th
                    key={index}
                    className="px-4 py-3 text-left font-semibold text-sm uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.slice(1).map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`${
                    rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-colors duration-200`}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-3 text-center text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-gray-500 mt-12 italic">
          Bu teklif size özel hazırlanmıştır ve sınırlı süre için geçerlidir.
        </p>
      </div>
    </div>
  );
};

export default Teklif;
