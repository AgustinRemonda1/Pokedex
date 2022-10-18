export interface PokemonInterface {
  name: string;
  url: string;
}

export interface AbilityInterface {
  ability: {
    name: string;
    url: string;
  };
}

export interface TypeInterface {
  type: {
    name: string;
    url: string;
  };
}

interface StatInterface {
  base_stat: number;
}

interface SpriteInterface {
  front_default: string;
  other: {
    dream_world: {
      front_default: string;
    };
  };
}

interface SpeciesInterface {
  url: string;
}

export interface PokemonWithDetailsInterface {
  id: number;
  abilities: AbilityInterface[];
  types: TypeInterface[];
  name: string;
  height: number;
  weight: number;
  sprites: SpriteInterface;
  game_indices: any[];
  base_experience: number;
  stats: StatInterface[];
  species: SpeciesInterface;
  description?: string;
}
