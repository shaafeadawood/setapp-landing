import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-brand-dark py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <h2 className="text-display-section font-bold text-primary-white max-w-lg">
            What you get on Setapp.
          </h2>
          <p className="text-gray-400 max-w-md text-body-large leading-relaxed">
            With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 - Full Width on Mobile, First in grid */}
            <div className="col-span-1 md:col-span-2 bg-gradient-to-r from-card-purple to-card-pink rounded-3xl p-1 overflow-hidden min-h-[400px] relative group">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/1200/600?blur=10')] opacity-20 mix-blend-overlay"></div>
                <div className="relative z-10 h-full flex flex-col md:flex-row items-center">
                    <div className="p-10 md:p-16 flex-1 text-center md:text-left">
                        <div className="inline-block p-3 bg-primary-white/20 rounded-2xl mb-6 backdrop-blur-sm">
                             <svg className="w-8 h-8 text-primary-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-display-card font-bold text-primary-dark mb-4">Keep your Mac clean</h3>
                        <p className="text-primary-dark/80 text-body-large">Remove junk, scan for malware, wipe email attachments</p>
                    </div>
                    <div className="flex-1 h-full w-full min-h-[300px] flex items-center justify-center p-8">
                         {/* Abstract UI Representation */}
                         <div className="w-full max-w-md aspect-video bg-primary-white/10 backdrop-blur-lg rounded-xl border border-primary-white/20 shadow-2xl p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                              <div className="absolute top-0 left-0 right-0 h-8 bg-primary-white/10 flex items-center px-4 space-x-2">
                                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                              </div>
                              <div className="mt-8 flex items-center justify-center h-40">
                                   <div className="w-32 h-32 rounded-full border-[12px] border-pink-400/50 flex items-center justify-center relative">
                                       <span className="text-4xl text-primary-white font-bold">5.2</span>
                                       <span className="absolute -bottom-8 text-sm text-primary-white/70">GB Cleaned</span>
                                   </div>
                              </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FFF8F0] rounded-3xl p-8 min-h-[450px] flex flex-col relative overflow-hidden group">
                 <div className="mb-auto">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                         <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </div>
                    <h3 className="text-display-card font-bold text-primary-dark mb-2">Write code</h3>
                    <p className="text-gray-600 text-body-base">Create applications in more than 25 languages</p>
                 </div>
                 <div className="mt-8 relative h-64 w-full bg-[#1e1e1e] rounded-xl shadow-2xl transform group-hover:translate-y-2 transition-transform duration-500 p-4 font-mono text-xs overflow-hidden">
                      <div className="text-gray-500 mb-2">// building the future</div>
                      <div className="text-purple-400">import</div> <span className="text-blue-300">React</span> <span className="text-purple-400">from</span> <span className="text-green-300">'react'</span>;
                      <br/>
                      <div className="mt-2">
                          <span className="text-blue-400">function</span> <span className="text-yellow-300">App</span>() {'{'}
                          <br/>&nbsp;&nbsp;<span className="text-purple-400">return</span> (
                          <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-300">&lt;</span><span className="text-red-400">div</span><span className="text-gray-300">&gt;</span>
                          <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello World
                          <br/>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-300">&lt;/</span><span className="text-red-400">div</span><span className="text-gray-300">&gt;</span>
                          <br/>&nbsp;&nbsp;);
                          <br/>{'}'}
                      </div>
                 </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1C1C1E] rounded-3xl p-8 min-h-[450px] flex flex-col relative overflow-hidden border border-gray-800 group">
                 <div className="mb-auto">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center mb-6">
                         <svg className="w-6 h-6 text-primary-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="text-display-card font-bold text-primary-white mb-2">Join meetings in a click</h3>
                    <p className="text-gray-400 text-body-base">Quickly access links to your meetings from menu bar</p>
                 </div>
                 <div className="mt-8 flex justify-center">
                      <div className="w-64 bg-[#2C2C2E] rounded-xl p-4 shadow-2xl border border-gray-700 transform group-hover:scale-105 transition-transform">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Next Meeting</div>
                          <div className="flex items-center gap-3 mb-4">
                              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                  <span className="text-primary-white text-xs font-bold">Zoom</span>
                              </div>
                              <div>
                                  <div className="text-primary-white text-sm font-medium">Design Review</div>
                                  <div className="text-gray-500 text-xs">10:00 - 11:00 AM</div>
                              </div>
                          </div>
                          <button className="w-full bg-blue-600 hover:bg-blue-500 text-primary-white text-sm font-medium py-2 rounded-lg transition-colors active:scale-95">
                              Join Meeting
                          </button>
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
