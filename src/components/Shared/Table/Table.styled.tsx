import styled from "styled-components";
import { SCREEN_SM_MIN } from "assets/Styles/Breakpoints.styles";
import {
  BLACK,
  BLAZE_ORANGE,
  TEMPTRESS,
  WHITE,
} from "assets/Styles/Colors.styles";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-end;
  align-items: center;
  width: 75%;
  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const Table = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  width: 100%;
  color: ${TEMPTRESS};
  font-size: 1.5rem;

  caption-side: bottom;
  td,
  th {
    border: none;
  }

  td {
    padding: 0.3125em 0.625em;
  }

  tr td:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  tr td:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  tbody tr {
    :hover {
      color: ${WHITE};
      background: linear-gradient(120deg, ${BLAZE_ORANGE} 47%, ${BLACK} 47%);
    }
  }
  @media screen and (max-width: ${SCREEN_SM_MIN}) {
    font-size: 1rem;
  }
`;
