import React, { useState } from 'react';
import { LogoIcon, SearchIcon, MenuIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-white/95 backdrop-blur-sm border-b border-border-subtle transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
          <LogoIcon className="w-8 h-8 text-brand-accent" />
          <div className="flex flex-col">
            <span className="text-primary-dark font-bold text-lg tracking-tight leading-none">SETAPP</span>
            <span className="text-[10px] text-text-muted font-medium leading-none">
              by <span className="font-serif">MacPaw</span>
            </span>
          </div>
        </div>

        {/* Search Bar - Hidden on Mobile */}
        <div className="hidden md:flex flex-1 max-w-lg mx-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="text-text-muted" />
          </div>
          <input 
            type="text" 
            placeholder="Search for apps and guides" 
            className="block w-full pl-10 pr-3 py-2 border-none rounded-lg bg-surface-accent text-primary-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-accent/50 text-label-nav transition-all"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          <a href="#" className="text-label-nav text-text-muted hover:text-primary-dark transition-colors">
            Marketplace
          </a>
          <a href="#" className="text-label-nav text-text-muted hover:text-primary-dark transition-colors">
            Membership
          </a>
          <a href="#" className="text-label-nav text-text-muted hover:text-primary-dark transition-colors">
            Menu
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden sm:flex items-center space-x-3 ml-4">
          <a href="#" className="text-label-nav text-text-muted hover:text-primary-dark transition-colors">
            Sign in
          </a>
          <a href="#" className="text-label-nav font-bold text-primary-dark bg-transparent hover:bg-surface-accent border border-border-subtle rounded-lg px-4 py-2 transition-all active:scale-95">
            Try free
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
