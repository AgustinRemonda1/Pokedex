import React, { FC } from "react";
import { PokemonInterface } from "../../../../Core/Modules/Pokemon/Interfaces";
import Table from "../../../Shared/Table";
import { PokemonListGrid, ImageWrapper, ListContainer } from "./Grid.styled";

export interface GridProps {
  activePokemonImage: string;
  onSelectActiveImage: (index: number) => void;
  pokemonList: PokemonInterface[];
  config: any[];
  total: number;
  page: number;
  onPagination: (page: number) => void;
  perPage: number;
}

const Grid: FC<GridProps> = ({
  activePokemonImage,
  onSelectActiveImage,
  pokemonList,
  config,
  onPagination,
  page,
  perPage,
  total,
}) => {
  return (
    <PokemonListGrid>
      <ImageWrapper>
        {activePokemonImage && (
          <img src={activePokemonImage} alt="pokemon-active" />
        )}
      </ImageWrapper>
      <ListContainer>
        <Table
          onHover={onSelectActiveImage}
          dataset={pokemonList}
          config={config}
          total={total}
          currentPage={page}
          onPagination={onPagination}
          perPage={perPage}
        />
      </ListContainer>
    </PokemonListGrid>
  );
};

export default Grid;
