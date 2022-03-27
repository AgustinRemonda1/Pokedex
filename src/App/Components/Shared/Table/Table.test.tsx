import React from "react";
import { shallow } from "enzyme";
import TableComponent from "./Table";
import { TableContainer, Table } from "./Table.styled";
import { formatPokemonNumber } from "./Utils";
import Button from "../Button/Button";
import TablePagination from "../TablePagination/TablePagination";
import { firstTableTestProps, secondTableTestProps } from "./Table.data";

describe("Table", () => {
  it("Check Table structure", () => {
    const wrapper = shallow(<TableComponent {...firstTableTestProps} />);

    expect(wrapper.find(TableContainer).length).toBe(1);
    expect(wrapper.find(Table).length).toBe(1);
    expect(wrapper.find("tr").length).toBe(5);
    expect(wrapper.find("td").length).toBe(15);
    expect(wrapper.find(Button).length).toBe(5);
    expect(wrapper.find(TablePagination).length).toBe(1);
  });
  it("Should render five rows", () => {
    const wrapper = shallow(<TableComponent {...firstTableTestProps} />);

    expect(wrapper.find("tr").length).toBe(5);
  });
  it("Should render ten rows", () => {
    const wrapper = shallow(<TableComponent {...secondTableTestProps} />);

    expect(wrapper.find("tr").length).toBe(10);
  });
  it("Should render ten buttons", () => {
    const wrapper = shallow(<TableComponent {...secondTableTestProps} />);

    expect(wrapper.find(Button).length).toBe(10);
  });
  it("Should be in page one", () => {
    const wrapper = shallow(<TableComponent {...firstTableTestProps} />);

    expect(wrapper.find(TablePagination).props().page).toBe(1);
  });
  it("Should return pokemon number formatted and with 3 digits", () => {
    const pokemonNumber = 3;
    const expected = "Nº 003";

    expect(formatPokemonNumber(pokemonNumber)).toBe(expected);
  });
  it("Should return pokemon number formatted and with more 3 digits", () => {
    const pokemonNumber = 11000;
    const expected = "Nº 11000";

    expect(formatPokemonNumber(pokemonNumber)).toBe(expected);
  });
});
