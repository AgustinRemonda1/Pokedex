import { PokemonWithDetailsInterface } from "../pokemon.types";

export const getPokemonImage = (
  listWithDetails: PokemonWithDetailsInterface[],
  index: number
) => {
  const pokemon = listWithDetails[index];

  return pokemon.sprites.other.dream_world.front_default;
};
