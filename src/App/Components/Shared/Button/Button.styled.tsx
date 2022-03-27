import styled from "styled-components";
import { SCREEN_SM_MIN } from "../../../Styles/Breakpoints.styles";
import { BLACK, BLAZE_ORANGE, WHITE } from "../../../Styles/Colors.styles";
import { buttonTypes } from "./Config";

interface TextInterface {
  type?: "small-normal-button" | "button-with-tooltip";
}

interface SingleButtonInterface {
  type: "small-normal-button" | "button-with-tooltip" | any;
  active?: boolean;
}

export const StyledButton = styled.button`
  cursor: pointer;
  background: none;
  border: 0;
  svg {
    width: 50px;
    height: 50px;
    fill: ${WHITE};
    :hover {
      fill: ${BLAZE_ORANGE};
    }
  }
`;

export const Text = styled.div<TextInterface>`
  margin-top: ${(props) =>
    props.type === buttonTypes.smallNormalButton ? "0.5em" : "1em"};
  font-size: 1rem;
`;

export const SingleButton = styled.button<SingleButtonInterface>`
  display: flex;
  cursor: pointer;
  background: none;
  border: 0;
  color: ${(props) => (props.active ? BLACK : WHITE)};
  :hover {
    color: ${(props) =>
      props.type === buttonTypes.smallNormalButton ? BLAZE_ORANGE : BLACK};
    svg {
      fill: ${(props) =>
        props.type === buttonTypes.smallNormalButton ? BLAZE_ORANGE : BLACK};
    }
  }
  svg {
    width: ${(props) =>
      props.type === buttonTypes.smallNormalButton ? "30px" : "50px"};
    height: ${(props) =>
      props.type === buttonTypes.smallNormalButton ? "30px" : "50px"};
    fill: ${(props) => (props.active ? BLACK : WHITE)};
  }
  @media screen and (max-width: ${SCREEN_SM_MIN}) {
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
`;
