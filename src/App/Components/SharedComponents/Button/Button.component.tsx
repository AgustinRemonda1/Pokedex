import React from "react";
import { ReactSVG } from "react-svg";
import Tooltip from "../Tooltip/Tooltip.component";
import { StyledButton, SingleButton, Text } from "./Button.styles";

interface ButtonProps {
  icon: any;
  text: string;
  action: (value: any) => void;
  value: any;
  tooltipDisabled?: boolean;
  active?: boolean;
}

const Button = ({
  icon,
  text,
  action,
  value,
  tooltipDisabled,
  active,
}: ButtonProps) => {
  return tooltipDisabled ? (
    <SingleButton onClick={() => action(value)} active={active}>
      <ReactSVG src={icon} />
      <Text>{text}</Text>
    </SingleButton>
  ) : (
    <Tooltip msg={text}>
      <StyledButton onClick={() => action(value)}>
        <ReactSVG src={icon} />
      </StyledButton>
    </Tooltip>
  );
};

export default Button;
