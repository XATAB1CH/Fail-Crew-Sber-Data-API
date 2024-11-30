import React, {useState, useMemo, useCallback} from 'react'
import Button from '../ui/Button'
import Dropdown from '../ui/Dropdown';
import parseJSON from '../../utils/parseJson';

type Props = {}

export default function Source({}: Props) {
  const schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Данные для модели",
    "type": "object",
    "required": [
      "studentData",
      "parentsData"
    ],
    "properties": {
      "studentData": {
        "description": "Данные по студенту",
        "type": "object",
        "required": [
          "age",
          "residenceRegion",
          "averageScore",
          "profession",
          "administrativeOffense",
          "overdueLoanStudent"
        ],
        "properties": {
          "age": {
            "description": "Возраст студента",
            "type": "integer"
          },
          "residenceRegion": {
            "description": "Код региона проживания студента",
            "type": "string"
          },
          "averageScore": {
            "description": "Средний балл студента",
            "type": "number"
          },
          "profession": {
            "description": "Будущая специальность студента (согласно словарю)",
            "type": "string"
          },
          "administrativeOffense": {
            "description": "Количество административных нарушений",
            "type": "integer"
          },
          "overdueLoanStudent": {
            "description": "%  кредитов с просрочкой студента",
            "type": "number"
          }
        }
      },
      "parentsData": {
        "description": "Данные по родителям",
        "type": "object",
        "required": [
          "overdueLoanParents",
          "parentsBankruptcy"
        ],
        "properties": {
          "overdueLoanParents": {
            "description": "%  кредитов с просрочкой родителей",
            "type": "number"
          },
          "parentsBankruptcy": {
            "description": "Банкротство родителей",
            "type": "boolean"
          }
        }
      }
    }
  };
  
  const [selected, setSelected] = useState<string>('');

  const handleSelect = (value: string) => {
    setSelected(value);
  };

  const addSource = useCallback(() => {
    console.log('Selected field:', selected);
  }, [selected]);


  const dropdownOptions = useMemo(() => {
    const parsedData = parseJSON(schema); 
    return parsedData.flatMap((section: any) =>
      section.fields.map((field: any) => ({
        value: `${field.fieldName}`,
        label: `${section.section} ${field.fieldName}: ${field.description || field.fieldName}`
      }))
    );
  }, [schema]);


  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="flex items-center justify-between">
        <div className="font-bold text-2xl">Источники</div>
        <Button title='Добавить' onClick={addSource} type={1} />
      </div>
      <div className="rounded-lg shadow-md p-4 mt-4 bg-white flex flex-col">
      <Dropdown options={dropdownOptions} label="Choose an option" onSelect={handleSelect} />
      </div>
    </div>
    
  )
}