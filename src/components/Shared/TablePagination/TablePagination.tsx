import React, { FC, useMemo } from "react";
import {
  TablePaginationContainer,
  TablePaginationButton,
} from "./TablePagination.styled";
import { calculatePageNumbers } from "./Utils";

export interface TablePaginationProps {
  perPage: number;
  currentPage: number;
  total: number;
  onPagination: (page: number) => void;
}

const TablePagination: FC<TablePaginationProps> = ({
  perPage,
  total,
  onPagination,
  currentPage,
}) => {
  const { firstPage, pageNumbers, lastPage } = calculatePageNumbers(
    perPage,
    total
  );

  const interactivePageNumber = useMemo(() => {
    const fromPosition =
      currentPage > 1
        ? currentPage > 2
          ? currentPage - 3
          : currentPage - 2
        : currentPage - 1;
    const upToPosition =
      currentPage > 1
        ? currentPage > 2
          ? currentPage + 3
          : currentPage + 4
        : currentPage + 5;

    return pageNumbers.slice(fromPosition, upToPosition);
  }, [pageNumbers, currentPage]);

  return (
    <nav>
      <TablePaginationContainer>
        <TablePaginationButton active={firstPage === currentPage}>
          <button onClick={() => onPagination(firstPage)}>{firstPage}</button>
        </TablePaginationButton>
        {interactivePageNumber.map((number) => (
          <TablePaginationButton key={number} active={number === currentPage}>
            <button onClick={() => onPagination(number)}>{number}</button>
          </TablePaginationButton>
        ))}
        <TablePaginationButton active={lastPage === currentPage}>
          <button onClick={() => onPagination(lastPage)}>{lastPage}</button>
        </TablePaginationButton>
      </TablePaginationContainer>
    </nav>
  );
};

export default TablePagination;
