# shop/views.py

from rest_framework import generics
from .models import Category, Product
from .serializers import CategorySerializer, ProductListSerializer, ProductDetailSerializer, OrderCreateSerializer



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