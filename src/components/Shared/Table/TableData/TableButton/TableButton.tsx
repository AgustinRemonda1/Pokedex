import React, { FC } from "react";
import Button from "../../../Button/Button";

interface TableButtonProps {
  column: any;
  index: number;
  pokemonIndex: number;
}

const TableButton: FC<TableButtonProps> = ({ column, index, pokemonIndex }) => {
  return (
    <td key={index}>
      <Button
        icon={column.icon}
        text={column.name}
        action={column.onClick}
        value={pokemonIndex}
        type={column.type}
      />
    </td>
  );
};

export default TableButton;
