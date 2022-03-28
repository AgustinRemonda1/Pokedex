import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TablePagination from "./TablePagination";
import { calculatePageNumbers } from "./Utils";
import { paginationTestData } from "./Data";

describe("TablePagination", () => {
  it("show first page when component its rendered", () => {
    const component = render(<TablePagination {...paginationTestData} />);

    const page = component.queryByText(/1/i);

    expect(page).not.toBe(null);
  });

  it("show last page when component its rendered", () => {
    const component = render(<TablePagination {...paginationTestData} />);

    const page = component.queryByText(/4/i);

    expect(page).not.toBe(null);
  });

  it("calculate pages when passed perPage and total in calculatePageNumbers", () => {
    const { perPage, total } = paginationTestData;
    const pageNumbers = calculatePageNumbers(perPage, total);

    const expected = {
      firstPage: 1,
      lastPage: 4,
      pageNumbers: [2, 3],
    };

    expect(pageNumbers).toEqual(expected);
  });

  it("call onPagination when page is clicked", () => {
    const { onPagination } = paginationTestData;
    const component = render(<TablePagination {...paginationTestData} />);

    const button = component.getByText(/2/i);

    fireEvent.click(button);
    expect(onPagination).toHaveBeenCalled();
  });
});
