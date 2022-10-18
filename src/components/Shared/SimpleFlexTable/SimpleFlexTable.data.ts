import { pokemonListWithDetails } from "assets/Test/Data/Pokemon.data";
import { language as lang } from "assets/Lang/Lang.language";
import { generateDetailsConfig } from "components/Pokemon/Details/Details.config";

export const pokemonSelected = pokemonListWithDetails[0];
const language = lang.ES;

export const configParams = {
  language,
  pokemon: { ...pokemonSelected, description: "one description" },
};

export const configModeDetails = generateDetailsConfig({
  ...configParams,
  lang: "ES",
});
