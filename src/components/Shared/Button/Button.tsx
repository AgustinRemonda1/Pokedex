import React, { FC, ReactNode } from "react";
import { ReactSVG } from "react-svg";
import Tooltip from "../Tooltip/Tooltip";
import { buttonTypes } from "./Button.config";
import { StyledButton, SingleButton, Text } from "./Button.styled";

export interface ButtonProps {
  icon: string;
  text: string;
  action: (value?: ReactNode) => void;
  value?: ReactNode;
  active?: boolean;
  type?: "small-normal-button" | "button-with-tooltip";
}

const Button: FC<ButtonProps> = ({
  icon,
  text,
  action,
  value,
  active,
  type,
}) => {
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
