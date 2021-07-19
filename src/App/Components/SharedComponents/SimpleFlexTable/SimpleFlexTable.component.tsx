import React from "react";
import { FlexTable, FlexRow } from "./SimpleFlexTable.styles";
import { SimpleFlexTableProps } from "./SimpleFlexTable.interfaces";

const SimpleFlexTable = ({ config }: SimpleFlexTableProps) => {
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
