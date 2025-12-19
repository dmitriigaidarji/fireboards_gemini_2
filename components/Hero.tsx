
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1537519646099-335112f03225?auto=format&fit=crop&w=2000&q=80"
          alt="Siargao Cloud 9"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="heading-font text-6xl md:text-9xl text-white font-bold leading-tight mb-6 drop-shadow-2xl">
          BORN IN THE <span className="text-orange-500">FIRE</span> OF SIARGAO
        </h1>
        <p className="text-xl md:text-2xl text-stone-200 mb-8 max-w-2xl mx-auto font-light">
          Hand-shaped soul from the Philippines. Precision-built in the world's finest factories. 
          Ready for the heaviest peaks and the longest glides.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#collections" 
            className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-sm transition-all transform hover:scale-105"
          >
            EXPLORE BOARDS
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold rounded-sm transition-all"
          >
            OUR STORY
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
