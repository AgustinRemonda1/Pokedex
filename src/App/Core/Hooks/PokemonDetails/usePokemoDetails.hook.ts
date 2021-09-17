import { useState, useCallback } from "react";
import usePokemon from "../Shared/usePokemon.hook";

const INITIAL_MODE = "details";

const usePokemonDetails = () => {
  const [mode, setMode] = useState<string>(INITIAL_MODE);
  const { pokemon, setPokemon } = usePokemon();

  const onChangeMode = useCallback((mode: string) => {
    setMode(mode);
  }, []);

  const onBackToPokemonDetails = useCallback(() => {
    setPokemon(null);
  }, []);

  return {
    state: {
      mode,
      pokemon,
    },
    actions: {
      onChangeMode,
      onBackToPokemonDetails,
    },
  };
};

export default usePokemonDetails;
