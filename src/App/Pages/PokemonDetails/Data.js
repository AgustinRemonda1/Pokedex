import { pokemonListWithDetails } from "../../Assets/Test/Data/Pokemon.data";
import { language as lang } from "../../Config/Lang/Lang.language";
import {
  generateButtonModes,
  modes,
  generateDetailsConfig,
  generateAbilitiesConfig,
  generateStatsConfig,
} from "./Config";

const pokemonSelected = pokemonListWithDetails[0];
const handleBackToPokemonList = jest.fn();
const changeLanguage = jest.fn();
const language = lang.ES;

export const configParams = {
  language,
  pokemon: pokemonSelected,
};

const modeButtonDetails = generateButtonModes({
  language,
  setMode: jest.fn(),
  mode: modes.details,
});

export const configModeDetails = generateDetailsConfig(configParams);

const modeButtonStats = generateButtonModes({
  language,
  setMode: jest.fn(),
  mode: modes.stats,
});

export const configModeStats = generateStatsConfig(configParams);

const modeButtonAbilities = generateButtonModes({
  language,
  setMode: jest.fn(),
  mode: modes.abilities,
});

export const configModeAbilities = generateAbilitiesConfig(configParams);

export const pokemonDetailsProps = {
  pokemonSelected,
  handleBackToPokemonList,
};

export const pokemonDetailsContentPropsBase = {
  pokemonSelected,
  handleBackToPokemonList,
  modeButtons: modeButtonDetails,
  configMode: configModeDetails,
  changeLanguage,
  lang: "ES",
  language,
};

export const pokemonDetailsContentPropsStats = {
  pokemonSelected,
  handleBackToPokemonList,
  modeButtons: modeButtonStats,
  configMode: configModeStats,
  changeLanguage,
  lang: "ES",
  language,
};

export const pokemonDetailsContentPropsAbilities = {
  pokemonSelected,
  handleBackToPokemonList,
  modeButtons: modeButtonAbilities,
  configMode: configModeAbilities,
  changeLanguage,
  lang: "ES",
  language,
};
