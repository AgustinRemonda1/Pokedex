import styled from "styled-components";
import { SCREEN_MD_MIN } from "assets/Styles/Breakpoints.styles";
import {
  MINE_SHAFT,
  NEON_CARROT,
  OUTRAGEOUS_ORANGE,
  WHITE,
} from "assets/Styles/Colors.styles";

export const PokemonListContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    background: ${MINE_SHAFT};
  }
`;

export const SideGradientLayout = styled.div`
  position: absolute;
  top: 0;
  left: 41%;
  right: 0;
  width: 70%;
  height: 100%;
  background: linear-gradient(
    104deg,
    ${WHITE} 20%,
    ${OUTRAGEOUS_ORANGE} 20%,
    ${OUTRAGEOUS_ORANGE} 38%,
    ${NEON_CARROT} 38%
  );
  z-index: 10;
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    display: none;
  }
`;
