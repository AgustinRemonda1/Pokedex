import React from "react";
import { render } from "@testing-library/react";
import TableComponent from "./Table";
import { formatPokemonNumber } from "./Table.utils";
import { tableTestProps } from "./Table.data";

describe("Table", () => {
  it("show Charmander when components its rendered", () => {
    const component = render(<TableComponent {...tableTestProps} />);

    const pokemon = component.queryByText(/Charmander/i);

    expect(pokemon).not.toBeNull();
  });

  it("show pokemon number when component its rendered", () => {
    const component = render(<TableComponent {...tableTestProps} />);

    const pokemonNumber = component.queryByText(/Nº 003/i);

    expect(pokemonNumber).not.toBeNull();
  });

  it("show details button when component its rendered", async () => {
    const component = render(<TableComponent {...tableTestProps} />);

    const detailsButtons = await component.findAllByText(/Detalles/i);

    expect(detailsButtons.length).toBe(5);
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
