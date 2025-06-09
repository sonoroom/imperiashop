# shop/urls.py

from django.urls import path
from .views import CategoryListView, ProductListView, ProductDetailView, OrderCreateView

# Это помогает Django различать URL-имена между разными приложениями
app_name = 'shop'

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('products/', ProductListView.as_view(), name='product-list'),
    # <slug:slug> — это динамический параметр, который будет передан в представление
    path('products/<slug:slug>/', ProductDetailView.as_view(), name='product-detail'),
    path('orders/create/', OrderCreateView.as_view(), name='order-create'),
]