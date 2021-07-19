import React from "react";
import { ReactSVG } from "react-svg";
import Tooltip from "../Tooltip/Tooltip.component";
import { ButtonInterface } from "./Button.interface";
import { StyledButton, SingleButton, Text } from "./Button.styles";

const Button = ({
  icon,
  text,
  action,
  value,
  tooltipDisabled,
  active,
  type,
}: ButtonInterface) => {
  return tooltipDisabled ? (
    <SingleButton onClick={() => action(value)} active={active} type={type}>
      <ReactSVG src={icon} />
      <Text type={type}>{text}</Text>
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
