import React from 'react';
import { Page, Article } from '../types';
import { articles } from '../data';

interface NewsPageProps {
  navigateTo: (page: Page, data?: any) => void;
}

const DocumentTextIcon: React.FC = () => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
    </svg>
);

const NewsPage: React.FC<NewsPageProps> = ({ navigateTo }) => {
  const NewsCard: React.FC<{ article: Article }> = ({ article }) => (
    <div className="bg-white rounded-xl border border-gray-200/80 overflow-hidden h-full flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-300">
      <div className="flex items-center justify-center p-8 bg-gray-50 border-b border-gray-200/80">
        <div className="w-20 h-20 text-blue-600">
            <DocumentTextIcon />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
          <p className="text-sm text-gray-500 mb-2">{article.date}</p>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:primary-text transition-colors">{article.title}</h3>
          <p className="text-gray-600 text-base flex-grow">{article.excerpt}</p>
          <button onClick={() => navigateTo('news-detail', article)} className="mt-4 font-semibold primary-text hover:text-opacity-80 self-start flex items-center">
            Read More
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50">
      <div className="bg-white pt-20 pb-16 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Newsroom</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            The latest news, press releases, and insights from Skyline Infrastructure.
          </p>
        </div>
      </div>
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;