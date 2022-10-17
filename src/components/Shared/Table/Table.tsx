import React, { FC } from "react";
import { TableContainer, Table } from "./Table.styled";
import TablePagination from "../TablePagination/TablePagination";
import TableData from "./Content/TableData";

export interface TableProps {
  config: any[];
  dataset: any[];
  onHover: (value: number) => void;
  total: number;
  currentPage: number;
  onPagination: (page: number) => void;
  perPage: number;
}

const TableComponent: FC<TableProps> = ({
  config,
  dataset,
  onHover,
  onPagination,
  currentPage,
  perPage,
  total,
}: TableProps) => {
  return (
    <TableContainer>
      <Table>
        <tbody>
          {dataset.map((row, index) => (
            <tr key={index} onMouseEnter={() => onHover(index)}>
              <TableData
                row={row}
                pokemonIndex={index}
                config={config}
                currentPage={currentPage}
              />
            </tr>
          ))}
        </tbody>
      </Table>
      <TablePagination
        perPage={perPage}
        currentPage={currentPage}
        total={total}
        onPagination={onPagination}
      />
    </TableContainer>
  );
};
export default TableComponent;
