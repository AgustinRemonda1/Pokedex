import React from "react";
import { render } from "@testing-library/react";
import SimpleFlexTable from "./SimpleFlexTable";
import { configModeDetails } from "./SimpleFlexTable.data";

describe("SimpleFlexTable", () => {
  it("show name field when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const name = component.queryByText(/Nombre/i);

    expect(name).not.toBeNull();
  });

  it("show pokemon name when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const pokemonName = component.queryByText(/Ivysaur/i);

    expect(pokemonName).not.toBeNull();
  });

  it("show type field when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const type = component.queryByText(/Tipo/i);

    expect(type).not.toBeNull();
  });

  it("show types when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const typeGrass = component.queryByText(/Grass/i);
    const typePoison = component.queryByText(/Poison/i);

    expect(typeGrass).not.toBeNull();
    expect(typePoison).not.toBeNull();
  });

  it("show height field when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const height = component.queryByText(/Altura/i);

    expect(height).not.toBeNull();
  });

  it("show height when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const height = component.queryByText(/100/i);

    expect(height).not.toBeNull();
  });

  it("show weight field when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const weight = component.queryByText(/Peso/i);

    expect(weight).not.toBeNull();
  });

  it("show weight field when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const weight = component.queryByText(/Peso/i);

    expect(weight).not.toBeNull();
  });

  it("show weight when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const weight = component.queryByText(/13 kgs/i);

    expect(weight).not.toBeNull();
  });

  it("show description field when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const description = component.queryByText(/Description/i);

    expect(description).not.toBeNull();
  });

  it("show description when component its rendered", () => {
    const component = render(<SimpleFlexTable config={configModeDetails} />);

    const description = component.queryByText(/one description/i);

    expect(description).not.toBeNull();
  });
});
