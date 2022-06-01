Добрый день! Меня зовут Даниил Крючков, и вы просматриваете мое тестовое задание, которое я сделал для MEDIASOFT. 

# Техническое задание:
Написать SPA приложение (интернет-магазин).

Необходимый функционал

- Развернуть React/Redux приложение 
- route / — вывод товаров 
- Реализовать сортировки
по цене и по названию 
- Реализовать исключающие
фильтры по товарам по какому-либо признаку
товара 
- Реализовать функционал добавлениw товаров в
корзину
- route /cart — вывод краткой информации о товарах,
добавленных в корзину
- route /order - оформление заказа. 



# Запуск старой версии проекта 
- git init
- git remote add origin https://github.com/Daniil256/online-store-of-spare-parts-for-bicycles.git
- git pull origin project_first_version
- npm i
- npm start
- перейти в браузере в localhost:3000


# ЗАПУСК ОБНОВЛЕННОЙ ВЕРСИИ
- git init
- git remote add origin https://github.com/Daniil256/online-store-of-spare-parts-for-bicycles.git
- git pull origin test_task_with_using_typescript
- npm i
- npm run dev (может запуститься не в первого раза)
- перейти в браузере localhost:1234

- так же можно запустить готовый bulid проекта по ссылке https://daniil256.github.io


# Описание проекта:
1. Spa-приложение, загружается быстро, были произведены некоторые оптимизации(сжатие картинок)
2. Вся data приложения хранится в store redux.
3. Присутствует сортировка товара по названию и по цене
4. Фильтр осуществлен через строку поиска по названию управляемым input
5. Возможность выбирать нескоько единиц одного товара
6. Возможность оформить заказ на один товар как на главной странице, так и заказать всю корзину
7. Пагинация
8. Все товары из корзины и из страницы заказа клонируются в localStorage, и при обновлении страницы не пропадают
9. Подсчет общей стоимости товаров на странице заказа
10. Все введенные данные на странице заказа хранятся объектом в переменной и готовы для отправки на сервер
11. Добавлен удобный ввод данных банковской карты с автовставкой (может не работать, если подключение не будет защищено)
12. Приложение адаптировано под различные экраны
13. Дизайн разработал я. могут быть ошибки в верстке, т.к торопился

## Обновление версии 31.05.22
13. ПРИЛОЖЕНИЕ СОЗДАНО БЕЗ CREATE-REACT-APP
14. ДАННЫЕ О ТОВАРАХ БЫЛИ ПЕРЕНЕСЕНЫ НА ХОСТИНГ JSON И ЗАПРАШИВАЮТСЯ ОТТУДА
15. ОБРАБОТКА ОШИБОК ПРИ ЗАПРОСЕ
16. СОЗДАНА СТРАНЦА ДЛЯ КАЖДОГО ТОВАРА(ДИНАМИЧЕСКИЙ РОУТИНГ)
17. РЕАЛИЗОВАНА ДИНАМИЧЕСКАЯ ПОДГРУЗКА ТОВАРОВ ПРИ КРОЛЛЕ ВНИЗ
18. АНИМАЦИЯ ДЛЯ ТОВАРОВ ПРИ ИХ ПОЯВЛЕНИИ И ИСЧЕЗАНИИ
19. ДОБАВЛЕН КРАСИВЫЙ LOADER, ПОКА ТОВАРЫ ЗАГРУЖАЮТСЯ. ТАК КАК ЗАГРУЗКА СЛИШКОМ БЫСТРАЯ, Я ЧЕРЕЗ SETTIMEOUT ИСКУСТВЕННО ЗАМЕДЛИЛ ЕЕ
20. ТИПИЗАЦИЯ ПЕРЕМЕННЫХ, ХУКОВ, РЕДАКСА, СТОРА И ЗАПРОСА 


# Сложности, с которыми я столкнулся при разработке
1. Я не смог поноценно подключить API google maps для установки адреса через карту. То ли из за санкций, то ли я криворукий
