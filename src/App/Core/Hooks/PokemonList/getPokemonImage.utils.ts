import { PokemonWithDetailsInterface } from "../../Interfaces/Pokemon.interface";

export const getPokemonImage = (
  listWithDetails: PokemonWithDetailsInterface[],
  index: number
) => {
  const pokemon = listWithDetails[index];

  return pokemon.sprites.other.dream_world.front_default;
};
