import React, { useState, useEffect } from "react";
import PokemonListContent from "./PokemonList.content";
import { getPokemonList } from "./PokemonList.service";
import {
  PokemonInterface,
  PokemonWithDetailsInterface,
} from "../../Interfaces/Pokemon.interface";
import { buildPokemonDetailsList } from "./PokemonList.utils";

const PokemonList = () => {
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [pokemonList, setPokemonList] = useState<PokemonInterface[]>([]);
  const [pokemonListWithDetails, setPokemonListWithDetails] = useState<
    PokemonWithDetailsInterface[]
  >([]);
  const [activePokemonImage, setActivePokemonImage] = useState<string>("");
  const [pokemonSelected, setPokemonSelected] =
    useState<PokemonWithDetailsInterface | null>(null);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const data = await getPokemonList(page);
      const pokemonList = data.results;

      setPokemonList(pokemonList);
      setTotal(data.count);
      setActivePokemonImage("");
    };
    fetchPokemonList();
  }, [page]);

  useEffect(() => {
    const fetchPokemonDetailsList = async () => {
      const pokemonListWithDetails = await buildPokemonDetailsList(pokemonList);
      setPokemonListWithDetails(pokemonListWithDetails);
    };

    fetchPokemonDetailsList();
  }, [pokemonList, page]);

  const getPokemonImage = (index: number) => {
    return pokemonListWithDetails[index]?.sprites?.other?.dream_world
      ?.front_default;
  };

  const handleSelectActiveImage = (index: number) => {
    if (pokemonListWithDetails.length) {
      const pokemonImage = getPokemonImage(index);

      setActivePokemonImage(pokemonImage);
    }
  };

  const handleShowDetails = (index: number) => {
    const pokemon = pokemonListWithDetails[index];
    setPokemonSelected(pokemon);
  };

  const handleBackToPokemonList = () => {
    setPokemonSelected(null);
  };

  return (
    <PokemonListContent
      pokemonList={pokemonList}
      pokemonSelected={pokemonSelected}
      pokemonListWithDetails={pokemonListWithDetails}
      handleSelectActiveImage={handleSelectActiveImage}
      handleBackToPokemonList={handleBackToPokemonList}
      handleShowDetails={handleShowDetails}
      activePokemonImage={activePokemonImage}
      page={page}
      setPage={setPage}
      total={total}
    />
  );
};

export default PokemonList;
