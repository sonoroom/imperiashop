from django.db import models


# Модель для категорий товаров
class Category(models.Model):
    # Указываем, что категория может быть вложенной в другую (саму в себя)
    # null=True, blank=True — означает, что поле необязательно (для категорий верхнего уровня)
    # related_name='children' — позволяет легко получать все дочерние категории: parent.children.all()
    parent = models.ForeignKey(
        'self',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name='children',
        verbose_name="Родительская категория"
    )
    name = models.CharField(max_length=255, verbose_name="Название категории")
    # "слаг" — это часть URL, например /category/komplektuyushchie.
    # Он должен быть уникальным, чтобы не было двух категорий с одинаковым адресом.
    slug = models.SlugField(max_length=255, unique=True, verbose_name="URL-слаг")
    description = models.TextField(blank=True, verbose_name="Описание")
    # Для этого поля понадобится библиотека Pillow.
    image = models.ImageField(upload_to='categories/', null=True, blank=True, verbose_name="Изображение")

    # Вложенный класс Meta позволяет нам настроить поведение модели
    class Meta:
        # Название модели в единственном и множественном числе для админ-панели
        verbose_name = "Категория"
        verbose_name_plural = "Категории"
        ordering = ['name']  # Сортировать категории по имени по умолчанию

    # Этот метод определяет, как объект будет отображаться в админ-панели
    def __str__(self):
        return self.name


# Модель для товаров и услуг
class Product(models.Model):
    # Связываем товар с категорией.
    # on_delete=models.PROTECT не позволит удалить категорию, если в ней есть товары.
    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name='products',
        verbose_name="Категория"
    )
    name = models.CharField(max_length=255, verbose_name="Название товара/услуги")
    slug = models.SlugField(max_length=255, unique=True, verbose_name="URL-слаг")
    description = models.TextField(blank=True, verbose_name="Описание")

    # Для денег всегда используем DecimalField, чтобы избежать проблем с округлением.
    # max_digits — макс. кол-во цифр, decimal_places — кол-во знаков после запятой.
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    # Старая цена для отображения скидки. Необязательное поле.
    original_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
        verbose_name="Старая цена"
    )

    # PositiveIntegerField не позволяет хранить отрицательные числа.
    stock = models.PositiveIntegerField(default=0, verbose_name="Остаток на складе")
    brand = models.CharField(max_length=100, blank=True, verbose_name="Бренд")

    # JSONField — очень гибкое поле для хранения структурированных данных,
    # идеально подходит для списков характеристик.
    features = models.JSONField(default=list, blank=True, verbose_name="Особенности (список)")
    specifications = models.JSONField(default=list, blank=True, verbose_name="Характеристики (ключ-значение)")

    # Флаги для отображения на фронтенде
    is_new = models.BooleanField(default=False, verbose_name="Новинка")
    is_available = models.BooleanField(default=True, verbose_name="В наличии")

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"
        ordering = ['name']

    def __str__(self):
        return self.name


class Order(models.Model):
    # Определяем возможные статусы заказа.
    # Первый элемент в кортеже — значение в БД, второй — человекочитаемое название.
    STATUS_CHOICES = [
        ('new', 'Новый'),
        ('in_progress', 'В обработке'),
        ('completed', 'Завершен'),
        ('canceled', 'Отменен'),
    ]

    # Поля для информации о клиенте
    first_name = models.CharField(max_length=100, verbose_name="Имя")
    last_name = models.CharField(max_length=100, verbose_name="Фамилия")
    email = models.EmailField(verbose_name="Email")
    phone = models.CharField(max_length=20, verbose_name="Телефон")

    # Дата создания будет установлена автоматически при создании заказа
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания")
    # Дата обновления будет меняться при каждом изменении заказа
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Дата обновления")

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='new',
        verbose_name="Статус заказа"
    )

    class Meta:
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"
        # Сортируем заказы по дате создания, самые новые — сверху
        ordering = ['-created_at']

    def __str__(self):
        return f"Заказ №{self.id} от {self.created_at.strftime('%d-%m-%Y %H:%M')}"

    # Метод для получения полной стоимости заказа
    def get_total_cost(self):
        return sum(item.get_cost() for item in self.items.all())


class OrderItem(models.Model):
    # Связываем позицию заказа с конкретным заказом
    # related_name='items' позволит нам обращаться к позициям через order.items.all()
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE, verbose_name="Заказ")
    # Связываем с товаром. Если товар удалят, поле станет NULL, но позиция в заказе останется
    product = models.ForeignKey(Product, related_name='order_items', on_delete=models.SET_NULL, null=True, blank=True,
                                verbose_name="Товар")

    # Мы сохраняем цену и название на момент заказа. Это важно, т.к. они могут измениться в будущем.
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Цена")
    quantity = models.PositiveIntegerField(default=1, verbose_name="Количество")

    # Сохраняем название товара на случай, если сам товар будет удален
    product_name = models.CharField(max_length=255, editable=False, verbose_name="Название товара")

    class Meta:
        verbose_name = "Позиция заказа"
        verbose_name_plural = "Позиции заказа"

    def __str__(self):
        return str(self.id)

    def get_cost(self):
        return self.price * self.quantity