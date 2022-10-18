import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Content from "./Content";
import {
  changeLanguage,
  DetailsContentProps,
  onBackToPokemonDetails,
  onChangeMode,
} from "./Content.data";

describe("Content", () => {
  it("show ability button when component its rendered ", async () => {
    const component = render(<Content {...DetailsContentProps} />);

    const button = component.queryByText(/Habilidades/i);

    expect(button).not.toBeNull();
  });

  it("show stadistic button when component its rendered ", async () => {
    const component = render(<Content {...DetailsContentProps} />);

    const button = component.queryByText(/Estadisticas/i);

    expect(button).not.toBeNull();
  });

  it("show details button when component its rendered ", async () => {
    const component = render(<Content {...DetailsContentProps} />);

    const button = component.queryByText(/Detalles/i);

    expect(button).not.toBeNull();
  });

  it("show back button when component its rendered ", async () => {
    const component = render(<Content {...DetailsContentProps} />);

    const button = component.queryByText(/Volver/i);

    expect(button).not.toBeNull();
  });

  it("show lang button when component its rendered ", async () => {
    const component = render(<Content {...DetailsContentProps} />);

    const button = await component.findByText(/EN/);

    expect(button).not.toBeNull();
  });

  it("call onChangeMode when ability button is clicked", async () => {
    const component = render(<Content {...DetailsContentProps} />);

    const button = component.getByText(/Habilidades/i);
    fireEvent.click(button);

    expect(onChangeMode).toHaveBeenCalled();
  });

  it("call onChangeMode when stadistic button is clicked ", async () => {
    const component = render(<Content {...DetailsContentProps} />);

    const button = component.getByText(/Estadisticas/i);
    fireEvent.click(button);

    expect(onChangeMode).toHaveBeenCalled();
  });

  it("call onChangeMode when details button is clicked", async () => {
    const component = render(<Content {...DetailsContentProps} />);

    const button = component.getByText(/Detalles/i);
    fireEvent.click(button);

    expect(onChangeMode).toHaveBeenCalled();
  });

  it("call changeLanguage when lang button is clicked", async () => {
    const component = render(<Content {...DetailsContentProps} />);

    const button = await component.getByText(/EN/);
    fireEvent.click(button);

    expect(changeLanguage).toHaveBeenCalled();
  });

  it("call onBackPokemonDetails when back button is clicked", async () => {
    const component = render(<Content {...DetailsContentProps} />);

    const button = await component.getByText(/Volver/);
    fireEvent.click(button);

    expect(onBackToPokemonDetails).toHaveBeenCalled();
  });
});
