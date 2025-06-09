import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@heroui/react';
import { Icon } from '@iconify/react';

export const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-16 text-center">
      <Icon
        icon="lucide:check-circle-2"
        className="mx-auto text-success mb-4"
        width={64}
        height={64}
      />
      <h1 className="text-3xl font-bold mb-2">Спасибо за ваш заказ!</h1>
      <p className="text-default-500 mb-8">
        Ваш заказ был успешно оформлен. Наш менеджер скоро свяжется с вами для подтверждения деталей.
      </p>
      <Button as={Link} to="/" color="primary" size="lg">
        Вернуться на главную
      </Button>
    </div>
  );
};