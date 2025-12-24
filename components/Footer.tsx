import React from 'react';
import { LogoIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-800 pt-16 pb-8 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto">
        
        {/* Newsletter & Logo */}
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12">
            <div className="max-w-sm">
                <div className="flex items-center gap-2 mb-6">
                    <LogoIcon className="w-6 h-6 text-gray-400" />
                    <span className="text-primary-white font-bold text-lg tracking-tight">SETAPP</span>
                </div>
                <p className="text-gray-400 mb-4">Updates from our team, written with love ❤️</p>
                <form className="flex gap-2">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-[#2C2C2E] border border-gray-700 rounded-lg px-4 py-2 text-primary-white placeholder-gray-500 focus:outline-none focus:border-gray-500 flex-1 transition-colors"
                    />
                    <button type="submit" className="bg-primary-white text-primary-dark px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition-colors active:scale-95">
                        &gt;
                    </button>
                </form>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
                <div className="flex flex-col space-y-3">
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Home</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">How It Works</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">All Apps</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Pricing</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Setapp for Teams</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Blog</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Podcast</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Download</a>
                </div>
                <div className="flex flex-col space-y-3">
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">About</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Support</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Education Discount</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Family Plan</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">For Developers</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Gift Cards</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Redeem Card or Code</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Setapp Reviews</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Affiliate Program</a>
                    <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Mac Developer Survey 2023</a>
                </div>
                <div className="flex flex-col space-y-3">
                     <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Getting started with Setapp</a>
                     <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Remote access to other Mac</a>
                     <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Fix macOS Ventura problems</a>
                     <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Best productivity apps</a>
                     <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Best YouTube downloaders</a>
                     <a href="#" className="text-gray-400 hover:text-primary-white transition-colors text-label-nav">Uninstall apps</a>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <div className="flex items-center gap-4">
                 <span className="bg-[#2C2C2E] text-xs text-gray-400 px-2 py-1 rounded border border-gray-700">DMCA PROTECTED</span>
                 <div className="flex items-center gap-1 text-gray-400 cursor-pointer hover:text-primary-white transition-colors">
                      <span>🇺🇸</span>
                      <span className="text-label-small">English</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                 </div>
             </div>

             <div className="text-gray-500 text-xs text-center md:text-left">
                 <p className="mb-2">© 2025 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH</p>
                 <div className="space-x-4">
                     <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
                     <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                     <a href="#" className="hover:text-gray-300 transition-colors">Cookie Settings</a>
                 </div>
             </div>

             <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-primary-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </a>
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
