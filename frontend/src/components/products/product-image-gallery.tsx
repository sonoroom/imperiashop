import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Zoom } from 'swiper/modules';
import { Button, Modal, ModalContent, ModalBody } from '@heroui/react';
import { Icon } from '@iconify/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

interface ProductImageGalleryProps {
  images: string[];
  alt: string;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, alt }) => {
  // State for the thumbnails swiper
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);
  // State for the fullscreen modal
  const [isFullscreenOpen, setIsFullscreenOpen] = React.useState(false);
  const [fullscreenActiveIndex, setFullscreenActiveIndex] = React.useState(0);
  // State for 360 view toggle
  const [is360ViewActive, setIs360ViewActive] = React.useState(false);
  const [rotationDegree, setRotationDegree] = React.useState(0);

  // For 360 degree view animation
  React.useEffect(() => {
    let animationFrame: number;
    
    if (is360ViewActive) {
      const animate = () => {
        setRotationDegree(prev => (prev + 1) % 360);
        animationFrame = requestAnimationFrame(animate);
      };
      
      animationFrame = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [is360ViewActive]);

  // Handle opening fullscreen at a specific index
  const handleOpenFullscreen = (index: number) => {
    setFullscreenActiveIndex(index);
    setIsFullscreenOpen(true);
  };

  // Toggle 360 view mode
  const toggle360View = () => {
    setIs360ViewActive(prev => !prev);
  };

  return (
    <>
      {/* Main Product Gallery */}
      <div className="space-y-4">
        <div className="relative">
          <Swiper
            modules={[Navigation, Thumbs, Zoom]}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            zoom={{ maxRatio: 2 }}
            className="product-main-swiper rounded-lg overflow-hidden border border-default-200"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="zoom-image-container cursor-zoom-in">
                  <div className="swiper-zoom-container">
                    <img
                      src={image}
                      alt={`${alt} - Image ${index + 1}`}
                      className="w-full h-[400px] object-contain"
                    />
                  </div>
                </div>
                
                {/* Overlay buttons for actions */}
                <div className="absolute top-4 right-4 space-x-2">
                  <Button
                    isIconOnly
                    variant="flat"
                    className="bg-white/70 backdrop-blur-md"
                    size="sm"
                    onPress={() => handleOpenFullscreen(index)}
                  >
                    <Icon icon="lucide:maximize" width={16} />
                  </Button>
                  
                  <Button
                    isIconOnly
                    variant="flat"
                    className={`${is360ViewActive ? 'bg-primary text-white' : 'bg-white/70 backdrop-blur-md'}`}
                    size="sm"
                    onPress={toggle360View}
                  >
                    <Icon icon="lucide:refresh-cw" width={16} />
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* 360 view overlay */}
          {is360ViewActive && (
            <div className="absolute inset-0 z-10 bg-black/80 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4">
                <img
                  src={images[0]}
                  alt={`${alt} - 360 View`}
                  className="w-full h-full object-contain"
                  style={{ transform: `rotate(${rotationDegree}deg)` }}
                />
                <Button
                  isIconOnly
                  variant="flat"
                  className="absolute top-4 right-4 bg-white/70 backdrop-blur-md"
                  size="sm"
                  onPress={toggle360View}
                >
                  <Icon icon="lucide:x" width={16} />
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Thumbnails */}
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          slidesPerView={5}
          spaceBetween={10}
          className="product-thumbs-swiper"
          onSwiper={setThumbsSwiper}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer border-2 border-transparent rounded-lg overflow-hidden hover:border-primary">
                <img
                  src={image}
                  alt={`${alt} - Thumbnail ${index + 1}`}
                  className="w-full h-16 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Fullscreen Modal */}
      <Modal
        isOpen={isFullscreenOpen}
        onOpenChange={setIsFullscreenOpen}
        size="full"
        hideCloseButton
      >
        <ModalContent>
          {() => (
            <ModalBody className="p-0 relative">
              <Button
                isIconOnly
                variant="flat"
                className="absolute top-4 right-4 z-20 bg-white/70 backdrop-blur-md"
                size="sm"
                onPress={() => setIsFullscreenOpen(false)}
              >
                <Icon icon="lucide:x" width={16} />
              </Button>
              
              <Swiper
                modules={[Navigation, Zoom]}
                navigation
                initialSlide={fullscreenActiveIndex}
                zoom={{ maxRatio: 3 }}
                className="h-screen"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="flex items-center justify-center">
                    <div className="swiper-zoom-container">
                      <img
                        src={image}
                        alt={`${alt} - Fullscreen ${index + 1}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};