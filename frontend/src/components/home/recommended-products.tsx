import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductCard } from '../products/product-card';
import { recommendedProducts } from '../../data/products';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type RecommendedProductsProps = {
  title: string;
  subtitle?: string;
}

export const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ 
  title, 
  subtitle 
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-default-900">{title}</h2>
        {subtitle && (
          <p className="text-default-500">{subtitle}</p>
        )}
      </div>
      
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="recommended-products-swiper"
      >
        {recommendedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};