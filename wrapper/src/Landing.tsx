import { useState } from 'react';
import {
    Moon,
    Sun,
    ArrowRight,
    Zap,
    FileText,
    Image,
    Video,
    Music,
    Code,
    Database,
    Globe,
    Shield,
    Cpu,
    Palette,
    Terminal,
    Smartphone,
    Cloud,
    Star,
    TrendingUp,
    Heart
} from 'lucide-react';

export const Landing = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    // Define colors
    const primaryGreen = '#16a34a'; // dark green
    const secondaryBlue = '#1e40af'; // dark blue

    // All 16 conversion tools
    const allTools = [
        { id: 1, name: 'PDF Converter', icon: FileText, description: 'Convert documents to and from PDF format', color: primaryGreen },
        { id: 2, name: 'Image Converter', icon: Image, description: 'Transform images between different formats', color: secondaryBlue },
        { id: 3, name: 'Video Converter', icon: Video, description: 'Convert video files to various formats', color: primaryGreen },
        { id: 4, name: 'Audio Converter', icon: Music, description: 'Transform audio files and formats', color: secondaryBlue },
        { id: 5, name: 'Code Formatter', icon: Code, description: 'Format and convert code between languages', color: primaryGreen },
        { id: 6, name: 'Database Export', icon: Database, description: 'Export data in multiple formats', color: secondaryBlue },
        { id: 7, name: 'Web Scraper', icon: Globe, description: 'Extract and convert web data', color: primaryGreen },
        { id: 8, name: 'Encryption Tool', icon: Shield, description: 'Secure file conversion and encryption', color: secondaryBlue },
        { id: 9, name: 'API Converter', icon: Cpu, description: 'Transform API responses and data', color: primaryGreen },
        { id: 10, name: 'Color Palette', icon: Palette, description: 'Convert between color formats', color: secondaryBlue },
        { id: 11, name: 'Terminal Export', icon: Terminal, description: 'Command line data conversion', color: primaryGreen },
        { id: 12, name: 'Mobile Optimizer', icon: Smartphone, description: 'Optimize files for mobile devices', color: secondaryBlue },
        { id: 13, name: 'Cloud Sync', icon: Cloud, description: 'Convert and sync to cloud storage', color: primaryGreen },
        { id: 14, name: 'Batch Processor', icon: Zap, description: 'Convert multiple files simultaneously', color: secondaryBlue },
        { id: 15, name: 'QR Generator', icon: Star, description: 'Generate QR codes from various inputs', color: primaryGreen },
        { id: 16, name: 'Analytics Export', icon: TrendingUp, description: 'Export analytics in different formats', color: secondaryBlue }
    ];

    // Most popular tools (first 6)
    const popularTools = allTools.slice(0, 6);

    const ToolTile = ({ tool, isPopular = false }) => {
        const Icon = tool.icon;
        return (
            <div className={`
        ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} 
        border ${darkMode ? 'border-gray-700' : 'border-gray-200'} 
        rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group
        ${isPopular ? `ring-2 ring-opacity-50` : ''}
      `}
                 style={isPopular ? { ringColor: primaryGreen } : {}}>
                <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: tool.color }}
                >
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-semibold text-lg mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {tool.name}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {tool.description}
                </p>
                {isPopular && (
                    <div className="mt-3">
            <span
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: primaryGreen }}
            >
                            <Heart className="w-3 h-3 mr-1" />
              Popular
            </span>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
            {/* Header */}
            <header className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b sticky top-0 z-50 backdrop-blur-sm bg-opacity-90`}>
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{ backgroundColor: primaryGreen }}
                            >
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold" style={{ color: primaryGreen }}>
                ConvertHub
              </span>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            <a href="#tools" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Tools</a>
                            <a href="#about" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>About</a>
                            <a href="#popular" className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Popular</a>
                        </nav>

                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className={`absolute inset-0 opacity-5 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}></div>
                <div className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Convert{' '}
                        <span style={{ color: primaryGreen }}>Anything</span>
                    </h1>
                    <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Your one-stop solution for all file conversions. Fast, secure, and reliable conversion tools for every need.
                    </p>
                    <button
                        className="text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        style={{ backgroundColor: primaryGreen }}
                    >
                        Start Converting Now
                    </button>
                </div>
            </section>

            {/* Main Tools Grid */}
            <section id="tools" className="py-20">
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">All Conversion Tools</h2>
                        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Discover our complete suite of conversion utilities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                        {allTools.map((tool) => (
                            <ToolTile key={tool.id} tool={tool} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-8">About ConvertHub</h2>
                    <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        ConvertHub is your trusted partner for all digital conversion needs. We believe in making file conversion
                        simple, fast, and accessible to everyone. Our platform combines cutting-edge technology with user-friendly
                        design to deliver the best conversion experience possible. Whether you're a professional handling large
                        volumes of data or an individual with occasional conversion needs, ConvertHub has the right tools for you.
                    </p>
                    <button
                        onClick={() => window.open('/about', '_blank')}
                        className="inline-flex items-center text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        style={{ backgroundColor: secondaryBlue }}
                    >
                        Learn More About Us
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </section>

            {/* Most Popular Tools */}
            <section id="popular" className="py-20">
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Most Popular Tools</h2>
                        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Our community's favorite conversion tools
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {popularTools.map((tool) => (
                            <ToolTile key={tool.id} tool={tool} isPopular={true} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'} border-t py-12`}>
                <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: primaryGreen }}
                                >
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold" style={{ color: primaryGreen }}>
                  ConvertHub
                </span>
                            </div>
                            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                                Making file conversion simple, fast, and accessible for everyone.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Tools</h3>
                            <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <li><a href="#" className="transition-colors" style={{ ':hover': { color: primaryGreen } }}>PDF Converter</a></li>
                                <li><a href="#" className="transition-colors" style={{ ':hover': { color: secondaryBlue } }}>Image Tools</a></li>
                                <li><a href="#" className="transition-colors" style={{ ':hover': { color: primaryGreen } }}>Video Converter</a></li>
                                <li><a href="#" className="transition-colors" style={{ ':hover': { color: secondaryBlue } }}>Audio Tools</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className={`space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <li><a href="#" className="transition-colors" style={{ ':hover': { color: primaryGreen } }}>About Us</a></li>
                                <li><a href="#" className="transition-colors" style={{ ':hover': { color: secondaryBlue } }}>Contact</a></li>
                                <li><a href="#" className="transition-colors" style={{ ':hover': { color: primaryGreen } }}>Privacy Policy</a></li>
                                <li><a href="#" className="transition-colors" style={{ ':hover': { color: secondaryBlue } }}>Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={`border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} mt-8 pt-8 text-center`}>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            © 2025 ConvertHub. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};