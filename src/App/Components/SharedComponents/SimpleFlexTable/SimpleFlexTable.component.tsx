import React from "react";
import { FlexTable, FlexRow } from "./SimpleFlexTable.styles";

interface SimpleFlexTableProps {
  config: any;
}

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
