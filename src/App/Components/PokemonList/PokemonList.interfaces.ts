import {
  PokemonInterface,
  PokemonWithDetailsInterface,
} from "../../Interfaces/Pokemon.interface";

export interface PokemonListContentProps {
  pokemonList: PokemonInterface[];
  pokemonListWithDetails: PokemonWithDetailsInterface[];
  activePokemonImage: string;
  pokemonSelected: PokemonWithDetailsInterface | null;
  page: number;
  total: number;
  setPage: (page: number) => void;
  handleShowDetails: (index: number) => void;
  handleSelectActiveImage: (index: number) => void;
  handleBackToPokemonList: () => void;
}
