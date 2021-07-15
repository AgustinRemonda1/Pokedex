import React from "react";
import { TooltipCard, TooltipText, TooltipBox } from "./Tooltip.styles";

interface TooltipProps {
  children: JSX.Element;
  msg: string;
}

const Tooltip = ({ children, msg }: TooltipProps) => {
  return (
    <>
      <TooltipCard>
        <TooltipText>{children}</TooltipText>
        <TooltipBox>{msg}</TooltipBox>
      </TooltipCard>
    </>
  );
};

export default Tooltip;
