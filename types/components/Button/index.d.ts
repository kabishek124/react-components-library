import React from "react";
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
