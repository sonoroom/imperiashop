import React from 'react';
import { 
  Button, 
  Card, 
  CardBody, 
  Divider, 
  Input, 
  RadioGroup, 
  Radio,
  Chip
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { PaymentMethodSelector } from './payment-method-selector';
import { OrderSummary } from '../cart/order-summary';
import { useCart } from '../../hooks/use-cart';
import { createOrder } from '../../api';
import { useNavigate } from 'react-router-dom';

export const CheckoutForm: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [address, setAddress] = React.useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    phone: '',
    email: '',
  });
  
    const handleAddressChange = (field: string, value: string) => {
    setAddress(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null); //

   const orderPayload = {
      first_name: address.firstName,
      last_name: address.lastName,
      email: address.email,
      phone: address.phone,
      items: cartItems.map(item => ({
        // Отправляем ID продукта, а не весь объект
        product: item.product.id,
        quantity: item.quantity,
      })),
    };

    try {
      await createOrder(orderPayload);
       setIsLoading(false);
       clearCart(); // Очищаем корзину
       navigate('/order-confirmation'); // Перенаправляем на страницу благодарности
     } catch (err: any) {
      // 4. В случае ошибки:
      setError(err.message || 'Не удалось создать заказ. Пожалуйста, проверьте введенные данные.');
      setIsLoading(false);
    }
  };

  
  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Shipping Information Card */}
        {/* ... код этой карточки не меняется ... */}

        {/* Shipping Method Card */}
        {/* ... код этой карточки не меняется ... */}

        {/* Payment Method Card */}
        {/* ... код этой карточки не меняется ... */}

        {/* Review & Place Order Card */}
        <Card className="border border-default-200" shadow="sm">
          <CardBody className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center">
                4
              </div>
              <h2 className="text-lg font-bold">Review & Place Order</h2>
            </div>

            {/* Блок для отображения ошибок */}
            {error && (
              <div className="p-4 bg-danger-50 text-danger-700 border border-danger-200 rounded-lg">
                <p className="font-bold">Ошибка!</p>
                <pre className="whitespace-pre-wrap text-sm">{error}</pre>
              </div>
            )}

            <p className="text-default-600">
              By clicking "Place Order", you agree to TechGear's Terms of Service and acknowledge our Privacy Policy.
            </p>

            <Button
              type="submit"
              color="primary"
              size="lg"
              isLoading={isLoading}
              startContent={!isLoading && <Icon icon="lucide:check" width={18} />}
              fullWidth
            >
              Place Order
            </Button>
          </CardBody>
        </Card>
      </div>

      <div>
        <OrderSummary withCheckoutButton={false} />
      </div>
    </form>
  );
};
