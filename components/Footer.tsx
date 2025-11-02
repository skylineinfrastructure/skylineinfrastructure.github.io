import React from 'react';
import { Page } from '../types';
import { solutions, productSuites } from '../data';

interface FooterProps {
  navigateTo: (page: Page, data?: any) => void;
}

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="7" fill="#4285F4"/>
    <rect x="12" y="0" width="12" height="32" rx="6" transform="rotate(20 12 0)" fill="#4285F4"/>
  </svg>
);

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const featuredProducts = productSuites.slice(0, 2).flatMap(s => s.products).slice(0, 4);
  const featuredSolutions = solutions.slice(0, 4);

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          <div className="md:col-span-3 lg:col-span-1">
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => navigateTo('home')}>
              <LogoIcon className="h-8 w-auto" />
              <span className="ml-3 text-3xl font-bold text-white tracking-tight">Skyline</span>
            </div>
            <p className="text-sm text-gray-400">
              The most flexible and comprehensive platform for real estate management.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Products</h3>
            <ul className="mt-4 space-y-3">
              {featuredProducts.map(p => (
                 <li key={p.id}><button onClick={() => navigateTo('product-detail', p)} className="hover:text-white text-sm transition-colors text-left">{p.title}</button></li>
              ))}
               <li><button onClick={() => navigateTo('products')} className="hover:text-white text-sm font-bold transition-colors">View All &rarr;</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-3">
               {featuredSolutions.map(s => (
                 <li key={s.id}><button onClick={() => navigateTo('solution-detail', s)} className="hover:text-white text-sm transition-colors text-left">{s.title}</button></li>
               ))}
                <li><button onClick={() => navigateTo('solutions')} className="hover:text-white text-sm font-bold transition-colors">View All &rarr;</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3">
              <li><button onClick={() => navigateTo('about')} className="hover:text-white text-sm transition-colors">About Us</button></li>
              <li><button onClick={() => navigateTo('news')} className="hover:text-white text-sm transition-colors">Newsroom</button></li>
              <li><button onClick={() => navigateTo('careers')} className="hover:text-white text-sm transition-colors">Careers</button></li>
              <li><button onClick={() => navigateTo('contact')} className="hover:text-white text-sm transition-colors">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Popular Links</h3>
            <ul className="mt-4 space-y-3">
                <li><a href="#" className="hover:text-white text-sm transition-colors">Client Central</a></li>
                <li><a href="#" className="hover:text-white text-sm transition-colors">Independent Consultants</a></li>
                <li><a href="#" className="hover:text-white text-sm transition-colors">Interfaces & Integrations</a></li>
                <li><a href="#" className="hover:text-white text-sm transition-colors">Newsletter Sign-up</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Skyline Infrastructure. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;