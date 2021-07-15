import styled from "styled-components";

export const CharacterListContainer = styled.div`
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

export const CharacterListGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1 1 0;
`;

export const PokedexTitle = styled.h2`
  margin: 0 0 0 0.5em;
`;

export const NumberTitle = styled.h2`
  margin: 0 0 0 0.5em;
  color: #ffffff;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  background: #000000;
  background: linear-gradient(
    90deg,
    rgba(255, 204, 204, 1) 0%,
    rgba(255, 204, 204, 1) 17%,
    rgba(204, 204, 204, 1) 38%
  );
  height: 5vh;
  z-index: 100;
`;

export const HeaderBackgroundLayout = styled.div`
  position: absolute;
  top: 0;
  left: 40%;
  right: 0;
  width: 79%;
  height: 100%;
  background: linear-gradient(104deg, rgba(255, 255, 255, 0) 20%, #333333 20%);
`;

export const ListContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
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
  width: 60%;
  height: 100%;
  background: linear-gradient(
    104deg,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 102, 51, 1) 20%,
    rgba(255, 102, 51, 1) 38%,
    rgba(255, 153, 51, 1) 38%
  );

  z-index: 10;
`;

export const ImageWrapper = styled.div`
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
