import React from "react";
import { ReactSVG } from "react-svg";
import Tooltip from "../Tooltip/Tooltip.component";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
  icon: any;
  text: string;
  action: (value: any) => void;
  value: any;
}

const Button = ({ icon, text, action, value }: ButtonProps) => {
  return (
    <Tooltip msg={text}>
      <StyledButton onClick={() => action(value)}>
        <ReactSVG src={icon} />
      </StyledButton>
    </Tooltip>
  );
};

export default Button;