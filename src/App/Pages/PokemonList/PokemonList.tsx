import React from "react";
import { PokemonListContainer, SideGradientLayout } from "./PokemonList.styled";
import useLanguage from "src/App/Core/Hooks/Shared/useLanguage.hook";
import PokemonHeader from "src/App/Components/PokemonHeader/PokemonHeader";
import PokemonFooter from "src/App/Components/PokemonFooter/PokemonFooter";
import PokemonListContent from "src/App/Components/PokemonListContent/PokemonListContent";
import { generateConfigWithLang } from "./PokemonList.config";
import usePokemonList from "src/App/Core/Hooks/PokemonList/usePokemonList.hook";

const PokemonList = () => {
  const { language } = useLanguage();
  const { state, actions } = usePokemonList();
  const { pokemonListState, pagination } = state;
  const { onPagination, onSelectActiveImage, onShowPokemonDetails } = actions;
  const configParams = {
    onShowPokemonDetails,
    language,
  };

  return (
    <PokemonListContainer>
      <PokemonHeader />
      <PokemonListContent
        activePokemonImage={pokemonListState.activeImage}
        onSelectActiveImage={onSelectActiveImage}
        pokemonList={pokemonListState.list}
        config={generateConfigWithLang(configParams)}
        total={pagination.total}
        perPage={pagination.perPage}
        page={pagination.page}
        onPagination={onPagination}
      />
      <PokemonFooter />
      <SideGradientLayout />
    </PokemonListContainer>
  );
};

export default PokemonList;
