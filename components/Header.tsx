import React, { useState } from 'react';
import { Page, NavLink } from '../types';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#377DFF" />
        <stop offset="100%" stopColor="#80A9FF" />
      </linearGradient>
    </defs>
    <circle cx="7" cy="7" r="7" fill="url(#logoGrad)"/>
    <rect x="12" y="0" width="12" height="32" rx="6" transform="rotate(20 12 0)" fill="url(#logoGrad)"/>
  </svg>
);


const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { id: 'products', label: 'Products' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'about', label: 'About us' },
    { id: 'careers', label: 'Careers' },
    { id: 'news', label: 'Newsroom' },
    { id: 'contact', label: 'Contact us' },
  ];
  
  const handleNavClick = (page: Page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  const NavItem: React.FC<{page: Page, label: string}> = ({ page, label }) => {
    const isActive = currentPage === page;
    return (
      <button
        onClick={() => handleNavClick(page)}
        className={`relative px-4 py-2 text-base font-semibold transition-colors duration-300 ${
          isActive ? 'primary-text' : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute inset-0 bg-blue-100 rounded-full -z-10"></span>
        )}
      </button>
    )
  }

  return (
    <header className="glass-header sticky top-0 z-50 border-b border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home')}
            aria-label="Go to homepage"
          >
            <LogoIcon className="h-8 w-auto" />
            <span className="ml-3 text-3xl font-extrabold text-slate-900 tracking-tight">Skyline</span>
          </div>
          <nav className="hidden lg:flex items-center space-x-2">
            <NavItem page="home" label="Home" />
            {navLinks.map((link) => (
              <NavItem key={link.id} page={link.id} label={link.label} />
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <button onClick={() => navigateTo('login')} className="button-primary">
              Client Login
            </button>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              className="text-slate-700 hover:text-blue-700 focus:outline-none"
            >
              {isMenuOpen ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <button
                onClick={() => handleNavClick('home')}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === 'home' ? 'bg-blue-50 primary-text' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                Home
              </button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === link.id
                    ? 'bg-blue-50 primary-text'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-slate-200">
            <div className="px-5">
              <button onClick={() => { navigateTo('login'); setIsMenuOpen(false); }} className="block w-full text-center px-5 py-2.5 text-base font-medium text-white primary-bg rounded-md hover:opacity-90">
                Client Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;