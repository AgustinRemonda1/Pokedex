import React, { useMemo } from "react";
import {
  TablePaginationContainer,
  TablePaginationButton,
} from "./TablePagination.styles";
import { calculatePageNumbers } from "./TablePagination.utils";
import { TablePaginationProps } from "./TablePagination.interfaces";

const TablePagination = ({
  perPage,
  total,
  setPage,
  page,
}: TablePaginationProps) => {
  const { firstPage, pageNumbers, lastPage } = calculatePageNumbers(
    perPage,
    total
  );

  const interactivePageNumber = useMemo(() => {
    const fromPosition = page > 1 ? (page > 2 ? page - 3 : page - 2) : page - 1;
    const upToPosition = page > 1 ? (page > 2 ? page + 3 : page + 4) : page + 5;

    return pageNumbers.slice(fromPosition, upToPosition);
  }, [pageNumbers, page]);

  return (
    <nav>
      <TablePaginationContainer>
        <TablePaginationButton active={firstPage === page}>
          <button onClick={() => setPage(firstPage)}>{firstPage}</button>
        </TablePaginationButton>
        {interactivePageNumber.map((number) => (
          <TablePaginationButton key={number} active={number === page}>
            <button onClick={() => setPage(number)}>{number}</button>
          </TablePaginationButton>
        ))}
        <TablePaginationButton active={lastPage === page}>
          <button onClick={() => setPage(lastPage)}>{lastPage}</button>
        </TablePaginationButton>
      </TablePaginationContainer>
    </nav>
  );
};

export default TablePagination;
