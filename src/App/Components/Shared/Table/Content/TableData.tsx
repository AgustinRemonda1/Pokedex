import React, { FC } from "react";
import TableButton from "./TableButton";
import { formatPokemonNumber } from "../Table.utils";
import { capitalizeStrings } from "../../../../Utils/FormatStrings.utils";

export interface TableDataProps {
  config: any[];
  pokemonIndex: number;
  currentPage: number;
  row: any;
}

const TableData: FC<TableDataProps> = ({
  row,
  pokemonIndex,
  currentPage,
  config,
}) => {
  const TABLE_ROW_INDEX = "index";
  const pokemonNumber = pokemonIndex + 1 + 5 * (currentPage - 1);

  return (
    <>
      {config.map((column, index) =>
        column.isAction ? (
          <TableButton
            column={column}
            index={index}
            pokemonIndex={pokemonIndex}
          />
        ) : column.property === TABLE_ROW_INDEX ? (
          <td key={index}>{formatPokemonNumber(pokemonNumber)}</td>
        ) : (
          <td key={index}>{capitalizeStrings(row[column.property])}</td>
        )
      )}
    </>
  );
};

export default TableData;
