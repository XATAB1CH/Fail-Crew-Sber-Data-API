# Fail-Crew-Sber-Data-API
Решения задачи на хакатоне от СБЕР по созданию data API

# Front

# Back
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

Схемы
![photo_2024-11-29_21-07-48](https://github.com/user-attachments/assets/3160e738-53fc-4488-a5d5-c7b6378cde6a)
![photo_2024-11-29_23-41-32](https://github.com/user-attachments/assets/4d345059-3ba9-4ad9-8aaf-236a683531dd)
