export interface PokemonInterface {
  name: string;
  url: string;
}

interface AbilityInterface {
  ability: {
    name: string;
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

export interface PokemonWithDetailsInterface {
  abilities: AbilityInterface[];
  name: string;
  height: number;
  weight: number;
  sprites: SpriteInterface;
  game_indices: any[];
  base_experience: number;
  stats: StatInterface[];
}
