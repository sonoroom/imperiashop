# shop/serializers.py

from rest_framework import serializers
from django.db import transaction
from .models import Category, Product, Order, OrderItem


class RecursiveCategorySerializer(serializers.Serializer):
    """ Сериализатор для рекурсивного вывода дочерних категорий. """
    def to_representation(self, value):
        # Используем основной сериализатор CategorySerializer для дочерних элементов
        serializer = self.parent.parent.__class__(value, context=self.context)
        return serializer.data


class CategorySerializer(serializers.ModelSerializer):
    """ Сериализатор для модели Категорий. """
    # Указываем, что для поля 'children' нужно использовать рекурсивный сериализатор
    children = RecursiveCategorySerializer(many=True, read_only=True)

    class Meta:
        model = Category
        # Указываем поля, которые должны быть включены в JSON-ответ
        fields = ['id', 'name', 'slug', 'image', 'children']


class ProductListSerializer(serializers.ModelSerializer):
    """ Сериализатор для списка продуктов (краткая информация). """
    # Чтобы в списке товаров отображалось название категории, а не ее ID
    category = serializers.StringRelatedField()

    class Meta:
        model = Product
        # Указываем только самые необходимые поля для карточки товара в списке
        fields = [
            'id', 'name', 'slug', 'price', 'original_price',
            'stock', 'brand', 'category'
            # 'images' мы добавим позже, когда сделаем модель для изображений
        ]


class ProductDetailSerializer(serializers.ModelSerializer):
    """ Сериализатор для одного продукта (полная информация). """
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Product
        # Включаем все поля для детальной страницы товара
        fields = '__all__'

class OrderItemCreateSerializer(serializers.ModelSerializer):
    """ Сериализатор для создания позиций заказа. """
    class Meta:
        model = OrderItem
        fields = ['product', 'quantity']


class OrderCreateSerializer(serializers.ModelSerializer):
    """ Сериализатор для создания заказа. """
    # 'items' — это поле, которое будет принимать список товаров из корзины.
    # write_only=True означает, что это поле используется только для создания,
    # но не будет отображаться при чтении заказа.
    items = OrderItemCreateSerializer(many=True, write_only=True)

    class Meta:
        model = Order
        # Указываем поля, которые фронтенд должен прислать
        fields = ['first_name', 'last_name', 'email', 'phone', 'items']

    def create(self, validated_data):
        # transaction.atomic — если что-то пойдет не так, все изменения в БД откатятся.
        # Это гарантирует целостность данных.
        with transaction.atomic():
            items_data = validated_data.pop('items')
            order = Order.objects.create(**validated_data)

            for item_data in items_data:
                product = item_data['product']
                quantity = item_data['quantity']

                # Проверяем, есть ли товар в наличии
                if product.stock < quantity:
                    raise serializers.ValidationError(
                        f"Недостаточно товара '{product.name}' на складе."
                    )

                OrderItem.objects.create(
                    order=order,
                    product=product,
                    product_name=product.name, # Сохраняем имя
                    price=product.price, # Сохраняем текущую цену
                    quantity=quantity
                )

                # Уменьшаем остаток на складе
                product.stock -= quantity
                product.save()

        # Здесь в будущем можно будет добавить отправку email
        # send_mail_to_admin(order)
        # send_mail_to_client(order)

        return order