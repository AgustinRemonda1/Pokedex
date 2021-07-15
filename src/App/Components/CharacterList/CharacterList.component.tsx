import React, { useState, useEffect } from "react";
import CharacterListContent from "./CharacterList.content";
import { getPokemonList } from "./CharacterList.service";
import { PokemonInterface } from "./CharacterList.interfaces";
import { buildPokemonDetailsList } from "./CharacterList.utils";

const CharacterList = () => {
  const [page, setPage] = useState<number>(1);
  const [pokemonList, setPokemonList] = useState<PokemonInterface[]>([]);
  const [pokemonListWithDetails, setPokemonListWithDetails] = useState<any[]>(
    []
  );
  const [activePokemonImage, setActivePokemonImage] = useState<string>("");

  useEffect(() => {
    const fetchPokemonList = async () => {
      const pokemonList = await getPokemonList(page);
      setPokemonList(pokemonList);
    };
    fetchPokemonList();
  }, [page]);

  useEffect(() => {
    const fetchPokemonDetailsList = async () => {
      const pokemonListWithDetails = await buildPokemonDetailsList(pokemonList);
      setPokemonListWithDetails(pokemonListWithDetails);
    };
    fetchPokemonDetailsList();
  }, [pokemonList.length]);

  const handleSelectActiveImage = (index: number) => {
    if (pokemonListWithDetails.length) {
      const pokemonImage =
        pokemonListWithDetails[index].sprites.other.dream_world.front_default;
      setActivePokemonImage(pokemonImage);
    }
  };

  return (
    <CharacterListContent
      pokemonList={pokemonList}
      pokemonListWithDetails={pokemonListWithDetails}
      handleSelectActiveImage={handleSelectActiveImage}
      activePokemonImage={activePokemonImage}
      page={page}
      setPage={setPage}
    />
  );
};

export default CharacterList;
