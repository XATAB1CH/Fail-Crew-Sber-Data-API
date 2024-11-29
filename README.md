# Fail-Crew-Sber-Data-API
Решения задачи на хакатоне от СБЕР по созданию data API

1) Front

2) Back
   Рабочий минимум:
   - классы операций и структур данных
   - класс исполнитель
   - механизм возврата на фронт успешности загрзуки. (Успех или ошибка)
   - Web Api (методы get;set; для источников, get;set преобразований, get;set; сценарий)
   - подключение к внешней бд (Postgres) для получения источников
   - настройка подключения и сохранения сценариев в локальной бд (mongo)
   + для MVP:
   - Валидация (в контроллерах, на входе исполнителя и перед подачей в ML-модель)
   - добавить класс Очередь для упрощения обработки сценария
   - Логгирование

   *(Сомнительно, но ок) Что там с генерацией моделей по схеме на лету?

Сущности:

Источник:
  - url-подключения
  - ссылка на схему ресурса (

Cценарий - конвейер для получения из входных данных артефакта:
  - упорядоченный массив моделей-представлений и преобразований

Преобразование:
  - вход
  - выход (ссылки на модели представлений)
  - набор операций
  - очередь исполнения (в простейшем случае массив указателей на данные и функции)

Очередь исполнения:
  - граф исполнений (структура, указывающая последовательность вызова операций над входными данными)
    

Операция - простейшее преобразование:
  - операнды
  - функция по обработке данных

Модели представления - все возможные входы и выходы преобразований.
Первый слой - модели из json-схемы ресурсов на языке бэка.
Последний слой - Артефакт- модель, пригодная для загрузки в Ml.
