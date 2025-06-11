import React from "react";
import video from "../assets/video.MP4";

const Ulasim = () => {
  return (
    <section
      id="ulasim"
      className="bg-gradient-to-b from-purple-50 to-pink-50 py-16 px-6 sm:px-12 text-gray-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Ulaşım</h2>
        <p className="text-lg sm:text-xl mb-10 max-w-3xl mx-auto">
          Royal VIP Güzellik Salonu’na ulaşmak artık çok kolay! Aşağıdaki
          videoyu izleyerek yol tarifimizi görebilir, salonumuza rahatça
          ulaşabilirsiniz.
        </p>

        {/* Video Embed */}
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          {/* YouTube embed example — replace with your own video */}
          <video controls className="w-full rounded-xl shadow-lg">
            <source src={video} type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Ulasim;
