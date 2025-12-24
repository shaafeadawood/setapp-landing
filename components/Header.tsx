import React, { useState } from 'react';
import { LogoIcon, SearchIcon, MenuIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-[60px] flex items-center justify-between gap-8">
        {/* Logo Section */}
        <div className="flex items-center gap-2 shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1a1a1a">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5M2 12l10 5 10-5" opacity="0.7"/>
            </svg>
          </div>
        </div>

        {/* Search Bar removed - not in screenshot */}

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
            Shop at Setapp
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
            All Setapp
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
            For Teams
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
            Blog
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
            Podcast
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
            Log in
          </a>
          <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">
            Sign Up
          </a>
          <a href="#" className="text-sm font-semibold text-white bg-transparent hover:bg-white/10 border border-white/20 rounded-lg px-5 py-2 transition-all active:scale-95">
            Try Free
          </a>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-primary-white border-t border-border-subtle absolute w-full px-4 py-4 shadow-xl animate-slide-up">
           <div className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="Search..." 
              className="block w-full px-3 py-2 rounded-lg bg-surface-accent text-primary-dark border-none focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            <a href="#" className="text-primary-dark text-label-nav font-medium block py-1 hover:opacity-70 transition-opacity">Marketplace</a>
            <a href="#" className="text-primary-dark text-label-nav font-medium block py-1 hover:opacity-70 transition-opacity">Membership</a>
            <div className="h-px bg-border-subtle my-2"></div>
            <a href="#" className="text-primary-dark text-label-nav font-medium block py-1 hover:opacity-70 transition-opacity">Sign in</a>
            <a href="#" className="bg-primary-dark text-primary-white font-bold text-center block py-2 rounded-lg hover:bg-primary-dark/90 active:scale-95 transition-all">Try free</a>
           </div>
        </div>
      )}
    </header>
  );
};

export default Header;
