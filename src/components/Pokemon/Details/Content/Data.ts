import { pokemonListWithDetails } from "assets/Test/Data/Pokemon.data";
import { language as lang } from "config/Lang/Lang.language";
import {
  generateButtonModes,
  modes,
  generateAbilitiesConfig,
  generateActionButtons,
} from "../Config";
import { ButtonProps } from "components/Shared/Button";

const pokemonSelected = pokemonListWithDetails[0];
const language = lang.ES;
export const changeLanguage = jest.fn();
export const onChangeMode = jest.fn();
export const onBackToPokemonDetails = jest.fn();

export const configParams = {
  language,
  pokemon: pokemonSelected,
};

const modeButtonAbilities = generateButtonModes({
  language,
  onChangeMode,
  mode: modes.abilities,
});

export const configModeAbilities = generateAbilitiesConfig(configParams);

const pokemonDetailsFooterButtons = generateActionButtons({
  language,
  onBackToPokemonDetails,
  lang: "ES",
  changeLanguage,
});

export const DetailsContentProps = {
  pokemonDetailsFooterButtons: pokemonDetailsFooterButtons as ButtonProps[],
  modeButtons: modeButtonAbilities as ButtonProps[],
  configMode: configModeAbilities,
};
