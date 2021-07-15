import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  svg {
    width: 50px;
    height: 50px;
    fill: #ffffff;
    :hover {
      fill: #ff6600;
    }
  }
`;

export const Text = styled.div`
  margin-top: 1em;
  font-size: 1rem;
`;

export const SingleButton = styled.button`
  display: flex;
  cursor: pointer;
  background: none;
  border: 0;
  color: ${(props) => (props.active ? "#000000" : "#ffffff")};
  :hover {
    color: #000000;
    svg {
      fill: #000000;
    }
  }
  svg {
    width: 50px;
    height: 50px;
    fill: ${(props) => (props.active ? "#000000" : "#ffffff")};
  }
`;
