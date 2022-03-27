import { pokemonListWithDetails } from "../../../Assets/Test/Data/Pokemon.data";
import { language as lang } from "../../../Config/Lang/Lang.language";
import {
  generateDetailsConfig,
  generateAbilitiesConfig,
  generateStatsConfig,
} from "../../../Pages/Pokemon/Details/Config";

const pokemonSelected = pokemonListWithDetails[0];
const language = lang.ES;

export const configParams = {
  language,
  pokemon: pokemonSelected,
};

export const configModeDetails = generateDetailsConfig(configParams);
