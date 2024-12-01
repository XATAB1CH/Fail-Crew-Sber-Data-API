import React, { useEffect, useState, useRef } from "react";
import { Source } from "../../types/Sourse";
import { useParams } from "react-router-dom";
import Template from "../../components/common/Template";
import { temp } from "../../store/temp";
import { adapter } from "../../store/adapter";
import { scheme } from "../../store/scheme";

interface Ingredient {
  IType: string;
  name: string;
  val: string;
}

interface Recepit {
  ingredient: Ingredient[];
}

export default function TemplateDetails() {
  const { templateId } = useParams<string>();

  const template = temp.find((t) => t.id == Number(templateId));

  // const findAdapterById = (id: number): Source => {
  //   return adapter.find((ad) => ad.id == id);
  // };

  return (
    <div className="flex flex-col gap mt-4">
      <div className="flex items-center justify-between">
        <div className="font-bold text-2xl">{templateId}</div>
      </div>
      {/* {
        (template && (
          <Template schemaJson={template["sett"]["scheme"]} source={findAdapterById(template["sett"]["source"])} />
          // <Template schemaJson={schema1} source={source1} />
        ))
      } */}
      
      <Template schemaJson={scheme[0]} source={adapter[1]} />
      <Template schemaJson={scheme[1]} source={adapter[2]} />
    </div>
  );
}
