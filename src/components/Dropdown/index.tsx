import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type DropProps = {
  label?: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
};

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2", disabled: true },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  position: relative;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const Description = styled.div`
  font-size: 0.8em;
  color: #666;
  margin-top: 4px;
`;

const Placeholder = styled.span`
  flex-grow: 1;
  color: #aaa;
`;

const OptionValue = styled.span`
  flex-grow: 1;
  color: #000;
`;

const DropdownBox = styled.div`
  top: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  &:focus-within {
    border-color: #007bff;
  }
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  width: 113%;
  max-height: 150px;
  overflow-y: auto;
`;

const Icon = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-left: 2px solid #333;
  border-bottom: 2px solid #333;
  transform: rotate(-45deg);
  margin-left: auto;
`;

const Option = styled.li<{ disabled?: boolean }>`
  padding: 10px;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
  background: ${(props) => (props.disabled ? "#f8f9fa" : "white")};
  &:hover {
    background: ${(props) => (props.disabled ? "#f8f9fa" : "#f1f1f1")};
  }
`;

const Dropdown: React.FC<DropProps> = ({
  label,
  required,
  placeholder,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const mouseRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: {
    value: string;
    label: string;
    disabled?: boolean;
  }) => {
    setSelectedOption(option?.label);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (mouseRef.current && !mouseRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      {label && (
        <Label>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </Label>
      )}
      <DropdownBox onClick={toggleDropdown} tabIndex={0}>
        <Placeholder>
          {selectedOption ? (
            <OptionValue>
              {
                options?.find((option) => option?.label === selectedOption)
                  ?.label
              }
            </OptionValue>
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          )}
        </Placeholder>
        <Icon />
      </DropdownBox>
      {isOpen && (
        <OptionsList>
          {options?.map((option) => (
            <Option
              key={option.value}
              disabled={option.disabled}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </Option>
          ))}
        </OptionsList>
      )}
    </Wrapper>
  );
};

export default Dropdown;
