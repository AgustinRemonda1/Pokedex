import styled from "styled-components";
import { BLACK, GRAY, SILVER, WHITE } from "../../../Styles/Colors.styles";

export const FlexTable = styled.div`
  margin-top: 0.75em;
  width: 90%;
  height: 50%;
  display: flex;
  font-size: 1.25rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${WHITE};
`;

export const FlexRow = styled.div`
  box-shadow: 2px 2px 2px 1px ${BLACK + "20"};
  flex: 1 1 auto;
  background: ${WHITE};
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  color: ${BLACK};
  z-index: 100;
  span {
    padding: 10px;
  }
  span:first-child {
    flex: 0 0 35%;
    background: ${SILVER};
    border: 1px ${GRAY} solid;
  }
  span:last-child {
    flex: 0 0 65%;
  }
  p {
    margin: 0;
  }
`;
