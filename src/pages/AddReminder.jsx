import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const AddReminder = () => {
  const [form, setForm] = useState({
    phone: "",
    message: "",
    date: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ type: "", message: "" });

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "");
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
  };

  const stripPhoneNumber = (value) => value.replace(/\D/g, "");

  const validateForm = () => {
    const newErrors = {};
    const cleanPhone = stripPhoneNumber(form.phone);
    if (!/^\d{10}$/.test(cleanPhone)) {
      newErrors.phone = "Lütfen geçerli bir 10 haneli telefon numarası girin";
    }
    if (form.message.length < 3 || form.message.length > 160) {
      newErrors.message = "Mesaj 3-160 karakter uzunluğunda olmalıdır";
    }
    if (!form.date || new Date(form.date) <= new Date()) {
      newErrors.date = "Lütfen gelecek bir tarih ve saat seçin";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setForm((prev) => ({ ...prev, [name]: formattedPhone }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setNotification({ type: "", message: "" });

    try {
      const submitData = {
        ...form,
        phone: stripPhoneNumber(form.phone),
      };
      const response = await axios.post(
        "http://localhost:3000/api/reminders",
        submitData
      );
      if (response.data.success) {
        setNotification({
          type: "success",
          message: "Hatırlatma başarıyla eklendi!",
        });
        setForm({ phone: "", message: "", date: "" });
      } else {
        throw new Error("Sunucu hatası");
      }
    } catch (err) {
      setNotification({
        type: "error",
        message: err.response?.data?.message || "Hatırlatma eklenemedi",
      });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({ phone: "", message: "", date: "" });
    setErrors({});
    setNotification({ type: "", message: "" });
  };

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification({ type: "", message: "" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <div className="min-h-screen bg-gray-100 mt-20">
      <Navbar />
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Hatırlatma Ekle
          </h2>

          {notification.message && (
            <div
              className={`p-3 rounded-md mb-4 ${
                notification.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {notification.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefon Numarası
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="555 555 5555"
                className={`w-full px-4 py-2 text-base min-h-[48px] border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Hatırlatma mesajınızı girin"
                className={`w-full px-4 py-2 text-base min-h-[48px] border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              <p className="text-sm text-gray-500 mt-1">
                {form.message.length}/160 karakter
              </p>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Hatırlatma Tarihi ve Saati
              </label>
              <input
                id="date"
                type="datetime-local"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 text-base min-h-[48px] border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  errors.date ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date}</p>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                disabled={loading}
              >
                Sıfırla
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-400 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                )}
                {loading ? "Kaydediliyor..." : "Hatırlatma Ekle"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReminder;
