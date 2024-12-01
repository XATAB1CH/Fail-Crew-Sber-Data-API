import React, { useState } from "react";

type Option = {
  value: string;
  label: string;
  type: string;
};

type DropdownProps = {
  options: Option[] | string[];
  placeholder: string;
  label: string;
  onSelect: (value: string) => void;
};

export default function Dropdown({ options, label, placeholder, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [searchParam, setSearchParam] = useState<string>("");

  const filteredOptions =
    options.length > 0 && typeof options[0] === "string"
      ? (options as string[]).filter((option) =>
          option.toLowerCase().includes(searchParam.toLowerCase())
        )
      : (options as Option[]).filter((option) =>
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
    setSearchParam("");
    setIsOpen(false);
  };

  return (
    <div className="">
      <label
        htmlFor="dropdown"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id="dropdown"
        type="text"
        value={selectedOption || searchParam}
        onClick={toggleDropdown}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="mt-1 px-4 py-2 w-full bg-white border border-primary rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
      />

      {isOpen && (
        <div className="absolute z-20 mt-1 bg-white border rounded-lg max-h-60 overflow-y-auto">
          {filteredOptions.length > 0 ? (
            <ul>
              {filteredOptions.map((option: any, index: number) => (
                <li
                  key={typeof option === "string" ? index : option.value}
                  onClick={() =>
                    handleOptionClick(
                      typeof option === "string" ? option : option.value
                    )
                  }
                  className="px-4 py-2 hover:bg-primary hover:text-white cursor-pointer"
                >
                  {typeof option === "string" ? option : option.label}
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-2 text-gray-500">Ничего нет</p>
          )}
        </div>
      )}
    </div>
  );
}
