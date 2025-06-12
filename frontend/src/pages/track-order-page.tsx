// src/pages/track-order-page.tsx
import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Input } from '@heroui/react';
import { Icon } from '@iconify/react';
// Нам понадобится новая функция в API клиенте
// import { lookupOrder, ApiOrderDetail } from '../api';

// ВРЕМЕННО: Пока мы не добавили функцию в api/index.ts, определим ее здесь
const lookupOrder = async (orderId: string, email: string) => {
    const response = await fetch('http://127.0.0.1:8000/api/v1/orders/lookup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order_id: orderId, email: email }),
    });
    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Ошибка поиска заказа');
    }
    return await response.json();
};
// ВРЕМЕННО: тип для заказа
interface ApiOrderDetail {
    id: number;
    created_at: string;
    status: string;
    items: { product_name: string; quantity: number; price: string }[];
    get_total_cost: number;
}


export const TrackOrderPage: React.FC = () => {
    const [orderId, setOrderId] = useState('');
    const [email, setEmail] = useState('');
    const [order, setOrder] = useState<ApiOrderDetail | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setOrder(null);

        try {
            const result = await lookupOrder(orderId, email);
            setOrder(result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container mx-auto max-w-2xl px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Отследить заказ</h1>

            {!order ? (
                <Card className="border border-default-200">
                    <CardHeader>
                        <p>Введите данные вашего заказа, чтобы увидеть его статус.</p>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={handleSearch} className="space-y-4">
                            <Input
                                label="Номер заказа"
                                placeholder="Например, 123"
                                value={orderId}
                                onValueChange={setOrderId}
                                isRequired
                            />
                            <Input
                                type="email"
                                label="Email"
                                placeholder="Ваш email, указанный при заказе"
                                value={email}
                                onValueChange={setEmail}
                                isRequired
                            />
                            {error && <p className="text-danger-500 text-sm">{error}</p>}
                            <Button type="submit" color="primary" isLoading={isLoading} fullWidth>
                                Найти заказ
                            </Button>
                        </form>
                    </CardBody>
                </Card>
            ) : (
                <Card className="border border-success-200 bg-success-50">
                    <CardHeader className="flex justify-between">
                        <h2 className="text-xl font-bold">Заказ №{order.id}</h2>
                        <Button variant="flat" size="sm" onClick={() => setOrder(null)}>Искать другой заказ</Button>
                    </CardHeader>
                    <CardBody>
                        <div className="space-y-4">
                           <p><strong>Статус:</strong> <span className="font-semibold text-success-700">{order.status}</span></p>
                           <p><strong>Дата оформления:</strong> {new Date(order.created_at).toLocaleString()}</p>
                           <div>
                               <h3 className="font-bold mb-2">Состав заказа:</h3>
                               <ul className="list-disc list-inside space-y-1">
                                   {order.items.map((item, index) => (
                                       <li key={index}>
                                           {item.product_name} ({item.quantity} шт.) - {item.price} руб.
                                       </li>
                                   ))}
                               </ul>
                           </div>
                           <p className="text-lg font-bold text-right mt-4">Итого: {order.get_total_cost} руб.</p>
                        </div>
                    </CardBody>
                </Card>
            )}
        </div>
    );
};