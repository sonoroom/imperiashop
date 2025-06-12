# shop/views.py

from rest_framework import generics
from .models import Category, Product
from .serializers import CategorySerializer, ProductListSerializer, ProductDetailSerializer, OrderCreateSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Order
from .serializers import OrderDetailSerializer



class CategoryListView(generics.ListAPIView):
    """
    Представление для получения списка категорий.
    Мы фильтруем по 'parent__isnull=True', чтобы получить только категории верхнего уровня.
    Фронтенд сможет сам построить дерево на основе вложенных 'children'.
    """
    queryset = Category.objects.filter(parent__isnull=True)
    serializer_class = CategorySerializer


class ProductListView(generics.ListAPIView):
    """ Представление для списка товаров. """
    queryset = Product.objects.filter(is_available=True)
    serializer_class = ProductListSerializer


class ProductDetailView(generics.RetrieveAPIView):
    """
    Представление для одного товара.
    Используем 'slug' для поиска вместо стандартного 'id'.
    """
    queryset = Product.objects.filter(is_available=True)
    serializer_class = ProductDetailSerializer
    lookup_field = 'slug'

class OrderCreateView(generics.CreateAPIView):
    """
    Представление для создания нового заказа.
    Принимает только POST-запросы.
    """
    serializer_class = OrderCreateSerializer

class OrderLookupView(APIView):
    """
    Представление для поиска заказа по его ID и email клиента.
    Принимает POST-запросы.
    """
    def post(self, request, *args, **kwargs):
        order_id = request.data.get('order_id')
        email = request.data.get('email')

        if not order_id or not email:
            return Response(
                {"error": "Необходимо указать номер заказа и email"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Ищем заказ, который соответствует обоим параметрам
            order = Order.objects.get(id=order_id, email=email)
            serializer = OrderDetailSerializer(order)
            return Response(serializer.data)
        except Order.DoesNotExist:
            return Response(
                {"error": "Заказ с такими данными не найден"},
                status=status.HTTP_404_NOT_FOUND
            )
