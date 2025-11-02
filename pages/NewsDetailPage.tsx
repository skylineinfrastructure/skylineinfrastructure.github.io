import React from 'react';
import { Page, Article } from '../types';

interface NewsDetailPageProps {
  article: Article;
  navigateTo: (page: Page) => void;
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ article, navigateTo }) => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <button onClick={() => navigateTo('news')} className="text-sm font-semibold primary-text hover:underline mb-8">
            &larr; Back to Newsroom
          </button>
          
          <article>
            <header>
              <p className="text-base text-gray-500 mb-2">{article.date}</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                {article.title}
              </h1>
            </header>
            
            <div className="prose prose-lg max-w-none mt-12 text-gray-700 text-lg space-y-6">
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph.trim()}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
