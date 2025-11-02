import React from 'react';

const HelpButton: React.FC = () => {
  return (
    <button className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 primary-bg text-white rounded-full shadow-lg hover:opacity-90 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.875 7.5a2.125 2.125 0 114.25 0c0 .992-.61 1.63-1.423 2.186a2.125 2.125 0 00-1.404 2.064V12.5m0 2.5h.01"></path>
      </svg>
      <span className="sr-only">Help</span>
    </button>
  );
};

export default HelpButton;