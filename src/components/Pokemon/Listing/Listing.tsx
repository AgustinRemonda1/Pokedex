import React from "react";
import { PokemonListContainer, SideGradientLayout } from "./Listing.styled";
import useLanguage from "core/Hooks/useLanguage";
import PokemonHeader from "components/Pokemon/Listing/Header";
import PokemonFooter from "components/Pokemon/Listing/Footer";
import PokemonGrid from "components/Pokemon/Listing/Grid";
import { generateConfigWithLang } from "./Config";
import { useListing } from "core/Modules/Pokemon";

const Listing = () => {
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
      <PokemonGrid
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

export default Listing;
