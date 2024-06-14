import React from "react";
declare const handleButtonClick: () => void;
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => typeof handleButtonClick;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
