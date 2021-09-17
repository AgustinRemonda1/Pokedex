import callPokeApiService from "./PokeApi.service";

export const getPokemon = async (id: number) => {
  const requestParams = {
    endpoint: "/pokemon",
    id: `/${id}`,
  };

  const data = await callPokeApiService(requestParams);

  return data;
};
