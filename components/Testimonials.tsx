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
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                 <h2 className="text-5xl font-bold text-black mb-4">Setapp in your words.</h2>
                 <p className="text-gray-500 text-base">What you say about how Setapp powers you up.</p>
            </div>
             <div className="flex gap-4 mt-6 md:mt-0">
                 <div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-primary-white text-xs font-bold hover:opacity-80 transition-opacity cursor-pointer">f</div>
                 <div className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-primary-white text-xs font-bold hover:opacity-80 transition-opacity cursor-pointer">t</div>
                 <div className="w-8 h-8 rounded-full bg-[#E1306C] flex items-center justify-center text-primary-white text-xs font-bold hover:opacity-80 transition-opacity cursor-pointer">i</div>
                 <div className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center text-primary-white text-xs font-bold hover:opacity-80 transition-opacity cursor-pointer">y</div>
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className={`p-8 rounded-2xl flex flex-col justify-between h-full min-h-[280px] transition-transform hover:-translate-y-1 duration-300 ${
                t.id === 1 ? 'bg-[#7E80A8] text-primary-white' : 
                t.id === 2 ? 'bg-[#E3C598] text-primary-dark' : 
                'bg-[#7A556B] text-primary-white'
            }`}>
              <p className="text-xl font-medium leading-relaxed mb-8">
                "{t.content}"
              </p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3">
                   {/* Avatar Placeholder */}
                   <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-xs font-bold text-primary-white uppercase`}>
                       {t.name.charAt(0)}{t.name.split(' ')[1]?.charAt(0)}
                   </div>
                   <div>
                       <div className="font-bold text-sm">{t.name}</div>
                       <div className={`text-xs ${t.id === 2 ? 'text-gray-700' : 'text-gray-300'}`}>{t.handle}</div>
                   </div>
                </div>
                {/* Platform Icon */}
                <div className="opacity-50">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination Dots for Testimonials */}
        <div className="flex justify-center gap-3 mt-12">
            <button className="w-2.5 h-2.5 rounded-full bg-primary-dark"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors"></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
