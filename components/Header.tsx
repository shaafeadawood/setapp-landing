import React, { useState } from 'react';
import { LogoIcon, SearchIcon, MenuIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between gap-8">
        <div className="flex items-center gap-2 shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1a1a1a">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" opacity="0.7"/>
            </svg>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors text-center">
            How it works
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors text-center">
            All apps
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors text-center">
            Pricing
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors text-center">
            For Teams
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors text-center">
            Blog
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors text-center">
            Podcast
          </a>
        </nav>

        <div className="hidden sm:flex items-center gap-6">
          <span className="text-white/30 text-lg">|</span>
          
          <div className="w-8 h-6 rounded-sm overflow-hidden">
            <svg viewBox="0 0 24 16" fill="none" className="w-full h-full">
              <rect width="24" height="16" fill="#B22234"/>
              <path d="M0 0h24v1.23H0V0zm0 2.46h24v1.23H0V2.46zm0 2.46h24v1.23H0V4.92zm0 2.46h24v1.23H0V7.38zm0 2.46h24v1.23H0V9.85zm0 2.46h24v1.23H0v-1.23zm0 2.46h24V16H0v-1.23z" fill="white"/>
              <rect width="9.6" height="7" fill="#3C3B6E"/>
              <g fill="white">
                <circle cx="1.5" cy="1" r="0.5"/>
                <circle cx="3" cy="1" r="0.5"/>
                <circle cx="4.5" cy="1" r="0.5"/>
                <circle cx="6" cy="1" r="0.5"/>
                <circle cx="7.5" cy="1" r="0.5"/>
                <circle cx="2.25" cy="2" r="0.5"/>
                <circle cx="3.75" cy="2" r="0.5"/>
                <circle cx="5.25" cy="2" r="0.5"/>
                <circle cx="6.75" cy="2" r="0.5"/>
                <circle cx="8.25" cy="2" r="0.5"/>
                <circle cx="1.5" cy="3" r="0.5"/>
                <circle cx="3" cy="3" r="0.5"/>
                <circle cx="4.5" cy="3" r="0.5"/>
                <circle cx="6" cy="3" r="0.5"/>
                <circle cx="7.5" cy="3" r="0.5"/>
                <circle cx="2.25" cy="4" r="0.5"/>
                <circle cx="3.75" cy="4" r="0.5"/>
                <circle cx="5.25" cy="4" r="0.5"/>
                <circle cx="6.75" cy="4" r="0.5"/>
                <circle cx="8.25" cy="4" r="0.5"/>
                <circle cx="1.5" cy="5" r="0.5"/>
                <circle cx="3" cy="5" r="0.5"/>
                <circle cx="4.5" cy="5" r="0.5"/>
                <circle cx="6" cy="5" r="0.5"/>
                <circle cx="7.5" cy="5" r="0.5"/>
                <circle cx="2.25" cy="6" r="0.5"/>
                <circle cx="3.75" cy="6" r="0.5"/>
                <circle cx="5.25" cy="6" r="0.5"/>
                <circle cx="6.75" cy="6" r="0.5"/>
                <circle cx="8.25" cy="6" r="0.5"/>
              </g>
            </svg>
          </div>
          
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
            Sign In
          </a>
          
          <a href="#" className="text-sm font-semibold text-white bg-transparent hover:bg-white/10 border border-white/30 rounded-lg px-5 py-2 transition-all active:scale-95">
            Try free
          </a>
        </div>

        <div className="sm:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-muted hover:text-primary-dark focus:outline-none active:opacity-70 transition-all"
            aria-label="Toggle menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden fixed top-[60px] left-0 right-0 bg-primary-white border-t border-border-subtle w-full px-4 py-4 z-50 shadow-xl animate-slide-up">
           <div className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="block w-full px-3 py-2 rounded-lg bg-surface-accent text-primary-dark border-none focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
              <a href="#" className="text-primary-dark text-label-nav font-medium block py-2 hover:opacity-70 transition-opacity">Marketplace</a>
              <a href="#" className="text-primary-dark text-label-nav font-medium block py-2 hover:opacity-70 transition-opacity">Membership</a>
            <div className="h-px bg-border-subtle my-2"></div>
              <a href="#" className="text-primary-dark text-label-nav font-medium block py-2 hover:opacity-70 transition-opacity">Sign in</a>
              <a href="#" className="bg-primary-dark text-primary-white font-bold text-center block py-3 rounded-lg hover:bg-primary-dark/90 active:scale-95 transition-all">Try free</a>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;
