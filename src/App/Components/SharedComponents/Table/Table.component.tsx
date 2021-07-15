import React from "react";
import { TableRowTypes } from "./Table.config";
import { Table } from "./Table.styles";
import { formatPokemonNumber } from "./Table.utils";
import Button from "../Button/Button.component";

interface TableProps {
  config: any[];
  dataset: any[];
  onHover: (value: number) => void;
}

const TableComponent = ({ config, dataset, onHover }: TableProps) => {
  const renderButton = (row: any, column: any, index: number) => {
    return (
      <td key={index}>
        <Button
          icon={column.icon}
          text={column.name}
          action={column.onClick}
          value={row[column.property]}
        />
      </td>
    );
  };

  const renderRow = (row: any, pokemonIndex: number) => {
    const pokemonNumber = pokemonIndex + 1;

    return config.map((column, index) =>
      column.isAction ? (
        renderButton(row, column, index)
      ) : column.property === TableRowTypes.index ? (
        <td key={index}>{formatPokemonNumber(pokemonNumber)}</td>
      ) : (
        <td key={index}>{row[column.property]}</td>
      )
    );
  };

  return (
    <Table>
      <tbody>
        {dataset.map((row, index) => (
          <tr key={index} onMouseEnter={() => onHover(index)}>
            {renderRow(row, index)}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default TableComponent;
