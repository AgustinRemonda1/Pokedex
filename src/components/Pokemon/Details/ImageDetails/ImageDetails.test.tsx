import React from "react";
import { render } from "@testing-library/react";
import ImageDetails from "./ImageDetails";
import { pokemonSelected, activeImage } from "./ImageDetails.data";
import { capitalizeStrings } from "utils/FormatStrings.utils";

describe("ImageDetails", () => {
  it("show pokemon name when component its rendered ", async () => {
    const component = render(<ImageDetails pokemon={pokemonSelected} />);
    const pokemonName = capitalizeStrings(pokemonSelected.name);

    const text = component.queryByText(pokemonName);

    expect(text).not.toBeNull();
  });

  it("show pokemon image when component its rendered ", async () => {
    const component = render(<ImageDetails pokemon={pokemonSelected} />);

    const image = component.getByAltText(pokemonSelected.name);
    const pokemonImage = image.getAttribute("src");

    expect(pokemonImage).toBe(activeImage);
  });
});
