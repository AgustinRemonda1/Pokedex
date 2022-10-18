import { useState, useCallback, useEffect } from "react";
import {
  getPokemonList,
  getPokemonListWithDetails,
} from "~/core/Services/PokemonList.service";
import {
  PokemonInterface,
  PokemonWithDetailsInterface,
} from "../pokemon.types";
import { getPokemonImage } from "./Listing.utils";
import { useRouter } from "next/router";

interface PokemonListStateInterface {
  list: PokemonInterface[];
  listWithDetails: PokemonWithDetailsInterface[];
  activeImage: string;
}

interface PaginationState {
  page: number;
  perPage: number;
  total: number;
}

const INITIAL_STATE: PokemonListStateInterface = {
  list: [],
  listWithDetails: [],
  activeImage: "",
};

const INITIAL_PAGINATION: PaginationState = {
  page: 1,
  perPage: 5,
  total: 0,
};

const useListing = () => {
  const [pokemonListState, setPokemonListState] =
    useState<PokemonListStateInterface>(INITIAL_STATE);
  const [pagination, setPagination] =
    useState<PaginationState>(INITIAL_PAGINATION);
  const router = useRouter();

  useEffect(() => {
    const fetchPokemonList = async () => {
      const data = await getPokemonList(pagination.page);
      const pokemonList = data.results;

      setPokemonListState({
        ...pokemonListState,
        list: pokemonList,
        activeImage: "",
      });
      setPagination({ ...pagination, total: data.count });
    };
    fetchPokemonList();
  }, [pagination.page]);

  useEffect(() => {
    const fetchPokemonDetailsList = async () => {
      const { list } = pokemonListState;
      const pokemonList = await getPokemonListWithDetails(list);
      setPokemonListState({
        ...pokemonListState,
        listWithDetails: pokemonList,
      });
    };

    fetchPokemonDetailsList();
  }, [pokemonListState.list, pagination.page]);

  const onPagination = useCallback(
    (page: number) => {
      setPagination({ ...pagination, page });
    },
    [pagination]
  );

  const onSelectActiveImage = useCallback(
    (index: number) => {
      const { listWithDetails } = pokemonListState;

      if (listWithDetails.length) {
        const pokemonImage = getPokemonImage(listWithDetails, index);

        setPokemonListState({ ...pokemonListState, activeImage: pokemonImage });
      }
    },
    [pokemonListState]
  );

  const onShowPokemonDetails = useCallback(
    (index: number) => {
      const { listWithDetails } = pokemonListState;
      const pokemonSelected = listWithDetails[index];

      router.replace(`/pokedex/ver-detalles/${pokemonSelected.id}`);
    },
    [pokemonListState]
  );

  return {
    state: { pokemonListState, pagination },
    actions: { onSelectActiveImage, onPagination, onShowPokemonDetails },
  };
};

export default useListing;
