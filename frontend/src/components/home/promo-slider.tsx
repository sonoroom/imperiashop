import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Button } from '@heroui/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const promoSlides = [
  {
    id: 1,
    title: "30% Off Gaming GPUs",
    subtitle: "Limited time offer on high-end graphics cards",
    cta: "Shop Now",
    image: "https://img.heroui.chat/image/game?w=1200&h=450&u=promo1",
    link: "/category/gpu/gaming"
  },
  {
    id: 2,
    title: "New AMD Processors",
    subtitle: "Discover the latest Ryzen 9000 series CPUs",
    cta: "Explore",
    image: "https://img.heroui.chat/image/ai?w=1200&h=450&u=promo2",
    link: "/category/cpu/amd"
  },
  {
    id: 3,
    title: "Ultimate PC Build Guide",
    subtitle: "Expert tips for building your dream gaming rig",
    cta: "Read Guide",
    image: "https://img.heroui.chat/image/dashboard?w=1200&h=450&u=promo3",
    link: "/blog/pc-build-guide"
  },
  {
    id: 4,
    title: "Premium Peripherals",
    subtitle: "Elevate your setup with pro-grade keyboards & mice",
    cta: "Shop Collection",
    image: "https://img.heroui.chat/image/dashboard?w=1200&h=450&u=promo4",
    link: "/category/peripherals"
  }
];

export const PromoSlider: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="promo-slider rounded-lg overflow-hidden"
      >
        {promoSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[450px]">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="container mx-auto px-6 md:px-12">
                  <div className="max-w-lg text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-lg md:text-xl mb-6 text-white/80">{slide.subtitle}</p>
                    <Button 
                      as={Link} 
                      to={slide.link} 
                      color="primary" 
                      size="lg"
                      className="font-medium"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};