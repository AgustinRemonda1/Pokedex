import { useContext } from "react";
import { PokemonContext } from "../Contexts/Pokemon.context";

const usePokemon = () => useContext(PokemonContext);

export default usePokemon;
