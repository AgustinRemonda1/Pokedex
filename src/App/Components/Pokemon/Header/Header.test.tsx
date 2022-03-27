import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import LanguageProvider from "../../../HOC/LangProvider";

describe("Header", () => {
  it("show number word in spanish when component its rendered ", async () => {
    const component = render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    );

    const text = component.queryByText(/Número/i);

    expect(text).not.toBeNull();
  });

  it("show Pokedex word when component its rendered ", async () => {
    const component = render(
      <LanguageProvider>
        <Header />
      </LanguageProvider>
    );

    const text = component.queryByText(/Pokedex/i);

    expect(text).not.toBeNull();
  });
});
