export interface PokemonInterface {
  name: string;
  url: string;
}

export interface CharacterListContentProps {
  pokemonList: PokemonInterface[];
  pokemonListWithDetails: any[];
  activePokemonImage: string;
  pokemonSelected: any;
  page: number;
  setPokemonSelected: (pokemon: any) => void;
  setPage: (page: number) => void;
  handleShowDetails: (index: number) => void;
  handleSelectActiveImage: (index: number) => void;
}
