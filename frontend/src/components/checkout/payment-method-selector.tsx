import React from 'react';
import { Tabs, Tab, Input, RadioGroup, Radio, Button } from '@heroui/react';
import { Icon } from '@iconify/react';

export const PaymentMethodSelector: React.FC = () => {
  const [cardInfo, setCardInfo] = React.useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });
  
  const handleCardInfoChange = (field: string, value: string) => {
    setCardInfo(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <Tabs variant="bordered" aria-label="Payment methods">
      <Tab
        key="credit-card"
        title={
          <div className="flex items-center gap-2">
            <Icon icon="lucide:credit-card" width={18} />
            <span>Credit Card</span>
          </div>
        }
      >
        <div className="py-4 space-y-4">
          <div className="flex justify-between">
            <h3 className="font-medium">Enter Card Details</h3>
            <div className="flex gap-2">
              <Icon icon="logos:visa" width={32} />
              <Icon icon="logos:mastercard" width={32} />
              <Icon icon="logos:amex" width={32} />
              <Icon icon="logos:discover" width={32} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              value={cardInfo.cardNumber}
              onValueChange={v => handleCardInfoChange('cardNumber', v)}
              startContent={<Icon icon="lucide:credit-card" className="text-default-400" />}
              variant="bordered"
              className="md:col-span-2"
            />
            
            <Input
              label="Cardholder Name"
              placeholder="John Doe"
              value={cardInfo.cardName}
              onValueChange={v => handleCardInfoChange('cardName', v)}
              variant="bordered"
              className="md:col-span-2"
            />
            
            <Input
              label="Expiry Date"
              placeholder="MM/YY"
              value={cardInfo.expiryDate}
              onValueChange={v => handleCardInfoChange('expiryDate', v)}
              variant="bordered"
            />
            
            <Input
              label="Security Code (CVV)"
              placeholder="123"
              value={cardInfo.cvv}
              onValueChange={v => handleCardInfoChange('cvv', v)}
              variant="bordered"
              type="password"
            />
          </div>
          
          <div className="flex items-center mt-4 gap-2 text-sm">
            <Icon icon="lucide:lock" className="text-success-500" width={16} />
            <span className="text-default-500">Your payment information is secure and encrypted</span>
          </div>
        </div>
      </Tab>
      
      <Tab
        key="paypal"
        title={
          <div className="flex items-center gap-2">
            <Icon icon="logos:paypal" width={18} />
            <span>PayPal</span>
          </div>
        }
      >
        <div className="py-4 flex flex-col items-center gap-4">
          <Icon icon="logos:paypal" width={80} />
          <p className="text-default-600 text-center">
            You will be redirected to PayPal to complete your purchase securely.
          </p>
          <Button
            color="primary"
            variant="flat"
            startContent={<Icon icon="logos:paypal" width={18} />}
          >
            Continue with PayPal
          </Button>
        </div>
      </Tab>
      
      <Tab
        key="other"
        title={
          <div className="flex items-center gap-2">
            <Icon icon="lucide:more-horizontal" width={18} />
            <span>Other</span>
          </div>
        }
      >
        <div className="py-4">
          <RadioGroup orientation="vertical" defaultValue="apple-pay" className="gap-3">
            <Radio
              value="apple-pay"
              description="Pay using Apple Pay"
              className="border rounded-lg p-3"
            >
              <div className="flex items-center gap-2">
                <Icon icon="logos:apple-pay" width={32} />
                <span className="font-medium">Apple Pay</span>
              </div>
            </Radio>
            
            <Radio
              value="google-pay"
              description="Pay using Google Pay"
              className="border rounded-lg p-3"
            >
              <div className="flex items-center gap-2">
                <Icon icon="logos:google-pay" width={32} />
                <span className="font-medium">Google Pay</span>
              </div>
            </Radio>
            
            <Radio
              value="crypto"
              description="Pay with Bitcoin, Ethereum, or other cryptocurrencies"
              className="border rounded-lg p-3"
            >
              <div className="flex items-center gap-2">
                <Icon icon="logos:bitcoin" width={24} />
                <span className="font-medium">Cryptocurrency</span>
              </div>
            </Radio>
          </RadioGroup>
        </div>
      </Tab>
    </Tabs>
  );
};