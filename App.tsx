
import React, { useState, useCallback } from 'react';
import { Page, Solution, Product, Article } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import SolutionDetailPage from './pages/SolutionDetailPage';
import ProductDetailPage from './pages/ProductDetailPage';
import LoginPage from './pages/LoginPage';
import NewsDetailPage from './pages/NewsDetailPage';
import SolutionsFinderPage from './pages/SolutionsFinderPage';


const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentSolution, setCurrentSolution] = useState<Solution | null>(null);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

  const navigateTo = useCallback((page: Page, data?: any) => {
    if (page === 'careers') {
      window.location.href = 'https://www.linkedin.com/company/skylineinfrastructure/';
      return;
    }

    setCurrentPage(page);
    window.scrollTo(0, 0);

    if (page === 'solution-detail' && data) {
      setCurrentSolution(data as Solution);
    } else if (page === 'product-detail' && data) {
      setCurrentProduct(data as Product);
    } else if (page === 'news-detail' && data) {
      setCurrentArticle(data as Article);
    } else {
      setCurrentSolution(null);
      setCurrentProduct(null);
      setCurrentArticle(null);
    }
  }, []);


  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'solutions':
        return <SolutionsPage navigateTo={navigateTo} />;
      case 'products':
        return <ProductsPage navigateTo={navigateTo} />;
      case 'solution-detail':
        return currentSolution ? <SolutionDetailPage solution={currentSolution} navigateTo={navigateTo} /> : <SolutionsPage navigateTo={navigateTo} />;
      case 'product-detail':
        return currentProduct ? <ProductDetailPage product={currentProduct} navigateTo={navigateTo} /> : <ProductsPage navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'news':
        return <NewsPage navigateTo={navigateTo} />;
      case 'news-detail':
        return currentArticle ? <NewsDetailPage article={currentArticle} navigateTo={navigateTo} /> : <NewsPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <LoginPage />;
      case 'solutions-finder':
        return <SolutionsFinderPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;