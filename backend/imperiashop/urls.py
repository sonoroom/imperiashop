# techgear_backend/urls.py

from django.contrib import admin
# Не забудьте импортировать `include`
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # Подключаем все URL из нашего приложения 'shop' с префиксом 'api/v1/'
    path('api/v1/', include('shop.urls', namespace='shop')),
]