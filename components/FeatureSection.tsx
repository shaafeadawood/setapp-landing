import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-[#1a1a1a] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <h2 className="text-5xl md:text-6xl font-bold text-white max-w-lg leading-tight">
            What you get on Setapp.
          </h2>
          <p className="text-gray-400 max-w-md text-lg leading-relaxed">
            With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Keep your Mac clean - Pink gradient with screenshot */}
            <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-pink-300 to-pink-400 rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px] relative group">
                <div className="relative z-10 h-full flex flex-col p-8 md:p-12 lg:p-16 pt-12 md:pt-16 lg:pt-20">
                    {/* Top section - Icon and Text side by side with more spacing */}
                    <div className="flex items-start gap-6 mb-12 md:mb-16 lg:mb-20">
                        {/* Icon on the left */}
                        <div className="flex-shrink-0">
                             <img 
                               src="/images/img2.png" 
                               alt="CleanMyMac app icon" 
                               className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-[20px] shadow-lg"
                             />
                        </div>
                        {/* Text on the right */}
                        <div className="flex-1">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">Keep your Mac clean</h3>
                            <p className="text-gray-800 text-base md:text-lg lg:text-xl leading-relaxed">Remove junk, scan for malware, wipe email attachments</p>
                        </div>
                    </div>
                    
                    {/* Bottom section - Large screenshot */}
                    <div className="flex-1 flex items-end justify-center pb-4 md:pb-6">
                         <div className="w-full max-w-4xl relative">
                              <img 
                                src="/images/img1.png" 
                                alt="CleanMyMac interface showing System Junk cleaner" 
                                className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                              />
                         </div>
                    </div>
                </div>
            </div>

            {/* Card 2 - Write code - Cream/beige card with code editor */}
            <div className="bg-[#FFF8F0] rounded-3xl p-8 md:p-10 min-h-[450px] md:min-h-[500px] flex flex-col relative overflow-hidden group">
                 {/* Code editor screenshot at top */}
                 <div className="mb-6 relative flex-1">
                      <div className="w-full relative rounded-xl overflow-hidden shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                           <img 
                             src="/images/img4.png" 
                             alt="Code editor showing programming interface" 
                             className="w-full h-auto"
                           />
                      </div>
                 </div>
                 
                 {/* Icon, title and description at bottom */}
                 <div className="mt-auto">
                    <div className="mb-4">
                         <img 
                           src="/images/img3.png" 
                           alt="Code editor icon" 
                           className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-contain"
                         />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Write code</h3>
                    <p className="text-gray-700 text-base md:text-lg">Create applications in more than 25 languages</p>
                 </div>
            </div>

            {/* Card 3 - Join meetings - Dark blue card with meeting interface */}
            <div className="bg-gradient-to-br from-[#3B4F6B] to-[#2C3E50] rounded-3xl p-8 md:p-10 min-h-[450px] md:min-h-[500px] flex flex-col relative overflow-hidden group">
                 <div className="mb-6">
                    {/* Icon image from public folder */}
                    <div className="mb-6">
                         <img 
                           src="/images/img6.png" 
                           alt="Meeting icon" 
                           className="w-16 h-16 md:w-20 md:h-20 rounded-2xl object-contain"
                         />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Join meetings in a click</h3>
                    <p className="text-gray-300 text-lg">Quickly access links to your meetings from menu bar</p>
                 </div>
                 <div className="mt-auto flex-1 flex items-end justify-center pb-4">
                      <div className="w-full max-w-sm relative rounded-xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                           <img 
                             src="/images/img7.png" 
                             alt="Meeting scheduler interface with upcoming meetings" 
                             className="w-full h-auto"
                           />
                      </div>
                 </div>
            </div>
        </div>

        <div className="mt-16 text-center">
             <a href="#" className="inline-flex items-center text-primary-white text-body-base font-medium hover:text-brand-accent transition-colors group">
                 View all superpowers
                 <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
             </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
