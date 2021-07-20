import { PokemonWithDetailsInterface } from "../../Interfaces/Pokemon.interface";
import { ButtonInterface } from "../SharedComponents/Button/Button.interfaces";
import { FlexTableConfigInterface } from "../SharedComponents/SimpleFlexTable/SimpleFlexTable.interfaces";

export interface PokemonDetailsProps {
  pokemonSelected: PokemonWithDetailsInterface | null;
  handleBackToPokemonList: () => void;
}

export interface PokemonDetailsContentProps {
  pokemonSelected: PokemonWithDetailsInterface | null;
  handleBackToPokemonList: () => void;
  modeButtons: ButtonInterface[];
  configMode: FlexTableConfigInterface[];
  changeLanguage: () => void;
  lang: string;
  language: any;
}
