import { Link } from "react-router";

export default function Home() {
  const learningGoals = [
    "Blockchain teknologi och användning inom olika sektorer",
    "Solidity och smarta kontrakt",
    "Web3.js / Ethers.js och frontend integration",
    "Node.js + blockchain backend",
    "Projekt och praktikutvärdering",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-6 bg-gray-900 overflow-hidden">
        {/* Floating blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-pink-700/20 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-700/10 rounded-full blur-3xl animate-pulse-glow transform -translate-x-1/2 -translate-y-1/2"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 animate-fade-in">
            Ahmed Abdirizaak
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-300 animate-fade-in">
            MERN-stack utvecklare som för närvarande lär sig blockchain
            teknologi
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10 animate-fade-in">
            <Link
              to="/kurser"
              className="px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
            >
              Se Mina Kurser
            </Link>
            <Link
              to="/projekt"
              className="px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
            >
              Visa Projekt
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-32 px-6 bg-gray-900/80">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/10 rounded-3xl shadow-lg p-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-10">Utbildning</h2>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold mb-2 animate-pulse-glow">
              Blockchainutvecklare
            </h3>
            <p className="text-gray-400 text-lg">YH01799</p>
          </div>

          <div className="border-t border-white/20 pt-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse-glow"></div>
              Om Mig
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Jag är en dedikerad MERN-stack utvecklare som för närvarande
              fördjupar mig inom blockchain teknologi. Med bakgrund inom
              fullstack webbutveckling strävar jag efter att förstå och
              implementera decentraliserade lösningar som kan förändra olika
              industrier.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Goals Section */}
      <section className="py-32 px-6 bg-gray-900/90">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Vad Jag Vill Lära Mig</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {learningGoals.map((goal, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse-glow"></div>
                  <p className="text-white/90">{goal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
