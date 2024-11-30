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
[Uploading clas<mxfile host="app.diagrams.net" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 YaBrowser/24.10.0.0 Safari/537.36" version="25.0.0">
  <diagram id="R2lEEEUBdFMjLlhIrx00" name="Page-1">
    <mxGraphModel dx="1092" dy="725" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0" extFonts="Permanent Marker^https://fonts.googleapis.com/css?family=Permanent+Marker">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-1" value="Курьер" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="130" y="220" width="140" height="90" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-56" value="название: string" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-1" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-48" value="Описание: string" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-1" vertex="1">
          <mxGeometry y="60" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-5" value="Наблюдатель" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="405" y="200" width="140" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-65" value="Процессоры: array[]" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-5" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-9" value="Переменная (путь к полю)" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="680" y="600" width="140" height="90" as="geometry">
            <mxRectangle x="620" y="600" width="190" height="30" as="alternateBounds" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-32" value="Тип: string" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-9" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-39" value="Значение: all" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-9" vertex="1">
          <mxGeometry y="60" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-17" value="Рецепт" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="390" y="650" width="140" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-36" value="Ингредиенты: array[]" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-17" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-21" value="Ингредиент" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="390" y="840" width="140" height="120" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-38" value="Тип: string" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-21" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-49" value="Название: string" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-21" vertex="1">
          <mxGeometry y="60" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-51" value="Значение: all" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-21" vertex="1">
          <mxGeometry y="90" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-30" value="Процессор" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="400" y="410" width="145" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-37" value="Рецепты: array[рецепт]" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-30" vertex="1">
          <mxGeometry y="30" width="145" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-31" value="Операция" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="650" y="980" width="140" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-35" value="Название: string" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-31" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-42" value="" style="endArrow=diamondThin;endFill=1;endSize=24;html=1;rounded=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-21" target="sQxFZhmoRU4-G_I5SNlf-17" edge="1">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="350" y="770" as="sourcePoint" />
            <mxPoint x="510" y="770" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-43" value="" style="endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=top;rounded=0;entryX=0.479;entryY=0.967;entryDx=0;entryDy=0;entryPerimeter=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-21" target="sQxFZhmoRU4-G_I5SNlf-39" edge="1">
          <mxGeometry x="-1" relative="1" as="geometry">
            <mxPoint x="520" y="720" as="sourcePoint" />
            <mxPoint x="680" y="720" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-45" value="" style="endArrow=block;endFill=1;html=1;edgeStyle=orthogonalEdgeStyle;align=left;verticalAlign=top;rounded=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;exitX=1.014;exitY=0.867;exitDx=0;exitDy=0;exitPerimeter=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-38" target="sQxFZhmoRU4-G_I5SNlf-31" edge="1">
          <mxGeometry x="-1" relative="1" as="geometry">
            <mxPoint x="540" y="830" as="sourcePoint" />
            <mxPoint x="687" y="790" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-53" value="" style="endArrow=diamondThin;endFill=1;endSize=24;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;exitX=1.021;exitY=0.4;exitDx=0;exitDy=0;exitPerimeter=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-56" target="sQxFZhmoRU4-G_I5SNlf-5" edge="1">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="760" y="250" as="sourcePoint" />
            <mxPoint x="580" y="270" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-55" value="" style="endArrow=diamondThin;endFill=1;endSize=24;html=1;rounded=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-30" target="sQxFZhmoRU4-G_I5SNlf-5" edge="1">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="470" y="400" as="sourcePoint" />
            <mxPoint x="410" y="520" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-58" value="Артефакт" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="620" y="190" width="140" height="120" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-60" value="Модель: function" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-58" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-59" value="Вход: dictionary" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-58" vertex="1">
          <mxGeometry y="60" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-47" value="Выход: array[float]" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-58" vertex="1">
          <mxGeometry y="90" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-61" value="" style="endArrow=diamondThin;endFill=1;endSize=24;html=1;rounded=0;entryX=-0.021;entryY=0.433;entryDx=0;entryDy=0;entryPerimeter=0;exitX=1;exitY=0.5;exitDx=0;exitDy=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-5" target="sQxFZhmoRU4-G_I5SNlf-59" edge="1">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="170" y="370" as="sourcePoint" />
            <mxPoint x="330" y="370" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-62" value="Ошибка" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="150" y="790" width="145" height="90" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-63" value="Тип: class" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-62" vertex="1">
          <mxGeometry y="30" width="145" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-75" value="Описание: string" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-62" vertex="1">
          <mxGeometry y="60" width="145" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-77" value="Валидатор" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="150" y="570" width="140" height="120" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-78" value="json схема: json" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-77" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-79" value="вход: json" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-77" vertex="1">
          <mxGeometry y="60" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-76" value="результат: Ошибка" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-77" vertex="1">
          <mxGeometry y="90" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-80" value="" style="endArrow=diamondThin;endFill=1;endSize=24;html=1;rounded=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.493;entryY=0.933;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-62" target="sQxFZhmoRU4-G_I5SNlf-76" edge="1">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="220" y="780" as="sourcePoint" />
            <mxPoint x="220" y="690" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-81" value="" style="endArrow=diamondThin;endFill=1;endSize=24;html=1;rounded=0;entryX=0;entryY=0;entryDx=0;entryDy=0;entryPerimeter=0;exitX=0.5;exitY=0;exitDx=0;exitDy=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-77" target="sQxFZhmoRU4-G_I5SNlf-37" edge="1">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="160" y="450" as="sourcePoint" />
            <mxPoint x="320" y="450" as="targetPoint" />
            <Array as="points">
              <mxPoint x="220" y="440" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-83" value="Постоянная БД&lt;br&gt;(PostgreSQL Repo)" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="120" y="50" width="140" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-85" value="Рецепт" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-83" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-87" value="" style="endArrow=diamondThin;endFill=1;endSize=24;html=1;rounded=0;entryX=0.976;entryY=0.429;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" edge="1" target="sQxFZhmoRU4-G_I5SNlf-85">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="200" y="320" as="sourcePoint" />
            <mxPoint x="270.98" y="83" as="targetPoint" />
            <Array as="points">
              <mxPoint x="310" y="320" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-90" value="Временная БД&lt;br&gt;(Mongo Repo)" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="300" y="120" width="140" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-92" value="Рецепт" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-90" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-94" value="" style="endArrow=diamondThin;endFill=1;endSize=24;html=1;rounded=0;entryX=0.214;entryY=1.1;entryDx=0;entryDy=0;entryPerimeter=0;exitX=0.057;exitY=-0.05;exitDx=0;exitDy=0;exitPerimeter=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-17" target="sQxFZhmoRU4-G_I5SNlf-92" edge="1">
          <mxGeometry width="160" relative="1" as="geometry">
            <mxPoint x="530" y="120" as="sourcePoint" />
            <mxPoint x="690" y="120" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-99" value="Переводчик" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="400" y="520" width="140" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-100" value="Рецепт" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-99" vertex="1">
          <mxGeometry y="30" width="140" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-102" value="" style="endArrow=none;html=1;edgeStyle=orthogonalEdgeStyle;rounded=0;exitX=0.486;exitY=1.067;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-100" target="sQxFZhmoRU4-G_I5SNlf-17" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="470" y="630" as="sourcePoint" />
            <mxPoint x="630" y="630" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-103" value="parent" style="edgeLabel;resizable=0;html=1;align=left;verticalAlign=bottom;" parent="sQxFZhmoRU4-G_I5SNlf-102" connectable="0" vertex="1">
          <mxGeometry x="-1" relative="1" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-104" value="child" style="edgeLabel;resizable=0;html=1;align=right;verticalAlign=bottom;" parent="sQxFZhmoRU4-G_I5SNlf-102" connectable="0" vertex="1">
          <mxGeometry x="1" relative="1" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-108" value="" style="endArrow=none;html=1;edgeStyle=orthogonalEdgeStyle;rounded=0;exitX=0.51;exitY=1.133;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-37" target="sQxFZhmoRU4-G_I5SNlf-99" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="580" y="492" as="sourcePoint" />
            <mxPoint x="582" y="550" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-109" value="parent" style="edgeLabel;resizable=0;html=1;align=left;verticalAlign=bottom;" parent="sQxFZhmoRU4-G_I5SNlf-108" connectable="0" vertex="1">
          <mxGeometry x="-1" relative="1" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-110" value="child" style="edgeLabel;resizable=0;html=1;align=right;verticalAlign=bottom;" parent="sQxFZhmoRU4-G_I5SNlf-108" connectable="0" vertex="1">
          <mxGeometry x="1" relative="1" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-111" value="" style="endArrow=none;html=1;edgeStyle=orthogonalEdgeStyle;rounded=0;entryX=0.493;entryY=1.033;entryDx=0;entryDy=0;entryPerimeter=0;exitX=-0.014;exitY=0.033;exitDx=0;exitDy=0;exitPerimeter=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-100" target="sQxFZhmoRU4-G_I5SNlf-48" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="630" y="470" as="sourcePoint" />
            <mxPoint x="590" y="560" as="targetPoint" />
            <Array as="points">
              <mxPoint x="199" y="549" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-112" value="parent" style="edgeLabel;resizable=0;html=1;align=left;verticalAlign=bottom;" parent="sQxFZhmoRU4-G_I5SNlf-111" connectable="0" vertex="1">
          <mxGeometry x="-1" relative="1" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-113" value="child" style="edgeLabel;resizable=0;html=1;align=right;verticalAlign=bottom;" parent="sQxFZhmoRU4-G_I5SNlf-111" connectable="0" vertex="1">
          <mxGeometry x="1" relative="1" as="geometry">
            <mxPoint x="-9" y="19" as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-114" value="Инструменты (lib)" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" parent="1" vertex="1">
          <mxGeometry x="610" y="410" width="150" height="60" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-115" value="функции: dict[string: func]" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" parent="sQxFZhmoRU4-G_I5SNlf-114" vertex="1">
          <mxGeometry y="30" width="150" height="30" as="geometry" />
        </mxCell>
        <mxCell id="sQxFZhmoRU4-G_I5SNlf-116" value="" style="endArrow=none;html=1;edgeStyle=orthogonalEdgeStyle;rounded=0;exitX=0.493;exitY=1.1;exitDx=0;exitDy=0;exitPerimeter=0;entryX=1.029;entryY=0.1;entryDx=0;entryDy=0;entryPerimeter=0;" parent="1" source="sQxFZhmoRU4-G_I5SNlf-115" target="sQxFZhmoRU4-G_I5SNlf-100" edge="1">
          <mxGeometry relative="1" as="geometry">
            <mxPoint x="645" y="515" as="sourcePoint" />
            <mxPoint x="647" y="585" as="targetPoint" />
            <Array as="points">
              <mxPoint x="684" y="551" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-4" value="" style="line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;" vertex="1" parent="1">
          <mxGeometry x="345" y="580" width="495" height="8" as="geometry" />
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-6" value="" style="endArrow=none;html=1;rounded=0;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="340" y="1090" as="sourcePoint" />
            <mxPoint x="340" y="590" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-7" value="Front/Back" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="430" y="1020" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-8" value="" style="endArrow=none;html=1;rounded=0;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="560" y="170" as="sourcePoint" />
            <mxPoint x="560" y="10" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-9" value="" style="endArrow=none;html=1;rounded=0;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="560" y="170" as="sourcePoint" />
            <mxPoint x="840" y="170" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-10" value="Front" style="text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="580" y="20" width="60" height="30" as="geometry" />
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-11" value="" style="endArrow=classic;html=1;rounded=0;exitX=1.016;exitY=0.276;exitDx=0;exitDy=0;exitPerimeter=0;" edge="1" parent="1" source="sQxFZhmoRU4-G_I5SNlf-85">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="300" y="90" as="sourcePoint" />
            <mxPoint x="560" y="88" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-12" value="array[string]" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" vertex="1" parent="1">
          <mxGeometry x="335" y="68" width="90" height="30" as="geometry" />
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-14" value="" style="endArrow=classic;html=1;rounded=0;exitX=1.016;exitY=0.276;exitDx=0;exitDy=0;exitPerimeter=0;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="430" y="155" as="sourcePoint" />
            <mxPoint x="560" y="151.28571428571422" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-17" value="array[string]" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" vertex="1" parent="1">
          <mxGeometry x="450" y="120" width="90" height="30" as="geometry" />
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-18" value="" style="endArrow=classic;html=1;rounded=0;exitX=0.483;exitY=0.982;exitDx=0;exitDy=0;exitPerimeter=0;" edge="1" parent="1" source="Gya4htj6oJUJKu7-fcux-19">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="295" y="57" as="sourcePoint" />
            <mxPoint x="565" y="57" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-19" value="&lt;div&gt;источники: dict[string: string]&lt;/div&gt;&lt;div&gt;схемы данных: json&lt;br&gt;&lt;/div&gt;&lt;div&gt;функции: dict[string: string]&lt;/div&gt;" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" vertex="1" parent="1">
          <mxGeometry x="335" y="-1.3322676295501878e-15" width="180" height="60" as="geometry" />
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-20" value="" style="endArrow=classic;html=1;rounded=0;" edge="1" parent="1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="560" y="70" as="sourcePoint" />
            <mxPoint x="420" y="70" as="targetPoint" />
          </mxGeometry>
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-21" value="Рецепт" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];" vertex="1" connectable="0" parent="Gya4htj6oJUJKu7-fcux-20">
          <mxGeometry x="0.2611" relative="1" as="geometry">
            <mxPoint as="offset" />
          </mxGeometry>
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-23" value="Адаптер" style="swimlane;fontStyle=0;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;resizeLast=0;collapsible=1;marginBottom=0;whiteSpace=wrap;html=1;" vertex="1" parent="1">
          <mxGeometry x="110" y="140" width="150" height="60" as="geometry" />
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-24" value="Источники: string" style="text;html=1;align=center;verticalAlign=middle;resizable=0;points=[];autosize=1;strokeColor=none;fillColor=none;" vertex="1" parent="Gya4htj6oJUJKu7-fcux-23">
          <mxGeometry y="30" width="150" height="30" as="geometry" />
        </mxCell>
        <mxCell id="Gya4htj6oJUJKu7-fcux-25" value="" style="endArrow=classic;html=1;rounded=0;exitX=0.51;exitY=0.957;exitDx=0;exitDy=0;exitPerimeter=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="1" source="Gya4htj6oJUJKu7-fcux-24" target="sQxFZhmoRU4-G_I5SNlf-1">
          <mxGeometry width="50" height="50" relative="1" as="geometry">
            <mxPoint x="40" y="370" as="sourcePoint" />
            <mxPoint x="90" y="320" as="targetPoint" />
          </mxGeometry>
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
s_diagramm2.drawio…]()
