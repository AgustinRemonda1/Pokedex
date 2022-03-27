import React from "react";
import { render } from "@testing-library/react";
import Grid from "./Grid";
import {
  PokemonListWithOutActivePokemonImage,
  PokemonListWithActivePokemonImage,
  activeImage,
} from "./Data";

describe("Grid", () => {
  it("show charizard when component its rendered ", async () => {
    const component = render(
      <Grid {...PokemonListWithOutActivePokemonImage} />
    );

    const text = component.queryByText(/charizard/i);

    expect(text).not.toBeNull();
  });

  it("show active image when has pokemon image selected ", async () => {
    const component = render(<Grid {...PokemonListWithActivePokemonImage} />);

    const pokemonActive = component.getByAltText(/pokemon-active/i);
    const pokemonImage = pokemonActive.getAttribute("src");

    expect(pokemonImage).toBe(activeImage);
  });

  it("hide active image when hasn`t pokemon image selected ", async () => {
    const component = render(
      <Grid {...PokemonListWithOutActivePokemonImage} />
    );

    const pokemonActive = component.queryByAltText(/pokemon-active/i);

    expect(pokemonActive).toBeNull();
  });
});
