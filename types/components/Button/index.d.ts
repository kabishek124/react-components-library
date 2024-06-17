import React from "react";
type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    color?: "primary" | "secondary" | "success" | "default" | "error" | "warning";
    size?: "small" | "medium" | "large";
    shape?: "rounded" | "square";
    label?: string;
    textColor?: string;
    variant?: "filled" | "outline" | "ghost";
    hideLabel?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
};
declare const Button: React.FC<ButtonProps>;
export default Button;
