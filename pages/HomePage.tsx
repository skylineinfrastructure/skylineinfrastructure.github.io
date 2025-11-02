import React from 'react';
import Card from '../components/Card';
import { Page } from '../types';
import { solutions, productSuites } from '../data';

interface HomePageProps {
  navigateTo: (page: Page, data?: any) => void;
}

const SolutionsPathIcon: React.FC = () => (
    <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#FFFFFF"/>
        </linearGradient>
        <filter id="iconGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <path d="M 50 20 L 250 20" stroke="#4F8BFF" strokeWidth="2" strokeDasharray="5 5" opacity="0.5"/>
      <path d="M 50 180 L 250 180" stroke="#4F8BFF" strokeWidth="2" strokeDasharray="5 5" opacity="0.5"/>
      
      <path d="M 40 100 C 100 -20, 150 220, 260 100" stroke="url(#pathGradient)" strokeWidth="6" fill="none" strokeLinecap="round" className="animate-draw-path"/>
      
      <g filter="url(#iconGlow)">
        <circle cx="40" cy="100" r="10" fill="#FFFFFF"/>
        <circle cx="260" cy="100" r="15" fill="#FFFFFF"/>
        <path d="M 253 100 l 5 5 l 9 -10" stroke="#3B82F6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
    </svg>
);

const HeroIllustration: React.FC = () => (
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradSky" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
            <linearGradient id="gradBuilding1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#E0E7FF" />
            </linearGradient>
             <linearGradient id="gradBuilding2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D1D5DB" />
                <stop offset="100%" stopColor="#9CA3AF" />
            </linearGradient>
            <filter id="softGlowHero" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
                <feFlood floodColor="#377DFF" result="flood" />
                <feComposite in="flood" in2="blur" operator="in" result="glow" />
                <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Background elements */}
        <circle cx="400" cy="300" r="300" fill="url(#gradSky)" opacity="0.5" />
        <path d="M 0 600 L 0 400 C 200 350, 600 350, 800 400 L 800 600 Z" fill="#F8FAFC"/>
        
        {/* Far buildings */}
        <rect x="200" y="280" width="80" height="320" rx="5" fill="#D1D5DB" opacity="0.6"/>
        <rect x="550" y="250" width="100" height="350" rx="5" fill="#E5E7EB" opacity="0.8"/>

        {/* Mid buildings */}
        <g filter="url(#softGlowHero)">
            <rect x="300" y="200" width="120" height="400" rx="8" fill="url(#gradBuilding1)"/>
            <rect x="440" y="240" width="90" height="360" rx="8" fill="url(#gradBuilding1)"/>
            
            {/* Data line */}
            <path d="M 360 200 Q 400 120, 500 240" stroke="#377DFF" strokeWidth="4" fill="none" strokeDasharray="8" strokeLinecap="round" className="animate-draw-path" style={{animationDelay: '1s'}}/>
            <circle cx="360" cy="200" r="8" fill="#F97316"/>
            <circle cx="500" cy="240" r="8" fill="#F97316"/>
        </g>
        
        {/* Front buildings */}
        <rect x="150" y="300" width="100" height="300" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
        <rect x="580" y="320" width="120" height="280" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
        
        {/* Window details */}
        <g fill="#A7C7FF" opacity="0.7">
            <rect x="160" y="310" width="15" height="20" rx="2"/>
            <rect x="185" y="310" width="15" height="20" rx="2"/>
            <rect x="210" y="310" width="15" height="20" rx="2"/>
            
            <rect x="590" y="330" width="20" height="15" rx="2"/>
            <rect x="620" y="330" width="20" height="15" rx="2"/>
            <rect x="650" y="330" width="20" height="15" rx="2"/>
        </g>
    </svg>
);


const ReliabilityIcon: React.FC = () => (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24" stroke="#377DFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24" stroke="#A7C7FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2 8"/>
        <path d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z" stroke="#377DFF" stroke-width="4" stroke-linejoin="round"/>
    </svg>
);
  
const SecurityIcon: React.FC = () => (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M43 22.0132V12L24 4L5 12V22.0132C5 33.3521 12.6343 43.1923 24 44C35.3657 43.1923 43 33.3521 43 22.0132Z" fill="#A7C7FF" stroke="#377DFF" stroke-width="4" stroke-linejoin="round"/>
        <path d="M16 24L22 30L34 18" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const InteroperabilityIcon: React.FC = () => (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 33L28 15" stroke="#A7C7FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 19V29" stroke="#377DFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13 15V33" stroke="#377DFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M35 15V33" stroke="#377DFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M42 19V29" stroke="#377DFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);


const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  const featuredSolutions = solutions.slice(0, 3);
  const featuredProducts = productSuites.flatMap(suite => suite.products).slice(0, 2);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-24 pb-32 lg:pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-6 text-slate-900 opacity-0 animate-fade-in-up">
                        The Future of Real Estate Management
                    </h1>
                    <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 mb-10 opacity-0 animate-fade-in-up animation-delay-200">
                        Crafted for versatility, Skyline equips owners, operators, and landlords with innovative tools to create a distinctive online presence and streamline operations.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-12 opacity-0 animate-fade-in-up animation-delay-400">
                        <button onClick={() => navigateTo('solutions')} className="button-primary w-full sm:w-auto text-lg">
                            Explore Platform
                        </button>
                        <button onClick={() => navigateTo('contact')} className="button-secondary w-full sm:w-auto text-lg">
                            View Demos
                        </button>
                    </div>
                    <div className="flex justify-center lg:justify-start items-baseline space-x-12 opacity-0 animate-fade-in-up animation-delay-600">
                        <div>
                            <p className="text-4xl font-extrabold text-slate-900">351,000+</p>
                            <p className="text-slate-500">Professionals Choose Skyline</p>
                        </div>
                        <div>
                            <p className="text-4xl font-extrabold text-slate-900">2,300+</p>
                            <p className="text-slate-500">Top-Rated User Reviews</p>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    <div className="w-full max-w-2xl animate-float">
                        <HeroIllustration />
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[150px]"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.3-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-slate-100"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-slate-100"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,122.49,0,184.82,15.7,63.45,15.84,135.34,36.8,209.84,33.54,76.05-3.32,146.39-38.74,209.84-33.54,76.05-3.32,146.39-38.74,209.84-33.54,76.05-3.32,146.39-38.74,212.09-32.34v27.28L0,0Z" className="fill-slate-100"></path></svg>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Solutions for Every Portfolio</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Tailored solutions for residential, commercial, and investment portfolios to drive growth and efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSolutions.map((solution, index) => (
              <div key={solution.id} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${200 + index * 200}ms`}}>
                <Card
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  linkText="Explore Solution"
                  onLinkClick={() => navigateTo('solution-detail', solution)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Powered by Our Core Products</h2>
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    From enterprise-grade platforms to resident-facing portals, our products form the backbone of your operations.
                </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {featuredProducts.map((product, index) => (
                    <div key={product.id} className="bg-slate-50/70 rounded-xl border border-slate-200/80 p-8 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left group transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-300/50 opacity-0 animate-fade-in-up" style={{ animationDelay: `${400 + index * 200}ms`}}>
                        <div className="flex-shrink-0 w-16 h-16 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                            {product.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>
                            <p className="mt-2 text-slate-600">{product.description}</p>
                            <button onClick={() => navigateTo('product-detail', product)} className="mt-4 font-semibold primary-text">
                                Learn More &rarr;
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

      {/* Why Skyline Section */}
      <section className="py-24 bg-slate-100 relative overflow-hidden">
        <div className="deco-shape w-64 h-64 -top-20 -left-20"></div>
        <div className="deco-shape w-80 h-80 -bottom-32 -right-32"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">Why Skyline Infrastructure?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We focus on reliability, security, and interoperability so you can scale with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group p-8 bg-white/70 rounded-xl border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-300/50 opacity-0 animate-fade-in-up backdrop-blur-sm" style={{ animationDelay: '600ms' }}>
              <div className="w-16 h-16 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                <ReliabilityIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Reliability at Scale</h3>
              <p className="mt-2 text-slate-600">Highly available, low-latency services designed for peak traffic and enterprise workloads.</p>
            </div>
            <div className="group p-8 bg-white/70 rounded-xl border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-300/50 opacity-0 animate-fade-in-up backdrop-blur-sm" style={{ animationDelay: '800ms' }}>
              <div className="w-16 h-16 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                <SecurityIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Security by Design</h3>
              <p className="mt-2 text-slate-600">Encryption, least-privilege access, and continuous monitoring to protect your data.</p>
            </div>
            <div className="group p-8 bg-white/70 rounded-xl border border-slate-200/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-blue-300/50 opacity-0 animate-fade-in-up backdrop-blur-sm" style={{ animationDelay: '1000ms' }}>
              <div className="w-16 h-16 mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                <InteroperabilityIcon />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Open & Interoperable</h3>
              <p className="mt-2 text-slate-600">Clean REST/GraphQL APIs to integrate with your existing PMS, CRM, and accounting systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Finder CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-900 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)', backgroundSize: '1.5rem 1.5rem' }}></div>
                <div className="relative grid lg:grid-cols-2 items-center gap-8 p-12 lg:p-16">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Not Sure Where to Start?</h2>
                        <p className="max-w-xl mx-auto lg:mx-0 text-lg text-slate-300 mb-8">
                            Answer a few simple questions and we'll recommend the perfect combination of Skyline products and services for your business.
                        </p>
                        <button
                            onClick={() => navigateTo('solutions-finder')}
                            className="button-primary bg-white text-blue-700 hover:bg-slate-100 animate-glow-pulse"
                        >
                            Find Your Solution
                        </button>
                    </div>
                    <div className="hidden lg:flex items-center justify-center">
                        <SolutionsPathIcon />
                    </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;