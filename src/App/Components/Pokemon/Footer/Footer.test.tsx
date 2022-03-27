import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Footer from "./Footer";
import LanguageProvider from "../../../HOC/LangProvider";

describe("Footer", () => {
  it("show ES word when component its rendered ", async () => {
    const component = render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );

    const button = component.queryByText(/ES/i);

    expect(button).not.toBeNull();
  });

  it("change language when button is clicked ", async () => {
    const component = render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );

    const button = component.getByText(/ES/i);
    fireEvent.click(button);

    const buttonTraduced = component.queryByText(/EN/i);

    expect(buttonTraduced).not.toBeNull();
  });
});
