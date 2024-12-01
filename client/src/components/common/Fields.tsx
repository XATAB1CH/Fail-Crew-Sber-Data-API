import React, {useState, useMemo, useCallback} from 'react'
import Dropdown from '../ui/Dropdown'
import parseJson from '../../utils/parseJson';
import { schema } from '../../schemas/schema1';
import Button from '../ui/Button';

interface SelectedField {
    type: string,

};

type FieldsProps = {}

export default function Fields({}: FieldsProps) {
    const [selected, setSelected] = useState<string>('');

    const [selectedFields, setSelectedFields] = useState<SelectedField[]>([]);

    const handleSelect = (value: string) => {
        setSelected(value);
    };

    
    
    const dropdownOptions = useMemo(() => {
        const parsedData = parseJson(schema); 
        return parsedData.flatMap((section: any) =>
            section.fields.map((field: any) => ({
                value: `${field.fieldName}`,
                label: `${section.section} ${field.fieldName}: ${field.description || field.fieldName}`,
                type: `${field.type}`
            }))
        );
    }, [schema]);
    
    const addField = useCallback(() => {
        const selectedOption = dropdownOptions.find((option) => option.value === selected);
        if (selectedOption) {
            setSelectedFields((prev) => [...prev, selectedOption]);
            console.log('Added field:', selectedOption);
        } else {
            console.warn('No field selected!');
        }
    }, [selected, dropdownOptions]);

    return (
        <div className="flex flex-col gap">
            <div className="font-bold text-2xl">Поля</div>
            <div className="rounded-lg shadow-md p-4 mt-4 bg-white flex flex-col">
                <div className="flex flex-col justify-center items-center">
                    <Button title='Добавить поле' onClick={addField} type={1}/>
                </div>
            {/* <Dropdown options={dropdownOptions} label="Choose an option" onSelect={handleSelect} /> */}
            </div>
        </div>
   
  )
}