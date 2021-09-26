import callPokeApiService from "./PokeApi.service";

export const getPokemon = async (id: number) => {
  const requestParams = {
    endpoint: "/pokemon",
    id: `/${id}`,
  };

  const data = await callPokeApiService(requestParams);

  return data;
};

interface Data {
  flavor_text_entries: {
    language: { name: string };
    flavor_text: string;
  }[];
  genera: {
    language: { name: string };
    genus: string;
  }[];
}

const getDescription = (data: Data, language: string) => {
  const entries = data.flavor_text_entries;
  const flavorText = entries.find(
    (entry: any) => entry.language.name === language
  );
  return flavorText && flavorText.flavor_text;
};

export const getPokemonInfo = async (id: string | number, language: string) => {
  const requestParams = {
    endpoint: "/pokemon-species",
    id: `/${id}`,
  };

  const data = await callPokeApiService(requestParams);

  const description = getDescription(data, language);

  const genera = data.genera;
  const genus = genera.find(
    (pokemon: any) => pokemon.language.name === language
  );
  const specie = genus;

  return { description, specie };
};

export const getAbility = async (id: string | number, language: string) => {
  const requestParams = {
    endpoint: "/ability",
    id: `/${id}`,
  };

  const data = await callPokeApiService(requestParams);

  const ability = data.names.find(
    (name: any) => name.language.name === language
  );

  return ability;
};

export const getTypes = () => {};
