import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Product } from '../../types/product';
import { useCart } from '../../hooks/use-cart';

interface CartItemProps {
  item: {
    product: Product;
    quantity: number;
  };
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  
  const handleQuantityChange = (newQuantity: string) => {
    const qty = parseInt(newQuantity);
    if (qty > 0 && qty <= product.stock) {
      updateQuantity(product.id, qty);
    }
  };
  
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  
  return (
    <div className="flex flex-col sm:flex-row gap-4 py-4 border-b border-default-200">
      {/* Product image */}
      <div className="w-full sm:w-28 h-28 overflow-hidden rounded-lg">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      
      {/* Product details */}
      <div className="flex-grow space-y-2">
        <div className="flex justify-between">
          <Link 
            to={`/product/${product.id}`}
            className="font-medium text-default-800 hover:text-primary"
          >
            {product.name}
          </Link>
          <div className="font-bold text-default-900">${product.price.toFixed(2)}</div>
        </div>
        
        <div className="flex gap-2 text-xs text-default-500">
          <span>Brand: {product.brand}</span>
          <span>•</span>
          <span>Category: {product.category}</span>
        </div>
        
        {/* Stock information */}
        <div className="text-xs text-default-500">
          {product.stock > 10 ? (
            <span className="text-success-500">In Stock</span>
          ) : product.stock > 0 ? (
            <span className="text-warning-500">Only {product.stock} left</span>
          ) : (
            <span className="text-danger-500">Out of Stock</span>
          )}
        </div>
        
        {/* Controls */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-2">
            <Input
              type="number"
              value={quantity.toString()}
              onValueChange={handleQuantityChange}
              size="sm"
              classNames={{
                input: "w-14 text-center",
                inputWrapper: "h-9"
              }}
              min={1}
              max={product.stock}
            />
            <Button 
              variant="light" 
              size="sm" 
              color="danger"
              onPress={handleRemove}
              startContent={<Icon icon="lucide:trash-2" width={16} />}
            >
              Remove
            </Button>
          </div>
          
          <div className="font-bold text-default-900">
            ${(product.price * quantity).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};