import styled from "styled-components";
import React, { useState } from "react";

type CheckBoxProps = {
  children: React.ReactNode;
  label: string;
  required?: boolean;
  disabled?: boolean;
  //checked?: boolean;
  variant?: "primary" | "secondary" | "default";
  onChange?: (checked: boolean) => void;
  position?: "after" | "before";
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr; // Ensure two columns: one for checkbox, one for label
  align-items: center; // Align items vertically
  gap: 8px; // Space between the checkbox and label
  margin: 0.5rem 0;
`;

const CheckBoxStyle = styled.input<CheckBoxProps>`
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  display: inline-block;
  margin: 0;

  &:checked {
    background-color: ${(props) => {
      switch (props.variant) {
        case "primary":
          return "#007bff";
        case "secondary":
          return "#6c757d";
        case "default":
          return "#17a2b8";
        default:
          return "#fff";
      }
    }};
    border: none;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:checked::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  display: inline;
`;

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  position,
  onChange,
  variant,
  required,
  disabled,
}) => {
  const handleOnChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      //console.log(variant, "checked");
      onChange(e.target.checked);
    }
  };
  return (
    <Wrapper>
      {position === "before" && (
        <CheckBoxStyle
          type="checkbox"
          variant={variant}
          required={required}
          disabled={disabled}
          onChange={handleOnChnage}
        />
      )}
      <Label>
        {label} {required && <span style={{ color: "red" }}>*</span>}
      </Label>
      {position === "after" && (
        <CheckBoxStyle
          type="checkbox"
          onChange={handleOnChnage}
          //checked={checked}
          required={required}
          disabled={disabled}
          variant={variant}
        />
      )}
    </Wrapper>
  );
};

export default CheckBox;
