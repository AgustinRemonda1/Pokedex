import styled from "styled-components";
import { SCREEN_MD_MIN } from "../../Styles/Breakpoints.styles";
import { MINE_SHAFT } from "../../Styles/Colors.styles";

export const PokemonDetailsContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
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
`;
