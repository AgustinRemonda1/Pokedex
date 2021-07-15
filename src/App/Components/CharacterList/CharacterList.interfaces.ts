export interface PokemonInterface {
  name: string;
  url: string;
}

export interface CharacterListContentProps {
  pokemonList: PokemonInterface[];
  pokemonListWithDetails: any[];
  activePokemonImage: string;
  page: number;
  setPage: (page: number) => void;
  handleSelectActiveImage: (index: number) => void;
}
