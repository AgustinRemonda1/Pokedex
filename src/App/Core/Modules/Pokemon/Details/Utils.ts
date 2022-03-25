import {
  PokemonWithDetailsInterface,
  TypeInterface,
  AbilityInterface,
} from "../Interfaces";

interface TraductionInterface {
  name: string;
}

interface InfoInterface {
  description: string;
}

interface ReeplaceTraduction {
  pokemon: PokemonWithDetailsInterface;
  abilities: TraductionInterface[];
  types: TraductionInterface[];
  info: InfoInterface;
}

const reeplaceTypes = (
  pokemonTypes: TypeInterface[],
  types: TraductionInterface[]
) => {
  return pokemonTypes.map((type, index) => ({
    type: { ...type.type, name: types[index].name },
  }));
};

const reeplaceAbilities = (
  pokemonAbilities: AbilityInterface[],
  abilities: TraductionInterface[]
) => {
  return pokemonAbilities.map((ability, index) => ({
    ability: { ...ability.ability, name: abilities[index].name },
  }));
};

export const reeplaceTraduction = ({
  pokemon,
  abilities,
  types,
  info,
}: ReeplaceTraduction) => {
  const pokemonTypesReplaced = reeplaceTypes(pokemon.types, types);
  const pokemonAbilitiesReplaced = reeplaceAbilities(
    pokemon.abilities,
    abilities
  );

  const pokemonTraduced: PokemonWithDetailsInterface = {
    ...pokemon,
    description: info.description,
    types: pokemonTypesReplaced,
    abilities: pokemonAbilitiesReplaced,
  };

  return pokemonTraduced;
};
