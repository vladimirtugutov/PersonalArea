# ContactList
Тестовое задание на React.
Необходимо написать приложение личный кабинет.
В приложении должно быть две страницы:
 - Страница входа
 - Страница со списком контактов
Страница со списком контактов пользователя должна быть доступна только после авторизации.
На странице со списком контактов должна быть возможность добавлять/удалять/редактировать контакты, а также желательно наличие функции поиска.

Необходимые команды для запуска приложения:
1. Устанавка зависимостей в папке frontend: yarn
2. Устанавка зависимостей в папке backend: npm i
3. Вход в PostgreSql (для linux): sudo su -l postgres -> psql
4. Создание юзера: CREATE USER admin WITH PASSWORD '123';
5. Создание базы данных: CREATE DATABASE contacts OWNER admin;
6. Выдача прав юзеру: GRANT ALL PRIVILEGES ON DATABASE contacts TO admin;
7. Миграция таблиц: npx sequelize-cli db:migrate;
8. Засеевание таблиц данными: npx sequelize-cli db:seed:all;
9. Запуск фронта: yarn start
10. Запуск сервера: npm run dev

Используемые технологии: React, Redux, Redux-Saga, Node JS, Express, PostgreSQL, Sequelize.
