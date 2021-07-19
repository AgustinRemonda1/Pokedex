import styled from "styled-components";
import { BLACK } from "../../../Styles/Colors.styles";

export const TooltipText = styled.div`
  cursor: pointer;
`;

export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -15px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 100%;
  padding: 5px 5px;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;

  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;

  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 35px;
    top: -10px;
    position: absolute;

    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
  z-index: 105;
`;

export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: ${BLACK};
    width: 75px;
    padding: 8px 8px;

    &:before {
      border-color: transparent transparent ${BLACK + "80"} ${BLACK + "80"};
    }
  }
`;
