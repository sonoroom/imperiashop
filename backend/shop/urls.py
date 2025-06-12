# shop/urls.py

from django.urls import path
from .views import CategoryListView, ProductListView, ProductDetailView, OrderCreateView, OrderLookupView

app_name = 'shop'

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<slug:slug>/', ProductDetailView.as_view(), name='product-detail'),
    path('orders/create/', OrderCreateView.as_view(), name='order-create'),
    path('orders/lookup/', OrderLookupView.as_view(), name='order-lookup'),
]