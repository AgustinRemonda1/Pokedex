import React from "react";
import { TableRowTypes } from "./Table.config";
import { TableContainer, Table } from "./Table.styles";
import { formatPokemonNumber } from "./Table.utils";
import Button from "../Button/Button.component";
import { capitalizeStrings } from "../../../Utils/FormatStrings.utils";
import TablePagination from "../TablePagination/TablePagination.component";
import { TableProps } from "./Table.interfaces";

const TableComponent = ({
  config,
  dataset,
  onHover,
  setPage,
  page,
  perPage,
  total,
}: TableProps) => {
  const renderButton = (column: any, index: number, pokemonIndex: number) => {
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

  const renderRow = (row: any, pokemonIndex: number) => {
    const pokemonNumber = pokemonIndex + 1 + 5 * (page - 1);

    return config.map((column, index) =>
      column.isAction ? (
        renderButton(column, index, pokemonIndex)
      ) : column.property === TableRowTypes.index ? (
        <td key={index}>{formatPokemonNumber(pokemonNumber)}</td>
      ) : (
        <td key={index}>{capitalizeStrings(row[column.property])}</td>
      )
    );
  };

  return (
    <TableContainer>
      <Table>
        <tbody>
          {dataset.map((row, index) => (
            <tr key={index} onMouseEnter={() => onHover(index)}>
              {renderRow(row, index)}
            </tr>
          ))}
        </tbody>
      </Table>
      <TablePagination
        perPage={perPage}
        page={page}
        total={total}
        setPage={setPage}
      />
    </TableContainer>
  );
};
export default TableComponent;
