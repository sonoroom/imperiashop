import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Button, Divider, Input, Accordion, AccordionItem } from '@heroui/react';
import { Icon } from '@iconify/react';
import { useCart } from '../../hooks/use-cart';

interface OrderSummaryProps {
  withCheckoutButton?: boolean;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({ withCheckoutButton = true }) => {
  const { cartItems } = useCart();
  const [promoCode, setPromoCode] = React.useState('');
  const [isApplyingPromo, setIsApplyingPromo] = React.useState(false);
  const [discount, setDiscount] = React.useState(0);
  
  // Calculate cart totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax - discount;
  
  // Apply promo code
  const handleApplyPromo = () => {
    if (!promoCode) return;
    
    setIsApplyingPromo(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      if (promoCode.toUpperCase() === 'TECH20') {
        setDiscount(Math.min(subtotal * 0.2, 100)); // 20% off, max $100
      } else {
        setDiscount(0);
      }
      setIsApplyingPromo(false);
    }, 1000);
  };
  
  return (
    <Card className="border border-default-200" shadow="sm">
      <CardBody className="space-y-4">
        <h2 className="text-lg font-bold">Order Summary</h2>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-default-600">Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-default-600">Shipping</span>
            {shipping === 0 ? (
              <span className="text-success-500">Free</span>
            ) : (
              <span>${shipping.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex justify-between">
            <span className="text-default-600">Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          {discount > 0 && (
            <div className="flex justify-between text-success-600">
              <span>Discount</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
          )}
        </div>
        
        <Divider />
        
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        {/* Promo code input */}
        <Accordion variant="bordered">
          <AccordionItem
            key="promo-code"
            aria-label="Promo Code"
            title="Apply Promo Code"
            classNames={{ content: "pb-0" }}
          >
            <div className="flex gap-2 pb-4">
              <Input
                placeholder="Enter promo code"
                value={promoCode}
                onValueChange={setPromoCode}
                size="sm"
              />
              <Button 
                color="primary"
                isLoading={isApplyingPromo}
                onPress={handleApplyPromo}
                size="sm"
              >
                Apply
              </Button>
            </div>
            <p className="text-xs text-default-500 pb-2">
              Try "TECH20" for 20% off your order (max $100).
            </p>
          </AccordionItem>
        </Accordion>
        
        {withCheckoutButton && (
          <Button
            as={Link}
            to="/checkout"
            color="primary"
            fullWidth
            size="lg"
            isDisabled={cartItems.length === 0}
            startContent={<Icon icon="lucide:credit-card" width={18} />}
          >
            Proceed to Checkout
          </Button>
        )}
        
        {shipping === 0 && (
          <p className="text-xs text-success-600 text-center">
            <Icon icon="lucide:check-circle" className="inline mr-1" width={14} />
            You qualify for free shipping!
          </p>
        )}
        
        {shipping > 0 && (
          <p className="text-xs text-default-600 text-center">
            Spend ${(100 - subtotal).toFixed(2)} more to qualify for free shipping.
          </p>
        )}
      </CardBody>
    </Card>
  );
};