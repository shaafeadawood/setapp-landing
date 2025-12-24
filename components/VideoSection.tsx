import React from 'react';
import { PlayIcon } from './icons/Icons';

const VideoSection: React.FC = () => {
  return (
    <section className="bg-brand-dark pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-t border-gray-800 pt-16">
          <h2 className="text-display-section font-bold text-primary-white">Your Setapp journey.</h2>
          <p className="text-gray-400 text-label-nav md:text-body-base max-w-sm mt-4 md:mt-0">
            Type in your task into Setapp search and get instant app recommendations.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden min-h-[500px] bg-[#6B4C6A] group cursor-pointer">
          {/* Background Image / Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B4C6A] via-[#4A3B5C] to-[#2D2B4A] opacity-90"></div>
          
          {/* Use a placeholder image that mimics the "Musician" vibe */}
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60 transition-transform duration-[20s] group-hover:scale-110"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop')` }}
          ></div>
          
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center p-8 md:p-16 z-20">
             <div className="md:w-1/2 space-y-6">
                <p className="text-primary-white text-2xl md:text-4xl font-light leading-tight">
                  "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play."
                </p>
                <div className="flex items-center gap-4 pt-4">
                    <button className="bg-primary-white/20 hover:bg-primary-white/30 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center transition-all transform hover:scale-110 group-hover:bg-primary-white active:scale-95">
                         <PlayIcon className="w-6 h-6 ml-1 text-primary-white group-hover:text-primary-dark transition-colors" />
                    </button>
                    <div>
                        <p className="text-primary-white font-bold">Jason Staczek</p>
                        <p className="text-primary-white/60 text-sm">Composer & Producer</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Navigation Arrows (Mock) */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden md:flex flex-col gap-4 z-30">
              <button className="w-10 h-10 rounded-full border border-primary-white/20 flex items-center justify-center text-primary-white hover:bg-primary-white/10 transition-colors active:scale-95">
                  <svg className="w-5 h-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <button className="w-10 h-10 rounded-full border border-primary-white/20 flex items-center justify-center text-primary-white hover:bg-primary-white/10 transition-colors active:scale-95">
                  <svg className="w-5 h-5 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
          </div>
          
          {/* Pagination Dots */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
             <div className="w-2 h-2 rounded-full bg-primary-white"></div>
             <div className="w-2 h-2 rounded-full bg-primary-white/30 hover:bg-primary-white/50 transition-colors cursor-pointer"></div>
             <div className="w-2 h-2 rounded-full bg-primary-white/30 hover:bg-primary-white/50 transition-colors cursor-pointer"></div>
             <div className="w-2 h-2 rounded-full bg-primary-white/30 hover:bg-primary-white/50 transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
