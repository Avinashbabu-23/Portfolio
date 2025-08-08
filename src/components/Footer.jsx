import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-6 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full">
            {/* Logo/Brand */}
            <div className="text-xl font-bold md:mr-auto">
              <span className="text-red-600">M</span>arri Avinash Babu
            </div>

            {/* Copyright */}
            <div className="flex items-center justify-center gap-2 text-gray-300 md:flex-grow">
              <span>© {currentYear} Marri Avinash Babu. Made with</span>
              <Heart className="w-4 h-4 text-red-600 fill-current" />
              <span>and lots of data.</span>
            </div>
          </div>
        </div>
        
        {/* Go to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-1 z-50"
          aria-label="Go to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
