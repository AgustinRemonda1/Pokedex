import styled from "styled-components";
import {
  SCREEN_MD_MIN,
  SCREEN_SM_MIN,
} from "../../../Styles/Breakpoints.styles";
import { BLACK, BLAZE_ORANGE, WHITE } from "../../../Styles/Colors.styles";

export const TablePaginationContainer = styled.ul`
  display: flex;
  list-style: none;
  padding: 0 5em 0 0;
  margin: 0 auto;
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    padding: 0;
    flex-wrap: wrap;
    margin-top: 3em;
    margin-bottom: 3em;
  }
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
  @media (max-width: ${SCREEN_MD_MIN}) {
    margin: 3em 0.25em;
  }
  @media (max-width: ${SCREEN_SM_MIN}) {
    margin: 0;
    button {
      font-size: 0.75rem;
    }
  }
`;
