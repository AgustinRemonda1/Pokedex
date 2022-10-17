import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";
import { buttonWithTooltip, normalButton, smallNormalButton } from "./Data";

describe("Button", () => {
  it("show text in button with tooltip when component its rendered", () => {
    const component = render(
      <Button {...buttonWithTooltip} type="button-with-tooltip" />
    );

    const button = component.queryByText(/a simple string/i);

    expect(button).not.toBeNull();
  });

  it("show text in small normal button when component its rendered", () => {
    const component = render(
      <Button {...smallNormalButton} type="small-normal-button" />
    );

    const button = component.queryByText(/a simple string/i);

    expect(button).not.toBeNull();
  });

  it("show button as small normal button when component its rendered", () => {
    const component = render(<Button {...normalButton} />);

    const button = component.queryByText(/a simple string/i);

    expect(button).not.toBeNull();
  });
});
