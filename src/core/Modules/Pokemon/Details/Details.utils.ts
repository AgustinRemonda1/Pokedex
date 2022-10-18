import {
  PokemonWithDetailsInterface,
  TypeInterface,
  AbilityInterface,
} from "../pokemon.types";

interface TraductionInterface {
  name: string;
}

interface InfoInterface {
  description: string;
}

interface ReplaceTraduction {
  pokemon: PokemonWithDetailsInterface;
  abilities: TraductionInterface[];
  types: TraductionInterface[];
  info: InfoInterface;
}

const replaceTypes = (
  pokemonTypes: TypeInterface[],
  types: TraductionInterface[]
) => {
  return pokemonTypes.map((type, index) => ({
    type: { ...type.type, name: types[index] && types[index].name },
  }));
};

const replaceAbilities = (
  pokemonAbilities: AbilityInterface[],
  abilities: TraductionInterface[]
) => {
  console.log(abilities, "ASDASDAS");
  return pokemonAbilities.map((ability, index) => ({
    ability: {
      ...ability.ability,
      name: abilities[index] && abilities[index].name,
    },
  }));
};

export const replaceTraduction = ({
  pokemon,
  abilities,
  types,
  info,
}: ReplaceTraduction) => {
  console.log(abilities);
  const pokemonTypesReplaced = replaceTypes(pokemon.types, types);
  const pokemonAbilitiesReplaced = replaceAbilities(
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
