import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardFooter, Button, Chip, Tooltip, Badge } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Product } from '../../types/product';
import { useCart } from '../../hooks/use-cart';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const isDiscounted = product.originalPrice && product.originalPrice > product.price;
  const isLowStock = product.stock <= 5 && product.stock > 0;
  const isOutOfStock = product.stock === 0;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isOutOfStock) {
      addToCart(product);
    }
  };

  return (
    <Card 
      isPressable
      as={Link}
      to={`/product/${product.id}`}
      className="border border-default-200"
      shadow="sm"
    >
      <CardBody className="overflow-visible p-0 relative">
        {isDiscounted && (
          <Badge 
            content="Sale" 
            color="danger" 
            placement="top-left"
            className="absolute top-2 left-2 z-10"
          />
        )}
        {product.isNew && (
          <Badge 
            content="New" 
            color="primary" 
            placement="top-right" 
            className="absolute top-2 right-2 z-10"
          />
        )}
        <div className="aspect-square overflow-hidden">
          <img
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
            src={product.images[0]}
          />
        </div>
      </CardBody>
      <CardFooter className="flex-col items-start text-small gap-2">
        <div className="flex justify-between w-full">
          <div className="text-xs text-default-500">
            <span className="font-medium">{product.brand}</span> • {product.category}
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="lucide:star" className="text-warning" width={14} />
            <span className="text-xs">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="font-medium text-default-800 line-clamp-2 h-10">
          {product.name}
        </h3>
        
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <span className="font-bold text-default-900">${product.price.toFixed(2)}</span>
            {isDiscounted && (
              <span className="text-default-500 text-xs line-through">
                ${product.originalPrice?.toFixed(2)}
              </span>
            )}
          </div>
          
          {isLowStock && (
            <span className="text-xs text-danger-500">Only {product.stock} left</span>
          )}
          
          {isOutOfStock && (
            <span className="text-xs text-danger-500">Out of stock</span>
          )}
        </div>
        
        <Button
          fullWidth
          color={isOutOfStock ? "default" : "primary"}
          variant={isOutOfStock ? "flat" : "solid"}
          onPress={handleAddToCart}
          isDisabled={isOutOfStock}
          className="mt-2"
          size="sm"
        >
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  );
};