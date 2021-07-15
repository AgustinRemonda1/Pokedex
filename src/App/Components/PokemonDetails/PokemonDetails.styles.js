import styled from "styled-components";

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
`;

export const PokemonDetailsContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start
  position: relative;
  display: flex;
  flex: 0 0 60%;
  width: 100%;
`;

export const PokemonImageWrapper = styled.div`
  flex: 0 0 5%;
  margin-top: 9em;
  width: 45%;
  height: 85%;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  align-items: stretch;
  justify-content: space-between;
  z-index: 100;
  img {
    margin-top: 3em;
    padding: 1.5em;
    width: 60%;
    heigh: 60%;
  }
`;

export const PokemonImageHeader = styled.div`
  margin-top: 1.5em;
  width: 100%;
  background: linear-gradient(
    100deg,
    rgba(255, 255, 255, 1) 5%,
    rgba(0, 0, 0, 1) 5%
  );
  font-size: 1.25rem;
  padding: 0.5em 3em;
  color: #ffffff;
`;

export const PokemonDetailLayoutTable = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 60%;
  background: linear-gradient(
    277deg,
    rgba(255, 255, 255, 1) 20%,
    rgba(204, 51, 51, 1) 20%,
    rgba(204, 51, 51, 1) 38%,
    rgba(255, 51, 51, 1) 38%
  );
`;

export const ButtonsContainer = styled.div`
  width: 90%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 0.75em;
  z-index: 105;
`;
