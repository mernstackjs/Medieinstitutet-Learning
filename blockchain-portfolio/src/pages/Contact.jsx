import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Meddelande skickat! Tack för ditt meddelande.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    { label: "Email", value: "mernstack.js@gmail.com", icon: "📧" },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/ahmed-abdirizaak-56bbaa294",
      icon: "💼",
    },
    { label: "GitHub", value: "https://github.com/mernstackjs", icon: "👨‍💻" },
    { label: "Plats", value: "Stockholm, Sverige", icon: "📍" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-900 via-indigo-900 to-black"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-700/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-pink-700/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Kontakta Mig</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Intresserad av blockchain utveckling eller vill diskutera projekt
            och samarbeten? Hör gärna av dig!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="p-8 bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Skicka Meddelande</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block font-medium">
                  Namn
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ditt namn"
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="din.email@example.com"
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-medium">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Berätta om ditt projekt eller fråga..."
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md bg-pink-600 hover:bg-pink-500 transition-all duration-300 text-white font-semibold shadow-md hover:shadow-lg"
              >
                Skicka Meddelande
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6">
                Kontaktinformation
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="text-2xl p-2 rounded-full bg-purple-700/20 animate-pulse-glow">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 animate-fade-in">
              <h3 className="text-xl font-semibold mb-4">Vad söker jag?</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 animate-pulse-glow"></div>
                  <p>Praktikplatser inom blockchain utveckling</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 animate-pulse-glow"></div>
                  <p>Samarbeten på blockchain projekt</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 animate-pulse-glow"></div>
                  <p>Mentorskap och vägledning</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 animate-pulse-glow"></div>
                  <p>Junior utvecklare roller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
