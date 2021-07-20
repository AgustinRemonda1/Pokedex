import styled from "styled-components";
import { SCREEN_MD_MIN } from "../../Styles/Breakpoints.styles";
import {
  BLACK,
  MINE_SHAFT,
  PERSIAN_RED,
  RED_ORANGE,
  WHITE,
} from "../../Styles/Colors.styles";

export const PokemonDetailsContainer = styled.div`
  display: flex;
  flex-wrap; wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  flex: 1 1 auto;
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    flex-direction: column;
    background: ${MINE_SHAFT};
    height: 100%;
  }
}
`;

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

export const PokemonImageWrapper = styled.div`
  flex: 0 0 45%;
  width: 45%;
  height: 85%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: space-between;
  z-index: 100;
  img {
    margin-top: 3em;
    padding: 1.5em;
    width: 60%;
    heigh: 60%;
  }
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    flex: 0 0 100%;
    order: 1;
    margin-top: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    img {
      margin-top: 1em;
      margin-bottom: 1em;
      width: auto;
      height: auto;
      min-width: 85%;
      min-height: 85%;
      background: ${WHITE};
      border-radius: 100%;
      padding: 0.5em;
    }
  }
`;

export const PokemonImageHeader = styled.div`
  margin-top: 1.5em;
  width: 100%;
  background: linear-gradient(100deg, ${WHITE} 5%, ${BLACK} 5%);
  font-size: 1.25rem;
  padding: 0.5em 3em;
  color: ${WHITE};
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    margin-top: 0;
    background: ${BLACK};
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
