import React, { useState } from 'react'

type Option = {
    value: string;
    label: string;
    type: string;
};

type DropdownProps = {
    options: Option[]; 
    label: string; 
    onSelect: (value: string) => void;
};

export default function Dropdown({options, label, onSelect}: DropdownProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [searchParam, setSearchParam] = useState<string>('');
    
    const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(searchParam.toLowerCase())
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchParam(e.target.value);
        setSelectedOption(e.target.value);
        setIsOpen(true);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      onSelect(option); 
      setSearchParam('');
      setIsOpen(false);
    };
  
    return (
        <div className="relative">
            <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            
            <input
                id="dropdown"
                type="text"
                value={selectedOption || searchParam}
                onClick={toggleDropdown}
                onChange={handleSearchChange}
                placeholder="test"
                className="mt-1 px-4 py-2 w-full bg-white border border-primary rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />

            {isOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg max-h-60 overflow-y-auto">
                {filteredOptions.length > 0 ? (
                    <ul>
                    {filteredOptions.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleOptionClick(option.value)}
                            className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
                        >
                        {option.label}
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p className="px-4 py-2 text-gray-500">Ничего нет</p>
                )}
                </div>
            )}
        </div>
    )
}