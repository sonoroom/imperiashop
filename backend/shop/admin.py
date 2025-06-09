from django.contrib import admin
from .models import Category, Product, Order, OrderItem


# Используем декоратор @admin.register() — это современный способ регистрации моделей
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    # Поля, которые будут отображаться в списке категорий
    list_display = ['name', 'slug', 'parent']
    # Поля, по которым можно будет фильтровать
    list_filter = ['parent']
    # Поля, по которым будет работать поиск
    search_fields = ['name', 'description']

    # Эта настройка автоматически заполняет поле 'slug' на основе поля 'name'.
    # Невероятно удобно — не нужно вручную писать URL.
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    # Поля в списке товаров
    list_display = ['name', 'category', 'price', 'stock', 'is_available', 'is_new']
    # Фильтры справа
    list_filter = ['category', 'is_available', 'is_new', 'brand']
    # Поля, которые можно редактировать прямо из списка, не заходя в карточку товара
    list_editable = ['price', 'stock', 'is_available', 'is_new']
    # Поиск
    search_fields = ['name', 'description', 'brand']
    # Автозаполнение слага
    prepopulated_fields = {'slug': ('name',)}
    # Улучшаем выбор категории, чтобы не было гигантского выпадающего списка
    autocomplete_fields = ['category']


class OrderItemInline(admin.TabularInline):
    """
    Позволяет отображать и редактировать позиции заказа
    прямо внутри страницы самого заказа.
    """
    model = OrderItem
    # Указываем, какие поля не нужно давать редактировать в админке
    readonly_fields = ['product', 'price', 'product_name']
    # Не добавлять пустые формы для новых позиций
    extra = 0


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'first_name', 'last_name', 'email', 'phone', 'status', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['first_name', 'last_name', 'email', 'phone']
    # Поля, которые нельзя редактировать, т.к. они вычисляются автоматически
    readonly_fields = ['created_at', 'updated_at']

    # Подключаем встроенную форму для позиций заказа
    inlines = [OrderItemInline]