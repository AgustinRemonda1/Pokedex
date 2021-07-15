import { PokemonInterface } from "./CharacterList.interfaces";
import { getPokemon } from "./CharacterList.service";

export const idTaker = (url: string): number => {
  const idPosition = 6;
  const urlDivision = url.split("/");
  const id = urlDivision[idPosition];

  return Number(id);
};

export const buildPokemonDetailsList = async (
  pokemonList: PokemonInterface[]
) => {
  const pokemonWithDetails: any[] = [];

  pokemonList.forEach((pokemon) => {
    const id = idTaker(pokemon.url);

    getPokemon(id).then((pokemon) => pokemonWithDetails.push(pokemon));
  });

  return pokemonWithDetails;
};
