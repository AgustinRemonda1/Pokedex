import styled from "styled-components";
import {
  BLACK,
  MINE_SHAFT,
  NEON_CARROT,
  OUTRAGEOUS_ORANGE,
  SILVER,
  WHITE,
  YOUR_ROSE,
} from "../../Styles/Colors.styles";

export const PokemonListContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap; wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const PokemonListGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  height: 100%;
`;

export const PokedexTitle = styled.h2`
  margin: 0 0 0 0.5em;
`;

export const NumberTitle = styled.h2`
  margin: 0 0 0 0.5em;
  color: ${WHITE};
  text-align: center;
`;

export const Header = styled.div`
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
`;

export const ListContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex: 1 1 65%;
  flex-direction: column;
  justify-items: flex-end;
  align-items: flex-end;
  z-index: 100;
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
`;

export const ImageWrapper = styled.div`
  flex: 1 1 50%;
  position: relative;
  width: 50%;
  height: 85%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  z-index: 100;
  img {
    padding: 1.5em;
    width: 60%;
    heigh: 60%;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  background: ${BLACK};
  position: relative;
  justify-content: flex-end;
  min-height: 35px;
  z-index: 100;
`;
