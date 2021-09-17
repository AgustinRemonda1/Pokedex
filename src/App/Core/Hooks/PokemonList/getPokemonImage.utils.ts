import { PokemonWithDetailsInterface } from "../../Interfaces/Pokemon.interface";

export const getPokemonImage = (
  listWithDetails: PokemonWithDetailsInterface[],
  index: number
) => {
  return listWithDetails[index]?.sprites?.other?.dream_world?.front_default;
};
