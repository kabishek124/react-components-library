import { jsx } from 'react/jsx-runtime';
import styled from 'styled-components';

const StyledButton = styled.button `
  padding: ${(props) => {
    switch (props.size) {
        case "small":
            return "5px 10px";
        case "medium":
            return "10px 15px";
        case "large":
            return "15px 20px";
    }
}};
  outline: none;
  font-size: 1em;
  color: ${(props) => props.textColor};
  background-color: ${(props) => {
    if (props.variant === "filled") {
        switch (props.color) {
            case "primary":
                return "#007bff";
            case "secondary":
                return "#6c757d";
            case "success":
                return "#218838";
            case "default":
                return "#17a2b8";
            case "error":
                return "#dc3545";
            case "warning":
                return "#ffc107";
            default:
                return "#17a2b8";
        }
    }
    else if (props.variant === "ghost") {
        return "transparent";
    }
    else {
        return "transparent";
    }
}};
  border: ${(props) => {
    if (props.variant === "outline") {
        switch (props.color) {
            case "primary":
                return "2px solid #007bff";
            case "secondary":
                return "2px solid #6c757d";
            case "success":
                return "2px solid #218838";
            case "default":
                return "2px solid #17a2b8";
            case "error":
                return "2px solid #dc3545";
            case "warning":
                return "2px solid #ffc107";
            default:
                return "2px solid #17a2b8";
        }
    }
    else {
        return "none";
    }
}};
  border-radius: ${(props) => (props.shape === "rounded" ? "20px" : "4px")};
  opacity: ${(props) => (props.disabled ? "0.6" : "1")}
  display : flex;
  justify-content : center;
  align-items : center;
  ${(props) => props.iconPosition === "left" && `flex-direction : row-reverse;`};
  ${(props) => props.iconPosition === "right" && `flex-direction : row;`}
`;
const Button = ({ onClick, children, size, shape, color, textColor, variant, label, hideLabel, disabled, icon, iconPosition, }) => {
    return (jsx(StyledButton, { onClick: onClick, size: size, shape: shape, color: color, textColor: textColor, variant: variant, disabled: disabled, children: !hideLabel ? label || children : "" }));
};

export { Button };
//# sourceMappingURL=index.js.map
