import React from 'react';

export type Page = 'home' | 'solutions' | 'products' | 'about' | 'news' | 'contact' | 'solution-detail' | 'product-detail' | 'careers' | 'login' | 'news-detail' | 'solutions-finder';

export interface NavLink {
  id: Page;
  label: string;
}

export interface Solution {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  features: { title: string; description: string; icon: React.ReactNode }[];
  benefits: string[];
}

export interface Product {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    longDescription: string;
    features: { title: string; description: string; icon: React.ReactNode }[];
    benefits: string[];
}

export interface ProductSuite {
    id: string;
    name: string;
    description: string;
    products: Product[];
}

export interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}