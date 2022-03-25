import React from "react";
import { shallow } from "enzyme";
import PokemonDetailsContent from "./PokemonDetails.content";
import Details from "./Details";
import {
  pokemonDetailsContentPropsBase,
  pokemonDetailsProps,
  pokemonDetailsContentPropsStats,
  pokemonDetailsContentPropsAbilities,
  configParams,
  configModeDetails,
  configModeStats,
  configModeAbilities,
} from "./Data";
import {
  PokemonDetailsContainer,
  PokemonDetailsGrid,
  PokemonImageWrapper,
  PokemonImageHeader,
  PokemonDetailLayoutTable,
  HeaderButtonsContainer,
  FooterButtonsContainer,
} from "./Details.styled";
import Button from "../../../Components/Shared/Button/Button";
import SimpleFlexTable from "../../../Components/Shared/SimpleFlexTable/SimpleFlexTable";
import { language } from "../../../Config/Lang/Lang.language";
import { switchConfigMode } from "./Utils";
import { modes } from "./Config";

describe("Details", () => {
  it("should contain <PokemonDetailsContent />", () => {
    const wrapper = shallow(<Details {...pokemonDetailsProps} />);

    expect(wrapper.find(PokemonDetailsContent).length).toBe(1);
  });

  it("Check PokemonListContent structure", () => {
    const wrapper = shallow(
      <PokemonDetailsContent {...pokemonDetailsContentPropsBase} />
    );

    expect(wrapper.find(PokemonDetailsContainer).length).toBe(1);
    expect(wrapper.find(PokemonDetailsGrid).length).toBe(1);
    expect(wrapper.find(PokemonImageWrapper).length).toBe(1);
    expect(wrapper.find(PokemonImageHeader).length).toBe(1);
    expect(wrapper.find("img").length).toBe(1);
    expect(wrapper.find(Button).length).toBe(5);
    expect(wrapper.find(PokemonDetailLayoutTable).length).toBe(1);
    expect(wrapper.find(HeaderButtonsContainer).length).toBe(1);
    expect(wrapper.find(FooterButtonsContainer).length).toBe(1);
    expect(wrapper.find(SimpleFlexTable).length).toBe(1);
  });

  it("Should mode must be details", () => {
    const wrapper = shallow(
      <PokemonDetailsContent {...pokemonDetailsContentPropsBase} />
    );
    const buttons = wrapper.find(Button);
    const activeButton = buttons.findWhere(
      (button) =>
        button.prop("text") === language.ES.details &&
        Boolean(button.props("active"))
    );

    expect(activeButton.length).toBe(1);
  });

  it("Should mode must be stats", () => {
    const wrapper = shallow(
      <PokemonDetailsContent {...pokemonDetailsContentPropsStats} />
    );
    const buttons = wrapper.find(Button);
    const activeButton = buttons.findWhere(
      (button) =>
        button.prop("text") === language.ES.stats &&
        Boolean(button.props("active"))
    );

    expect(activeButton.length).toBe(1);
  });

  it("Should mode must be abilities", () => {
    const wrapper = shallow(
      <PokemonDetailsContent {...pokemonDetailsContentPropsAbilities} />
    );
    const buttons = wrapper.find(Button);
    const activeButton = buttons.findWhere(
      (button) =>
        button.prop("text") === language.ES.abilities &&
        Boolean(button.props("active"))
    );

    expect(activeButton.length).toBe(1);
  });

  it("Should return details mode", () => {
    const details = switchConfigMode({
      mode: modes.details,
      modes,
      configParams,
    });

    expect(details).toEqual(configModeDetails);
  });

  it("Should return stats mode", () => {
    const stats = switchConfigMode({
      mode: modes.stats,
      modes,
      configParams,
    });

    expect(stats).toEqual(configModeStats);
  });

  it("Should return abilities mode", () => {
    const abilities = switchConfigMode({
      mode: modes.abilities,
      modes,
      configParams,
    });

    expect(abilities).toEqual(configModeAbilities);
  });
});
