import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Button,
  Chip,
  Divider,
  Input,
  Badge
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { ProductImageGallery } from '../components/products/product-image-gallery';
import { ProductSpecifications } from '../components/products/product-specifications';
import { RecommendedProducts } from '../components/home/recommended-products';
import { getProductById } from '../data/products';
import { useCart } from '../hooks/use-cart';
import { ChatWidget } from '../components/support/chat-widget';

export const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = React.useState(1);
  
  // Get product details
  const product = getProductById(productId || '');
  
  if (!product) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
        <Icon icon="lucide:alert-circle" className="mx-auto text-danger" width={48} height={48} />
        <h1 className="text-2xl font-bold mt-4">Product Not Found</h1>
        <p className="text-default-500 mt-2 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button as={Link} to="/" color="primary">
          Back to Home
        </Button>
      </div>
    );
  }
  
  const isDiscounted = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = isDiscounted 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleQuantityChange = (value: string) => {
    const newQuantity = parseInt(value);
    if (newQuantity > 0 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };
  
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-default-500 mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Icon icon="lucide:chevron-right" width={16} />
          <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-primary">
            {product.category}
          </Link>
          <Icon icon="lucide:chevron-right" width={16} />
          <span className="truncate">{product.name}</span>
        </div>
        
        {/* Product details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product images */}
          <div>
            <ProductImageGallery images={product.images} alt={product.name} />
          </div>
          
          {/* Product info */}
          <div className="space-y-6">
            <div>
              <div className="flex gap-2 mb-2">
                {product.isNew && (
                  <Badge content="New" color="primary" />
                )}
                {isDiscounted && (
                  <Badge content={`-${discountPercentage}%`} color="danger" />
                )}
              </div>
              
              <h1 className="text-3xl font-bold">{product.name}</h1>
              
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <div className="flex text-warning">
                    {Array(5).fill(null).map((_, i) => (
                      <Icon 
                        key={i} 
                        icon="lucide:star" 
                        width={16} 
                        className={i < Math.floor(product.rating) ? "text-warning" : "text-default-300"}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-default-500">{product.rating.toFixed(1)}</span>
                </div>
                
                <Link to="#reviews" className="text-sm text-primary">
                  {product.reviews.length} reviews
                </Link>
                
                <span className="text-sm text-default-500">
                  SKU: {productId}
                </span>
              </div>
            </div>
            
            {/* Price */}
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
              {isDiscounted && (
                <span className="text-xl text-default-500 line-through">${product.originalPrice?.toFixed(2)}</span>
              )}
            </div>
            
            {/* Stock status */}
            <div>
              {product.stock > 10 ? (
                <Chip color="success" variant="flat" startContent={<Icon icon="lucide:check" width={16} />}>
                  In Stock
                </Chip>
              ) : product.stock > 0 ? (
                <Chip color="warning" variant="flat">
                  Low Stock - Only {product.stock} left
                </Chip>
              ) : (
                <Chip color="danger" variant="flat">
                  Out of Stock
                </Chip>
              )}
            </div>
            
            {/* Brand info */}
            <div className="flex items-center gap-2">
              <span className="text-default-500">Brand:</span>
              <Link to={`/brands/${product.brand.toLowerCase()}`} className="font-medium hover:text-primary">
                {product.brand}
              </Link>
            </div>
            
            {/* Short description */}
            <p className="text-default-700 leading-relaxed">
              {product.description.substring(0, 200)}...
            </p>
            
            {/* Add to cart */}
            <div className="flex items-center gap-4">
              <Input
                type="number"
                value={quantity.toString()}
                onValueChange={handleQuantityChange}
                min="1"
                max={product.stock}
                size="lg"
                className="w-24"
                disabled={product.stock === 0}
              />
              
              <Button 
                color="primary" 
                size="lg"
                onPress={handleAddToCart}
                isDisabled={product.stock === 0}
                startContent={<Icon icon="lucide:shopping-cart" width={20} />}
              >
                Add to Cart
              </Button>
              
              <Button
                variant="flat"
                size="lg"
                isIconOnly
                aria-label="Add to wishlist"
              >
                <Icon icon="lucide:heart" width={20} />
              </Button>
              
              <Button
                variant="flat"
                size="lg"
                isIconOnly
                aria-label="Compare"
              >
                <Icon icon="lucide:git-compare" width={20} />
              </Button>
            </div>
            
            {/* Additional info */}
            <Divider />
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Icon icon="lucide:truck" width={20} className="text-default-500" />
                <span>Free shipping on orders over $100</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Icon icon="lucide:rotate-ccw" width={20} className="text-default-500" />
                <span>30-day return policy</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Icon icon="lucide:shield-check" width={20} className="text-default-500" />
                <span>2-year warranty</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Icon icon="lucide:help-circle" width={20} className="text-default-500" />
                <Button variant="light" color="primary" size="sm" className="p-0">
                  Need help? Chat with support
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product tabs */}
        <div className="mb-16">
          <ProductSpecifications
            specifications={product.specifications}
            description={product.description}
            features={product.features}
            reviews={product.reviews}
          />
        </div>
        
        {/* Similar products */}
        <div className="mb-16">
          <RecommendedProducts 
            title="You May Also Like"
            subtitle="Similar products based on your selection"
          />
        </div>
        
        {/* Recently viewed */}
        <div>
          <RecommendedProducts 
            title="Recently Viewed"
            subtitle="Continue exploring products you've viewed"
          />
        </div>
      </div>
      
      {/* Chat widget */}
      <ChatWidget />
    </>
  );
};