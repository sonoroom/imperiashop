import React from 'react';
import { PromoSlider } from '../components/home/promo-slider';
import { CategoryBlocks } from '../components/home/category-blocks';
import { RecommendedProducts } from '../components/home/recommended-products';
import { ChatWidget } from '../components/support/chat-widget';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero slider */}
      <PromoSlider />
      
      {/* Featured categories */}
      <section className="container mx-auto max-w-7xl px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-default-900">Shop by Category</h2>
          <p className="text-default-500">Browse our wide selection of computer hardware</p>
        </div>
        <CategoryBlocks />
      </section>
      
      {/* Recommended products */}
      <section className="container mx-auto max-w-7xl px-4">
        <RecommendedProducts 
          title="Recommended for You"
          subtitle="Based on your browsing history and popular items"
        />
      </section>
      
      {/* Best sellers */}
      <section className="container mx-auto max-w-7xl px-4">
        <RecommendedProducts 
          title="Best Sellers"
          subtitle="Our most popular products this week"
        />
      </section>
      
      {/* New arrivals */}
      <section className="container mx-auto max-w-7xl px-4">
        <RecommendedProducts 
          title="New Arrivals"
          subtitle="The latest tech to hit our shelves"
        />
      </section>
      
      {/* Chat widget */}
      <ChatWidget />
    </div>
  );
};