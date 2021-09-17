import React, { FC, ReactNode } from "react";
import { TooltipCard, TooltipText, TooltipBox } from "./Tooltip.styled";

export interface TooltipProps {
  children: ReactNode;
  msg: string;
}

const Tooltip: FC<TooltipProps> = ({ children, msg }) => {
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
