import React, { Children } from "react";
import styled from "styled-components";

type TextAreaProps = {
  children: React.ReactNode;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  description?: string;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
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

const TextAreaStyle = styled.textarea`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  resize: vertical;
  width: 40%;
  min-height: 150px;
  max-height: 250px;
  &:focus {
    border-color: #007bff;
  }

  &:disabled {
    background-color: #f5f5f5;
  }
`;

const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  description,
  disabled = false,
  required,
}) => {
  return (
    <Wrapper>
      {label && (
        <Label>
          {label}
          {required && <span style={{ color: "red" }}>*</span>}
        </Label>
      )}
      <TextAreaStyle disabled={disabled} placeholder={placeholder} />
      {description && <Description>{description}</Description>}
    </Wrapper>
  );
};

export default TextArea;
