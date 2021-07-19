import styled from "styled-components";
import { BLACK, BLAZE_ORANGE, WHITE } from "../../../Styles/Colors.styles";

export const TablePaginationContainer = styled.ul`
  display: flex;
  list-style: none;
`;

export const TablePaginationButton = styled.li`
  margin: 6em 0.25em 0;
  button {
    color: ${BLACK};
    float: left;
    padding: 0.5em 0.75em;
    border: 0;
    font-size: 1rem;
    border-radius: 25px;
    background: none;
    color: ${(props) => props.active && WHITE};
    background: ${(props) => props.active && BLACK};
    :hover {
      color: ${WHITE};
      background: ${BLAZE_ORANGE};
    }
  }
`;
