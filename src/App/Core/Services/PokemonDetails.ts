import callPokeApiService from "./PokeApi";
import { AbilityInterface, TypeInterface } from "../Modules/Pokemon/Interfaces";
import { idTaker } from "../../Utils";

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

interface TraductionInterface {
  name: string;
}

export const getPokemon = async (id: number) => {
  const requestParams = {
    endpoint: "/pokemon",
    id: `/${id}`,
  };

  const data = await callPokeApiService(requestParams);

  return data;
};

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

  return { description: String(description) };
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

export const getAbilities = async (
  abilities: AbilityInterface[],
  language: string
) => {
  const newAbilities: TraductionInterface[] = [];
  const urls = abilities.map((ability) => ability.ability.url);
  const ids = urls.map((url) => idTaker(url));

  await ids.forEach((id) =>
    getAbility(id, language).then((ability) => newAbilities.push(ability))
  );

  return newAbilities;
};

export const getType = async (id: string | number, language: string) => {
  const requestParams = {
    endpoint: "/type",
    id: `/${id}`,
  };

  const data = await callPokeApiService(requestParams);

  const type = data.names.find((name: any) => name.language.name === language);

  return type;
};

export const getTypes = async (Types: TypeInterface[], language: string) => {
  const newTypes: TraductionInterface[] = [];
  const urls = Types.map((type) => type.type.url);
  const ids = urls.map((url) => idTaker(url));

  await ids.forEach((id) =>
    getType(id, language).then((type) => newTypes.push(type))
  );

  return newTypes;
};
