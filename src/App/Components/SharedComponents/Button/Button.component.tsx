import React from "react";
import { ReactSVG } from "react-svg";
import Tooltip from "../Tooltip/Tooltip.component";
import { buttonTypes } from "./Button.config";
import { ButtonInterface } from "./Button.interfaces";
import { StyledButton, SingleButton, Text } from "./Button.styles";

const Button = ({
  icon,
  text,
  action,
  value,
  active,
  type,
}: ButtonInterface) => {
  const ToolTipButtonActive = buttonTypes.buttonWithTooltip === type;

  return ToolTipButtonActive ? (
    <Tooltip msg={text}>
      <StyledButton onClick={() => action(value)}>
        <ReactSVG src={icon} />
      </StyledButton>
    </Tooltip>
  ) : (
    <SingleButton onClick={() => action(value)} active={active} type={type}>
      <ReactSVG src={icon} />
      <Text type={type}>{text}</Text>
    </SingleButton>
  );
};

export default Button;
