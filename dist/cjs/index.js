'use strict';

var jsxRuntime = require('react/jsx-runtime');
var styled = require('styled-components');

const StyledButton = styled.button `
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
const Button = ({ children, onClick }) => {
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsx(StyledButton, { onClick: onClick, children: children }) }));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
