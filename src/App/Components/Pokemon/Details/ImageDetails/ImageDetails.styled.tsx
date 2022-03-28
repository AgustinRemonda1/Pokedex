import styled from "styled-components";
import { SCREEN_MD_MIN } from "../../../../Assets/Styles/Breakpoints.styles";
import { BLACK, WHITE } from "../../../../Assets/Styles/Colors.styles";

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
    height: 60%;
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
