import React from 'react';
import { Page, Solution } from '../types';

interface SolutionDetailPageProps {
  solution: Solution;
  navigateTo: (page: Page) => void;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
);


const SolutionDetailPage: React.FC<SolutionDetailPageProps> = ({ solution, navigateTo }) => {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-white pt-20 pb-16 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={() => navigateTo('solutions')} className="text-sm font-semibold primary-text hover:underline mb-4">
                &larr; Back to Solutions
            </button>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">{solution.title}</h1>
          <p className="mt-4 text-lg max-w-3xl text-gray-600">
            {solution.longDescription}
          </p>
        </div>
      </div>
      
      {/* Key Features Section */}
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 text-blue-600">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Benefits of Our Solution</h2>
                <ul className="space-y-4">
                    {solution.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                            <CheckIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span className="text-lg text-gray-700">{benefit}</span>
                        </li>
                    ))}
                </ul>
              </div>
          </div>
      </div>
      
      {/* CTA Section */}
      <div className="primary-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">Ready to See {solution.title} in Action?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-blue-100 text-lg">
            See how {solution.title} can transform your business. Schedule a personalized demo with one of our product experts today.
          </p>
          <button onClick={() => navigateTo('contact')} className="px-8 py-4 text-lg font-bold primary-text bg-white rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
            Request a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetailPage;