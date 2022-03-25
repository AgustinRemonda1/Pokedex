import { useState, useCallback, useEffect } from "react";
import { idTaker } from "../../../../Utils/IdTaker.utils";
import {
  getAbilities,
  getPokemonInfo,
  getTypes,
} from "../../../Services/PokemonDetails";
import useLanguage from "../../../Hooks/useLanguage";
import usePokemon from "../../../Hooks/usePokemon";
import { reeplaceTraduction } from "./Utils";

const INITIAL_MODE = "details";

const useDetails = () => {
  const [mode, setMode] = useState<string>(INITIAL_MODE);
  const { pokemon, setPokemon } = usePokemon();
  const { lang } = useLanguage();

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      if (pokemon) {
        const url = pokemon.species.url;
        const pokemonID = idTaker(url);
        const language = lang.toLowerCase();

        const types = await getTypes(pokemon.types, language);
        const abilities = await getAbilities(pokemon.abilities, language);
        const info = await getPokemonInfo(pokemonID, language);

        const pokemonTraduced = reeplaceTraduction({
          pokemon,
          types,
          abilities,
          info,
        });

        setPokemon(pokemonTraduced);
      }
    };

    pokemon && fetchPokemonInfo();
  }, [lang]);

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

export default useDetails;
