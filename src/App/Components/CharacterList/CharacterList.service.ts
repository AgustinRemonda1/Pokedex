import callPokemonApiService from "../../Service/PokemonApi.service";

export const getPokemonList = async (page: number) => {
  const requestParams = {
    endpoint: "/pokemon",
    params: `?limit=5&offset=${page}`,
  };

  const data = await callPokemonApiService(requestParams);

  return data.results;
};

export const getPokemon = async (id: number) => {
  const requestParams = {
    endpoint: "/pokemon",
    id: `/${id}`,
  };

  const data = await callPokemonApiService(requestParams);

  return data;
};
