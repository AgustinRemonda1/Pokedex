import styled from "styled-components";
import {
  WHITE,
  YOUR_ROSE,
  SILVER,
  BLACK,
  MINE_SHAFT,
} from "assets/Styles/Colors.styles";
import { SCREEN_MD_MIN } from "assets/Styles/Breakpoints.styles";

export const PokedexTitle = styled.h2`
  margin: 0 0 0 0.5em;
`;

export const NumberTitle = styled.h2`
  margin: 0 0 0 0.5em;
  color: ${WHITE};
  text-align: center;
`;

export const PokemonHeader = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  background: ${BLACK};
  background: linear-gradient(
    90deg,
    ${YOUR_ROSE} 0%,
    ${YOUR_ROSE} 17%,
    ${SILVER} 38%
  );
  height: 35px;
  z-index: 100;
`;

export const HeaderBackgroundLayout = styled.div`
  position: absolute;
  top: 0;
  left: 40%;
  right: 0;
  width: 87%;
  height: 100%;
  background: linear-gradient(104deg, ${WHITE + "00"} 20%, ${MINE_SHAFT} 20%);
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    display: none;
  }
`;
