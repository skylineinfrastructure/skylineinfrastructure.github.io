import React from 'react';
import Card from '../components/Card';
import { Page } from '../types';
import { productSuites } from '../data';

interface ProductsPageProps {
  navigateTo: (page: Page, data?: any) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ navigateTo }) => {
  return (
    <div className="bg-gray-50">
      <div className="bg-white pt-20 pb-16 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Products</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">
            A comprehensive suite of innovative property management software and services for any size business, in every real estate market.
          </p>
        </div>
      </div>
      <div className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {productSuites.map((suite) => (
              <section key={suite.id}>
                <div className="text-left mb-12">
                  <h2 className="text-3xl font-extrabold text-gray-900">{suite.name}</h2>
                  <p className="mt-3 text-lg text-gray-600 max-w-3xl">{suite.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {suite.products.map((product) => (
                    <Card
                      key={product.id}
                      icon={product.icon}
                      title={product.title}
                      description={product.description}
                      linkText="Learn More"
                      onLinkClick={() => navigateTo('product-detail', product)}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;