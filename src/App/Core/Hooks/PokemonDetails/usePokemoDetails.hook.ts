import { useState, useCallback, useEffect } from "react";
import { idTaker } from "../../../Utils/IdTaker.utils";
import { getPokemonInfo } from "../../Service/PokemonDetails.service";
import useLanguage from "../Shared/useLanguage.hook";
import usePokemon from "../Shared/usePokemon.hook";

const INITIAL_MODE = "details";

const usePokemonDetails = () => {
  const [mode, setMode] = useState<string>(INITIAL_MODE);
  const { pokemon, setPokemon } = usePokemon();
  const { lang } = useLanguage();

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      const url = pokemon ? pokemon.species.url : "";
      const pokemonID = idTaker(url);

      await getPokemonInfo(pokemonID, lang);
    };

    pokemon && fetchPokemonInfo();
  }, [pokemon, lang]);

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
