import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  onLinkClick?: () => void;
}

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Card: React.FC<CardProps> = ({ icon, title, description, linkText, onLinkClick }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 relative">
       <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-orange-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="flex items-center p-8">
        <div className="w-16 h-16 text-blue-600">
            {icon}
        </div>
      </div>
      <div className="p-6 pt-0 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 text-base flex-grow">{description}</p>
        {linkText && onLinkClick && (
          <button onClick={onLinkClick} className="mt-6 font-semibold primary-text hover:text-opacity-80 self-start flex items-center">
            {linkText}
            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;