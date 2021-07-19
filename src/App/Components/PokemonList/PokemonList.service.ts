import callPokemonApiService from "../../Service/PokemonApi.service";
import { perPage } from "./PokemonList.config";

export const getPokemonList = async (page: number) => {
  const requestParams = {
    endpoint: "/pokemon",
    params: `?limit=${perPage}&offset=${page}`,
  };

  const data = await callPokemonApiService(requestParams);

  return data;
};

export const getPokemon = async (id: number) => {
  const requestParams = {
    endpoint: "/pokemon",
    id: `/${id}`,
  };

  const data = await callPokemonApiService(requestParams);

  return data;
};
