import { useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { ALL_TOOLS, POPULAR_TOOLS } from "./constants";
import { Header, ToolTile } from "./components";

export const Landing = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className={`absolute inset-0 opacity-5 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Convert <span className="text-green-600">Anything</span>
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Your one-stop solution for all file conversions. Fast, secure, and
            reliable conversion tools for every need.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Converting Now
          </button>
        </div>
      </section>

      {/* Main Tools Grid */}
      <section id="tools" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">All Conversion Tools</h2>
            <p
              className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Discover our complete suite of conversion utilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {ALL_TOOLS.map((tool) => (
              <ToolTile key={tool.id} tool={tool} darkMode={darkMode} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">About ConvertHub</h2>
          <p
            className={`text-lg mb-8 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            ConvertHub is your trusted partner for all digital conversion needs.
            We believe in making file conversion simple, fast, and accessible to
            everyone. Our platform combines cutting-edge technology with
            user-friendly design to deliver the best conversion experience
            possible. Whether you're a professional handling large volumes of
            data or an individual with occasional conversion needs, ConvertHub
            has the right tools for you.
          </p>
          <button
            onClick={() => window.open("/about", "_blank")}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Learn More About Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Most Popular Tools */}
      <section id="popular" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Most Popular Tools</h2>
            <p
              className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              Our community's favorite conversion tools
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {POPULAR_TOOLS.map((tool) => (
              <ToolTile
                key={tool.id}
                tool={tool}
                isPopular={true}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`${darkMode ? "bg-gray-900 border-gray-800" : "bg-gray-50 border-gray-200"} border-t py-12`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-green-600">
                  ConvertHub
                </span>
              </div>
              <p
                className={`${darkMode ? "text-gray-400" : "text-gray-600"} mb-4`}
              >
                Making file conversion simple, fast, and accessible for
                everyone.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul
                className={`space-y-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                <li>
                  <a
                    href="#"
                    className="hover:text-green-600 transition-colors"
                  >
                    PDF Converter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Image Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-600 transition-colors"
                  >
                    Video Converter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Audio Tools
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul
                className={`space-y-2 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                <li>
                  <a
                    href="#"
                    className="hover:text-green-600 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-600 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`border-t ${darkMode ? "border-gray-800" : "border-gray-200"} mt-8 pt-8 text-center`}
          >
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              © 2025 ConvertHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
