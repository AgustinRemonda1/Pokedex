import styled from "styled-components";
import { SCREEN_MD_MIN } from "../../../../Styles/Breakpoints.styles";
import {
  BLACK,
  MINE_SHAFT,
  PERSIAN_RED,
  RED_ORANGE,
  WHITE,
} from "../../../../Styles/Colors.styles";

export const PokemonDetailsGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  position: relative;
  display: flex;
  flex: 0 0 60%;
  width: 100%;
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    flex: 0 0 100%;
    order: 2;
    justify-content: center;
    padding-bottom: 2em;
  }
`;

export const PokemonDetailLayoutTable = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    277deg,
    ${WHITE} 20%,
    ${PERSIAN_RED} 20%,
    ${PERSIAN_RED} 38%,
    ${RED_ORANGE} 38%
  );
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    background: ${PERSIAN_RED};
    border: 2px ${RED_ORANGE} solid;
  }
`;

export const HeaderButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 0.75em;
  z-index: 105;
`;

export const FooterButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 0.75em;
  background: ${MINE_SHAFT};
  box-shadow: 2px 2px 2px 1px ${BLACK + "20"};
  z-index: 105;
`;
