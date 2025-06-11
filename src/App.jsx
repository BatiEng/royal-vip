import { Route, Routes } from "react-router-dom";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
        <a
          href="https://wa.me/905064493232"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
          aria-label="Bize WhatsApp üzerinden ulaşın"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-pink-700 transition-all duration-300 transform hover:scale-110"
          aria-label="Bizi Instagram'da takip edin"
        >
          <FaInstagram className="text-2xl" />
        </a>
      </div>
    </div>
  );
}

export default App;
