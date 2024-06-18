import React, { useState } from "react";
import styled from "styled-components";

type ValidationProps = {
  value: string | RegExp;
  message: string;
};

type InputProps = {
  children: React.ReactNode;
  onClick?: () => void;
  label?: string;
  type?: "text" | "password" | "number";
  placeholder?: string;
  description?: string;
  required?: string;
  disabled?: boolean;
  pattern?: ValidationProps;
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

const ErrorMessage = styled.div`
  color: red;
  margintop: 0.5rem;
`;

const Input: React.FC<InputProps> = ({
  label,
  description,
  placeholder,
  type = "text",
  required,
  pattern,
  disabled = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (required && !value) {
      //console.log("Mani");
      setError(required);
      return;
    }
    // console.log(pattern, "regex");
    // if (pattern) {
    //   let regex: RegExp;
    //   try {
    //     console.log(pattern.value === "string", "regex99");
    //     regex =
    //       typeof pattern.value === "string"
    //         ? new RegExp(pattern.value)
    //         : pattern.value;
    //     console.log(regex, "regex");
    //   } catch (e) {
    //     console.error("Invalid regex pattern provided:", pattern.value);
    //     setError("Invalid pattern");
    //     return;
    //   }
    //   if (!regex.test(value)) {
    //     setError(pattern.message);
    //     return;
    //   }
    // }

    setError("");
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
          onChange={handleValidation}
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
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};

export default Input;
