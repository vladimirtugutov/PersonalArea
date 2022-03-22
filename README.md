# ContactList
Тестовое задание на React.
Необходимо написать приложение личный кабинет.
В приложении должно быть две страницы:
 - Страница входа
 - Страница со списком контактов
Страница со списком контактов пользователя должна быть доступна только после авторизации.
На странице со списком контактов должна быть возможность добавлять/удалять/редактировать контакты, а также желательно наличие функции поиска.

Необходимые команды для запуска приложения:
1. Переименовать файл env в .env
2. Устанавка зависимостей в папке frontend: yarn
3. Устанавка зависимостей в папке backend: npm i
4. Вход в PostgreSql (для linux): sudo su -l postgres -> psql
5. Создание юзера: CREATE USER admin WITH PASSWORD '123';
6. Создание базы данных: CREATE DATABASE contacts OWNER admin;
7. Выдача прав юзеру: GRANT ALL PRIVILEGES ON DATABASE contacts TO admin;
8. Миграция таблиц: npx sequelize-cli db:migrate;
9. Засеевание таблиц данными: npx sequelize-cli db:seed:all;
10. Запуск фронта: yarn start
11. Запуск сервера: npm run dev

Используемые технологии: React, Redux, Redux-Saga, Node JS, Express, PostgreSQL, Sequelize.
