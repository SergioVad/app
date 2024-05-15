## Запуск проекта

Зайти в папку server
```
npm i - установка зависимостей
npm run start:dev - запуск backend части
```

Зайти в папку client
```
npm i - установка зависимостей
npm start - запуск frontend части
```

----
## Тесты
Зайти в папку client

Unit тесты на jest - `npm run test:unit`

----

## Конфигурация проекта

Для разработки проект используется конфиг: Webpack - ./client/config/build

Вся конфигурация хранится в /config
- /client/config/build - конфигурация webpack
- /client/config/jest - конфигурация тестовой среды

-----

### Работа с данными

Взаимодействие с данными осуществляется с помощью Redux Toolkit.

-----
