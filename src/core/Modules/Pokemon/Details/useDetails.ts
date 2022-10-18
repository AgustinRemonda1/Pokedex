import { useState, useCallback, useEffect } from "react";
import {
  getPokemon,
  getPokemonWithTranslate,
} from "~/core/Services/PokemonDetails.service";
import useLanguage from "~/core/Hooks/useLanguage.hook";
import { useRouter } from "next/router";
import { PokemonWithDetailsInterface } from "../pokemon.types";

const INITIAL_MODE = "details";

const useDetails = () => {
  const [mode, setMode] = useState<string>(INITIAL_MODE);
  const [pokemon, setPokemon] = useState<PokemonWithDetailsInterface | null>(
    null
  );
  const { lang } = useLanguage();
  const {
    query: { id },
    replace,
  } = useRouter();

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      const pokemon = await getPokemon(Number(id));
      if (pokemon && lang) {
        const pokemonTraduced = await getPokemonWithTranslate({
          pokemon,
          lang,
        });

        setPokemon(pokemonTraduced);
      }
    };

    fetchPokemonInfo();
  }, [lang, id]);

  const onChangeMode = useCallback((mode: string) => {
    setMode(mode);
  }, []);

  const onBackToPokemonDetails = useCallback(() => {
    replace("/pokedex");
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
