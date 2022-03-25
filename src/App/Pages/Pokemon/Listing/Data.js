import {
  pokemonList,
  pokemonListWithDetails,
} from "../../../Assets/Test/Data/Pokemon.data";

const pokemonSelected = pokemonListWithDetails[0];
const activeImage = pokemonSelected.sprites.other.dream_world.front_default;

export const PokemonListWithOutActivePokemonImage = {
  pokemonList,
  pokemonListWithDetails,
  activePokemonImage: "",
  pokemonSelected: null,
  page: 1,
  total: 100,
};

export const PokemonListWithActivePokemonImage = {
  pokemonList,
  pokemonListWithDetails,
  activePokemonImage: activeImage,
  pokemonSelected: null,
  page: 1,
  total: 100,
};

export const PokemonListWithPokemonSelected = {
  pokemonList,
  pokemonListWithDetails,
  activePokemonImage: activeImage,
  pokemonSelected,
  page: 1,
  total: 100,
};
