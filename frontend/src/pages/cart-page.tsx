import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';
import { CartItem } from '../components/cart/cart-item';
import { OrderSummary } from '../components/cart/order-summary';
import { useCart } from '../hooks/use-cart';
import { RecommendedProducts } from '../components/home/recommended-products';

export const CartPage: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  
  // Empty cart
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="flex flex-col items-center justify-center py-12">
          <Icon icon="lucide:shopping-cart" className="text-default-400 mb-4" width={64} />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-default-500 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button as={Link} to="/" color="primary" size="lg">
            Continue Shopping
          </Button>
        </div>
        
        <div className="mt-16">
          <RecommendedProducts
            title="Recommended Products"
            subtitle="You might be interested in these products"
          />
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2">
          <Card className="border border-default-200" shadow="sm">
            <CardBody>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)} Items in Cart
                </span>
                <Button 
                  variant="flat" 
                  color="danger" 
                  size="sm" 
                  onPress={clearCart}
                  startContent={<Icon icon="lucide:trash-2" width={16} />}
                >
                  Clear Cart
                </Button>
              </div>
              
              {/* Cart item list */}
              <div className="space-y-1">
                {cartItems.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
              
              {/* Continue shopping button */}
              <div className="mt-6 text-center">
                <Button 
                  as={Link} 
                  to="/" 
                  variant="flat" 
                  color="primary"
                  size="sm"
                  startContent={<Icon icon="lucide:arrow-left" width={16} />}
                >
                  Continue Shopping
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
        
        {/* Order summary */}
        <div>
          <OrderSummary />
          
          <div className="mt-6 space-y-4">
            <div className="border rounded-lg p-4 bg-default-50">
              <h3 className="font-medium mb-2">Need Help?</h3>
              <div className="space-y-2 text-sm text-default-600">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:help-circle" width={16} className="text-primary" />
                  <Link to="/faq" className="hover:text-primary">FAQ</Link>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:truck" width={16} className="text-primary" />
                  <Link to="/shipping" className="hover:text-primary">Shipping Information</Link>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:rotate-ccw" width={16} className="text-primary" />
                  <Link to="/returns" className="hover:text-primary">Return Policy</Link>
                </div>
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:message-circle" width={16} className="text-primary" />
                  <Link to="/contact" className="hover:text-primary">Contact Support</Link>
                </div>
              </div>
            </div>
            
            <Card className="border border-default-200" shadow="sm">
              <CardBody className="p-4 space-y-2">
                <h3 className="font-medium">Secure Checkout</h3>
                <p className="text-xs text-default-500">
                  We use industry-standard encryption to protect your personal information.
                </p>
                <div className="flex gap-2">
                  <Icon icon="logos:visa" width={32} />
                  <Icon icon="logos:mastercard" width={32} />
                  <Icon icon="logos:amex" width={32} />
                  <Icon icon="logos:paypal" width={32} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      
      {/* You may also like */}
      <div className="mt-16">
        <RecommendedProducts
          title="You May Also Like"
          subtitle="Customers who bought these items also purchased"
        />
      </div>
    </div>
  );
};