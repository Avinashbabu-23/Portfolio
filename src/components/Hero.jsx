import React from 'react';
import { Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // This would link to an actual resume file
    alert('Resume download would be implemented here');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50 to-gray-100">
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-black/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50/30 to-white/50"></div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-red-200/20 to-red-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-black/5 to-red-100/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-500/5 via-transparent to-black/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-black px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-red-600">Marri Avinash Babu</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-gray-700">
            Data Analyst | Power BI • Python • SQL • Excel
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Passionate about transforming raw data into actionable insights that drive business decisions and create meaningful impact.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button
              onClick={handleDownloadResume}
              className="group flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </button> */}
            
            <button
              onClick={scrollToContact}
              className="group flex items-center gap-3 border-2 border-red-600 text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              Let's Connect
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-600/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-600/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
