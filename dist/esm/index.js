import { jsx } from 'react/jsx-runtime';
import styled from 'styled-components';

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
    return (jsx("div", { children: jsx(StyledButton, { onClick: onClick, children: children }) }));
};

export { Button };
//# sourceMappingURL=index.js.map
