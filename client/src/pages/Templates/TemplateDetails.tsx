import React, {useState} from 'react'
import { Source } from '../../types/Sourse';
import { useParams } from 'react-router-dom';
import JsonView from '@uiw/react-json-view';

type Props = {}

export default function TemplateDetails({}: Props) {
    const { templateId } = useParams<string>();
    const sources: Source[] = [{"id": 21312,
        "name": "hui",
        "data": {
            "result": {
                "INN": "732600000098",
                "SNILS": "10000003966",
                "bankruptcy": {
                    "bankruptcyHistory": [
                        {
                            "court": "Суд г. Владимира",
                            "date": "19.12.2018",
                            "reason": "Изменение состава семьи"
                        }
                    ],
                },
            }
        }}, {
        "id": 36820,
        "name": "dsad",
        "data": {
            "result": {
                "INN": "732600000098",
                "SNILS": "10000003966",
                "bankruptcy": {
                    "bankruptcyHistory": [
                        {
                            "court": "Суд г. Владимира",
                            "date": "19.12.2018",
                            "reason": "Изменение состава семьи"
                        }
                    ],
                    "court": "Суд г. Владимира",
                    "currentBankruptcyProcedure": true,
                    "date": "19.12.2023",
                    "reason": "Утрата стабильного дохода",
                    "stage": "Решение суда"
                },
                "birthDate": "19.12.2005",
                "birthplace": "г. Владимир",
                "fio": "Иванов Иван Иванович",
                "offesnseHistory": [
                    {
                        "court": "Суд г. Владимира",
                        "date": "19.12.2018",
                        "fineAmount": 50000,
                        "offense": "Продажа товаров и продукции без маркировки и (или) нанесения информации",
                        "type": "Административное"
                    }
                ]
            }
        }
    }];

    const [result, setResult] = useState<string>("");
    return (
        <div className="flex flex-col gap mt-4">
            <div className="flex items-center justify-between">
                <div className="font-bold text-2xl">{templateId}</div>
            </div>
            <div className="rounded-lg shadow-md p-4 mt-4 bg-white flex flex-col">
                {sources && sources.map((source) => (
                    <>
                        <div className="font-bold text-2xl">Источник {source.id}</div>
                        <JsonView value={source.data} />
                    </>
                   
                ))}

            </div>
        </div>
    )
}