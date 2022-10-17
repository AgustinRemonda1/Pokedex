import { buttonTypes } from "./Config";

export const text = "A simple string";
const action = jest.fn();

export const normalButton = {
  icon: "",
  text,
  action,
};

export const smallNormalButton = {
  icon: "",
  text,
  action,
  type: buttonTypes.smallNormalButton,
};

export const buttonWithTooltip = {
  icon: "",
  text,
  action,
  type: buttonTypes.buttonWithTooltip,
};
