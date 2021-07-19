import { pokemonListWithDetails } from "../../Assets/Test/Data/Pokemon.data";
import { language } from "../../Config/Lang/Lang.language";

const pokemonSelected = pokemonListWithDetails[0];
const handleBackToPokemonList = jest.fn();

export const pokemonDetailsProps = {
  pokemonSelected,
  handleBackToPokemonList,
};

export const pokemonDetailsContentProps = {
  pokemonSelected,
  handleBackToPokemonList,
  modeButtons: {},
  configMode: {},
  changeLanguage: jest.fn(),
  lang: "Es",
  language: language.ES,
};
