
import React from 'react';
import { Page } from '../types';

interface AboutPageProps {
  navigateTo: (page: Page) => void;
}

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="text-center p-8 bg-white rounded-xl border border-slate-200/80 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );

const VisionIcon: React.FC = () => (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A7C7FF" />
                <stop offset="100%" stopColor="#377DFF" />
            </linearGradient>
            <filter id="visionGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur"/>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.5 0" result="glow"/>
                <feComposite in="glow" in2="SourceGraphic" operator="over"/>
            </filter>
        </defs>
        <g filter="url(#visionGlow)">
            <path d="M 50 150 Q 200 50, 350 150 T 50 150" fill="url(#visionGrad)" opacity="0.1" />
            <path d="M 50 150 Q 200 50, 350 150" stroke="url(#visionGrad)" strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>
        <circle cx="200" cy="150" r="50" fill="white" />
        <path d="M180 150 l15 15 l30 -30" stroke="#377DFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
);

const AboutPage: React.FC<AboutPageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-slate-50">
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Powering the Next Generation of Real Estate Operations</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-slate-600">
            Skyline Infrastructure builds enterprise-grade software that powers end-to-end rental and property operations. We focus on reliability, security, and interoperability—so customers can scale confidently, reduce operating costs, and deliver consistent resident experiences.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 mb-4 text-lg">
               Our mission is to provide a single, secure, and reliable cloud-native platform that gives owners, operators, and institutional landlords the real-time visibility and control they need to succeed.
              </p>
              <p className="text-slate-600 text-lg">
               We are committed to building interoperable tools that reduce operating costs and help our customers deliver a consistent, high-quality resident experience, backed by enterprise-grade security and reliability.
              </p>
            </div>
            <div className="flex items-center justify-center">
                <VisionIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">Our Core Principles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ValueCard 
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m-9 9a9 9 0 019-9"/></svg>}
                title="Reliability at Scale"
                description="Highly available, low-latency services designed for peak traffic and enterprise workloads."
            />
            <ValueCard 
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>}
                title="Security by Design"
                description="Encryption, least-privilege access, and continuous monitoring to protect your data and ensure compliance."
            />
             <ValueCard 
                icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>}
                title="Open & Interoperable"
                description="Clean REST/GraphQL APIs to integrate seamlessly with your existing PMS, CRM, and accounting systems."
            />
          </div>
        </div>
      </div>

      <div className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Join Our Team</h2>
          <p className="max-w-2xl mx-auto mb-8 text-slate-600">
            We're always looking for talented individuals to join our mission. Explore our open positions and discover a rewarding career at Skyline Infrastructure.
          </p>
          <button onClick={() => navigateTo('careers')} className="button-primary text-lg">
            View Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;