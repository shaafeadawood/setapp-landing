import React from 'react';

const PricingBanner: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F5F5F7] rounded-3xl p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
           <div className="absolute top-1/2 left-10 transform -translate-y-1/2 opacity-5 pointer-events-none">
                <div className="w-96 h-96 grid grid-cols-2 gap-2 rotate-45">
                    <div className="bg-black rounded-lg"></div>
                    <div className="bg-black rounded-lg"></div>
                    <div className="bg-black rounded-lg"></div>
                    <div className="bg-black rounded-lg"></div>
                </div>
           </div>

           <div className="relative z-10 max-w-xl">
               <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight leading-tight">
                   <span className="whitespace-nowrap">Superpowers starting $9.99/month.</span>
                   <br/>
                   Free for 7 days.
               </h2>
               <div className="flex flex-col sm:flex-row gap-4 mt-8">
                   <button className="bg-black hover:bg-gray-900 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors shadow-lg active:scale-95">
                       Get started now
                   </button>
                   <button className="bg-transparent border border-gray-300 hover:border-gray-400 hover:bg-gray-100 text-black px-8 py-3.5 rounded-xl font-medium transition-colors active:scale-95">
                       More about Setapp
                   </button>
               </div>
           </div>
           
           <div className="hidden lg:block w-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
