// src/api/index.ts

// Определяем базовый URL нашего API.
// В реальном проекте это было бы в переменных окружения (.env)
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1';

// Определяем типы для данных, которые мы будем отправлять
interface OrderItemPayload {
  product: string; // Мы отправляем только ID продукта
  quantity: number;
}

interface OrderPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  items: OrderItemPayload[];
}

export const createOrder = async (orderData: OrderPayload) => {
  const response = await fetch(`${API_BASE_URL}/orders/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });

  // Если ответ не успешный (не 2xx), мы пытаемся получить текст ошибки от бэкенда
  if (!response.ok) {
    // DRF обычно присылает ошибки в формате JSON
    const errorData = await response.json();
    // Превращаем объект с ошибками в строку для удобного отображения
    const errorMessage = Object.entries(errorData)
      .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
      .join('\n');
    throw new Error(errorMessage || 'Произошла ошибка при создании заказа');
  }

  // Если все хорошо, возвращаем созданный заказ
  return await response.json();
};