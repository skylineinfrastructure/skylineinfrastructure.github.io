import React from 'react';
import Card from '../components/Card';
import { Page } from '../types';
import { solutions } from '../data';

interface SolutionsPageProps {
  navigateTo: (page: Page, data?: any) => void;
}

const SolutionsPage: React.FC<SolutionsPageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-gray-50">
      <div className="bg-white pt-20 pb-16 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Solutions for Every Market</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            Skyline Infrastructure provides tailored solutions to meet the unique challenges of your real estate portfolio.
          </p>
        </div>
      </div>

      {/* Solution Finder CTA */}
      <div className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find the Right Fit</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600">
            Let us help you find the perfect solution. Take our quick quiz to get a personalized recommendation.
          </p>
          <button onClick={() => navigateTo('solutions-finder')} className="px-8 py-3 text-lg font-semibold text-white primary-bg rounded-lg hover:opacity-90 transition-transform transform hover:scale-105 shadow-lg">
            Start the Quiz
          </button>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <Card
                key={solution.id}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                linkText="Learn More"
                onLinkClick={() => navigateTo('solution-detail', solution)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;