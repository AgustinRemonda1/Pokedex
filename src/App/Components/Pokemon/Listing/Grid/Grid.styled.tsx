import styled from "styled-components";
import { SCREEN_MD_MIN } from "../../../../Assets/Styles/Breakpoints.styles";
import { WHITE, OUTRAGEOUS_ORANGE } from "../../../../Assets/Styles/Colors.styles";

export const PokemonListGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  height: 85%;
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    flex-wrap: wrap;
  }
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
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    padding-top: 1em;
    justify-items: center;
    align-items: center;
    flex: 1 1 100%;
    width: 100vw;
    background: ${OUTRAGEOUS_ORANGE};
  }
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
    margin-top: 5em;
    padding: 1.5em;
    width: 60%;
    height: 60%;
  }
  @media screen and (max-width: ${SCREEN_MD_MIN}) {
    flex: 1 1 100%;
    position: relative;
    width: 85%;
    height: 85%;
    img {
      background: ${WHITE};
      border-radius: 50%;
      margin: 1em 0;
      padding: 0.5em;
      min-width: 50%;
      min-height: 50%;
      max-width: 85%;
      max-height: 85%;
      width: auto;
      height: auto;
    }
  }
`;
