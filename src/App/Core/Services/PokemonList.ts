import callPokeApiService from "./PokeApi";
import {
  PokemonInterface,
  PokemonWithDetailsInterface,
} from "../Modules/Pokemon/Interfaces";
import { idTaker } from "../../Utils";
import { getPokemon } from "./PokemonDetails";

const PER_PAGE = 5;

export const getPokemonList = async (page: number) => {
  const requestParams = {
    endpoint: "/pokemon",
    params: `?limit=${PER_PAGE}&offset=${page * PER_PAGE}`,
  };

  const data = await callPokeApiService(requestParams);

  return data;
};

export const getPokemonListWithDetails = (pokemonList: PokemonInterface[]) => {
  const pokemonWithDetails: PokemonWithDetailsInterface[] = [];

  pokemonList.forEach((pokemon) => {
    const id = idTaker(pokemon.url);

    getPokemon(id).then((pokemon) => pokemonWithDetails.push(pokemon));
  });

  return pokemonWithDetails;
};
