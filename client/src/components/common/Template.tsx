import React, { useEffect, useState, useRef } from "react";
import { Source } from "../../types/Sourse";
import { useParams } from "react-router-dom";
import JsonView from "@uiw/react-json-view";
import JsonViewEditor from "@uiw/react-json-view/editor";
import Button from "../ui/Button";
import parseJson from "../../utils/parseJson";
import Dropdown from "../ui/Dropdown";
import Input from "../ui/Input";

interface Ingredient {
  IType: string;
  name: string;
  val: string;
}

interface Recepit {
  ingredient: Ingredient[];
}

type TemplateProps = {
  schemaJson: Object;
  source: Source;
};

export default function Template({ schemaJson, source }: TemplateProps) {
  const [activeTab, setActiveTab] = useState<string>("source");
  const [result, setResult] = useState<string>("");
  const [recepit, setRecepit] = useState<Recepit>();
  const [ingrs, setIngrs] = useState<Ingredient[]>([]);

  const [schemaParsed, setSchemaParsed] = useState<any[]>([]);

  const [selected, setSelected] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const [isVisible, setIsVisible] = useState(true);
  const blockRef = useRef<HTMLDivElement | null>(null);

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);

    if (blockRef.current) {
      blockRef.current.style.display = isVisible ? "none" : "block";
      blockRef.current.style.height = isVisible ? "fit-content" : "0px";
    }
  };

  const addNew = () => {
    const newIngredient: Ingredient = {
      IType: selectedType,
      name: selectedType == "fun" ? selectedValue : "float",
      val: selectedType == "fun" ? "" : selectedValue,
    };

    setIngrs((prevIngr) => [...prevIngr, newIngredient]);    

    setRecepit((prevRecepit) => ({
      ...prevRecepit,
      ingredient: [...(prevRecepit?.ingredient || []), newIngredient, {IType: "fun", name: "return", val: ""}],
    }));
  };

  useEffect(() => {
    const getValues = () => {
      const parsedData = parseJson(schemaJson);
      setSchemaParsed(
        parsedData.flatMap((section: any) =>
          section.fields.map((field: any) => ({
            value: `${field.fieldName}`,
            label: `${section.section} ${field.fieldName}: ${
              field.description || field.fieldName
            }`,
          }))
        )
      );
    };

    getValues();
  }, []);

  const save = () => {
    console.log(recepit);
  }

  const handleSelect2 = (value: string) => {
    setSelectedType(value);
  };

  const handleSelect = (value: string) => {
    setSelected(value);
    setSelectedValue(findBySelected(value).toString());
  };

  const findBySelected = (val: string) => {
    for (const key in source.data) {
      console.log(source.data[key]);
      if (val in source.data[key]) {
        console.log(source.data[key][val]);
        return source.data[key][val];
      }
    }
    return "Ключ не найден";
  };

  return (
    <div className="rounded-lg shadow-md p-4 mt-4 bg-white flex flex-col overflow-y-auto h-96 mb-4">
      <div className="flex justify-between">
        <div className="flex mb-4 gap-4">
          <div
            onClick={() => setActiveTab("source")}
            className={`px-4 py-2 cursor-pointer rounded-lg  ${
              activeTab === "source" ? "bg-primary  text-white" : "bg-gray-200"
            }`}
          >
            Источник
          </div>
          <div
            onClick={() => setActiveTab("schema")}
            className={`px-4 py-2 cursor-pointer rounded-lg ${
              activeTab === "schema" ? "bg-primary  text-white" : "bg-gray-200"
            }`}
          >
            Схема
          </div>
          <div
            onClick={() => setActiveTab("ingredients")}
            className={`px-4 py-2 cursor-pointer rounded-lg ${
              activeTab === "ingredients"
                ? "bg-primary text-white"
                : "bg-gray-200"
            }`}
          >
            Поля
          </div>
        </div>
        <div
          className="text-gray-500 font-base cursor-pointer"
          onClick={toggleVisibility}
        >
          Скрыть
        </div>
      </div>
      <div ref={blockRef}>
        {activeTab === "source" && (
          <>
            <div className="font-bold text-2xl">Источник {source.id}</div>
            <JsonView value={source.data} />
          </>
        )}

        {activeTab === "schema" && (
          <>
            <div className="font-bold text-2xl">Схема</div>
            <JsonView value={schemaJson} />
          </>
        )}

        {activeTab === "ingredients" && (
          <>
            <div className="font-bold text-2xl">Ингредиенты</div>
            <div className="flex flex-col">
              {ingrs &&
                ingrs.map((ingr, index) => (
                  <div key={index} className="flex justify-center gap-6">
                    <div className="font-bold text-base">{ingr.IType}</div>
                    <div className="font-bold text-base">{ingr.name}</div>
                    <div className="font-bold text-base">{ingr.val}</div>
                  </div>
                ))}
            </div>
            <div className="flex justify-center gap-6">
              <Dropdown
                label="Выберите"
                placeholder="Выберите поле"
                options={schemaParsed}
                onSelect={handleSelect}
              />
              <Dropdown
                label="Тип"
                placeholder="Выберите тип"
                options={["val", "fun"]}
                onSelect={handleSelect2}
              />
              <Input
                label="Значение"
                placeholder="Значение"
                value={selectedValue}
                onChange={setSelectedValue}
                type="string"
              />
            </div>
            <div className="mt-4 justify-center flex">
              <Button title="Добавить" type={1} onClick={addNew} />
            </div>
            
          </>
        )}
      </div>
      <div className="mt-4">
        <Button title="Сохранить" onClick={() => save()} />
      </div>
    </div>
  );
}
