import React from "react";
import { PokemonListContainer, SideGradientLayout } from "./PokemonList.styled";
import useLanguage from "../../Core/Hooks/useLanguage";
import PokemonHeader from "../../Components/PokemonHeader/PokemonHeader";
import PokemonFooter from "../../Components/PokemonFooter/PokemonFooter";
import PokemonListContent from "../../Components/PokemonListContent/PokemonListContent";
import { generateConfigWithLang } from "./Config";
import { useListing } from "../../Core/Modules/Pokemon";

const PokemonList = () => {
  const { language } = useLanguage();
  const { state, actions } = useListing();
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
