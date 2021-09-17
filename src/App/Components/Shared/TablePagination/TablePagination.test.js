import React from "react";
import { shallow } from "enzyme";
import TablePagination from "./TablePagination";
import {
  TablePaginationContainer,
  TablePaginationButton,
} from "./TablePagination.styled";
import { calculatePageNumbers } from "./TablePagination.utils";
import { paginationTestData } from "./TablePagination.data";

describe("TablePagination", () => {
  it("Check TablePagination structure", () => {
    const wrapper = shallow(<TablePagination {...paginationTestData} />);

    expect(wrapper.exists("nav")).toBeTruthy();
    expect(wrapper.exists(TablePaginationContainer)).toBeTruthy();
    expect(wrapper.find(TablePaginationButton).length).toBe(4);
    expect(wrapper.find("button").length).toBe(4);
  });
});
