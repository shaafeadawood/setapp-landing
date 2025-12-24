import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    content: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    platform: 'twitter',
    avatarColor: 'bg-blue-500'
  },
  {
    id: 2,
    name: "Mauricio Sanchez",
    handle: "@m741s",
    content: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    platform: 'twitter',
    avatarColor: 'bg-yellow-500'
  },
  {
    id: 3,
    name: "Meredith Sweet",
    handle: "@meredith.sweet",
    content: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    platform: 'facebook',
    avatarColor: 'bg-green-500'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Your Setapp journey.</h2>
            <p className="text-gray-400 text-lg">Turn to your Mac, happy-search and get instant app recommendations.</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-[#8B7BA8] min-h-[500px] md:min-h-[600px]">
          <div className="absolute top-6 right-6 flex gap-3 z-20">
            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center h-full">
            <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 z-10">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8">
                Musicians like Jason use Setapp to push the limits of their creativity, dancing through task for more time to play.
              </blockquote>
              <p className="text-white/80 text-lg mb-12">Jason Staczek</p>
              
              <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center shadow-xl transition-all hover:scale-110">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>

            <div className="w-full md:w-1/2 h-full min-h-[400px] md:min-h-[600px] relative bg-[#8B7BA8]">
              <img 
                src="/images/img8.png" 
                alt="Jason Staczek - Musician using Setapp" 
                className="w-full h-full object-cover object-center mix-blend-normal"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-3 mt-12">
            <button className="w-2.5 h-2.5 rounded-full bg-white"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-gray-600 hover:bg-gray-500 transition-colors"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
