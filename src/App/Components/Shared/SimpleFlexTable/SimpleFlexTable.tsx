import React, { FC, ReactNode } from "react";
import { FlexTable, FlexRow } from "./SimpleFlexTable.styled";

export interface FlexTableConfigInterface {
  title: string;
  data: ReactNode;
}

export interface SimpleFlexTableProps {
  config: FlexTableConfigInterface[];
}

const SimpleFlexTable: FC<SimpleFlexTableProps> = ({ config }) => {
  return (
    <FlexTable>
      {config.map((config: any, index: number) => (
        <FlexRow key={index}>
          <span>{config.title}</span>
          <span> {config.data}</span>
        </FlexRow>
      ))}
    </FlexTable>
  );
};

export default SimpleFlexTable;
