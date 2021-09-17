import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";
import {
  text,
  buttonWithTooltip,
  normalButton,
  smallNormalButton,
} from "./Button.data";
import { StyledButton, SingleButton, Text } from "./Button.styled";
import { ReactSVG } from "react-svg";
import Tooltip from "../Tooltip/Tooltip";

describe("Button", () => {
  it("Check Button structure with tooltip", () => {
    const wrapper = shallow(<Button {...buttonWithTooltip} />);

    expect(wrapper.find(Tooltip).length).toBe(1);
    expect(wrapper.find(StyledButton).length).toBe(1);
    expect(wrapper.find(ReactSVG).length).toBe(1);
  });

  it("Should have a small normal button type", () => {
    const wrapper = shallow(<Button {...smallNormalButton} />);

    expect(wrapper.find(SingleButton).props().type).toBe(
      smallNormalButton.type
    );
  });

  it("Check Button structure without tooltip", () => {
    const wrapper = shallow(<Button {...normalButton} />);

    expect(wrapper.find(SingleButton).length).toBe(1);
    expect(wrapper.find(ReactSVG).length).toBe(1);
    expect(wrapper.find(Text).length).toBe(1);
  });

  it("Should render 'A simple string'", () => {
    const wrapper = shallow(<Button {...normalButton} />);

    expect(wrapper.find(Text).first().text()).toEqual(text);
  });

  it("Should render 'A simple string' in tooltip", () => {
    const wrapper = shallow(<Button {...buttonWithTooltip} />);

    expect(wrapper.find(Tooltip).props().msg).toEqual(text);
  });
});
