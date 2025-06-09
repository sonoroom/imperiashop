import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { CheckoutForm } from '../components/checkout/checkout-form';
import { useCart } from '../hooks/use-cart';

export const CheckoutPage: React.FC = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  
  // Redirect to cart if cart is empty
  React.useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);
  
  if (cartItems.length === 0) {
    return null;
  }
  
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <div className="flex items-center mb-8 gap-2">
        <Link to="/cart" className="text-primary hover:underline flex items-center gap-1">
          <Icon icon="lucide:arrow-left" width={16} />
          <span>Back to Cart</span>
        </Link>
        <span className="text-default-400 mx-2">|</span>
        <h1 className="text-2xl font-bold">Checkout</h1>
      </div>
      
      <CheckoutForm />
    </div>
  );
};