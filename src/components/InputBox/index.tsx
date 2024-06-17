import React, { useState } from "react";
import styled from "styled-components";

type InputProps = {
  children: React.ReactNode;
  onClick?: () => void;
  label?: string;
  type?: "text" | "password" | "number";
  placeholder?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
//   font-weight: bold;
`;

const Description = styled.div`
  font-size: 0.8em;
  color: #666;
  margin-top: 4px;
`;

const InputBox = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const Input: React.FC<InputProps> = ({
  label,
  description,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Wrapper>
      {label && (
        <Label>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </Label>
      )}
      <div style={{ position: "relative" }}>
        <InputBox
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          disabled={disabled}
          pattern={type === "number" ? "\\d*" : undefined}
        />
        {type === "password" && (
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "relative",
              right: "45px",
              top: "60%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        )}
      </div>
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};

export default Input;
