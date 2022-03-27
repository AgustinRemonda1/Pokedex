import {
  pokemonList,
  pokemonListWithDetails,
} from "../../../../Assets/Test/Data/Pokemon.data";
import { generateConfigWithLang } from "../../../../Pages/Pokemon/Listing/Config";
import ES from "../../../../Config/Lang/Es.language";

const pokemonSelected = pokemonListWithDetails[0];
export const activeImage =
  pokemonSelected.sprites.other.dream_world.front_default;
const config = generateConfigWithLang({
  language: ES,
  onShowPokemonDetails: jest.fn(),
});

export const PokemonListWithOutActivePokemonImage = {
  pokemonList,
  pokemonListWithDetails,
  activePokemonImage: "",
  pokemonSelected: null,
  page: 1,
  total: 100,
  onSelectActiveImage: jest.fn(),
  onPagination: jest.fn(),
  config: config,
  perPage: 5,
};

export const PokemonListWithActivePokemonImage = {
  pokemonList,
  pokemonListWithDetails,
  activePokemonImage: activeImage,
  pokemonSelected: null,
  page: 1,
  total: 100,
  onSelectActiveImage: jest.fn(),
  onPagination: jest.fn(),
  config: config,
  perPage: 5,
};

export const PokemonListWithPokemonSelected = {
  pokemonList,
  pokemonListWithDetails,
  activePokemonImage: activeImage,
  pokemonSelected,
  page: 1,
  total: 100,
  onSelectActiveImage: jest.fn(),
  onPagination: jest.fn(),
  config: config,
  perPage: 5,
};
