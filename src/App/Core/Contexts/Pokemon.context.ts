import { createContext } from "react";
import { PokemonWithDetailsInterface } from "../Interfaces/Pokemon.interface";

interface PokemonContextInterface {
  pokemon: PokemonWithDetailsInterface | null;
  setPokemon: (pokemon: PokemonWithDetailsInterface | null) => void;
}

export const PokemonContext = createContext<PokemonContextInterface>({
  pokemon: null,
  setPokemon: (pokemon: PokemonWithDetailsInterface | null) => {},
});
