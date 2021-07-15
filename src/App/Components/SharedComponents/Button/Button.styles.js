import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  svg {
    width: 50px;
    height: 50px;
    fill: white;
    :hover {
      fill: #ff6600;
    }
  }
`;
