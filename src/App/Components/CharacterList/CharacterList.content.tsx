import React, { useContext } from "react";
import { CharacterListContentProps } from "./CharacterList.interfaces";
import {
  CharacterListContainer,
  CharacterListGrid,
  PokedexTitle,
  Header,
  HeaderBackgroundLayout,
  ListContainer,
  SideGradientLayout,
  ImageWrapper,
  NumberTitle,
} from "./CharacterList.styles";
import Table from "../SharedComponents/Table/Table.component";
import { LanguageContext } from "../../Config/Lang/Lang.language";
import { generateConfigWithLang } from "./CharacterList.config";
import PokemonDetails from "../PokemonDetails/PokemonDetails.component";

const CharacterListContent = ({
  pokemonList,
  handleSelectActiveImage,
  activePokemonImage,
  handleShowDetails,
  pokemonSelected,
  setPokemonSelected,
}: CharacterListContentProps) => {
  const { language } = useContext(LanguageContext);
  const configParams = {
    handleShowDetails,
    language,
  };

  return !pokemonSelected ? (
    <CharacterListContainer>
      <Header>
        <PokedexTitle>{language.pokedex}</PokedexTitle>
        <HeaderBackgroundLayout>
          <NumberTitle>{language.number}</NumberTitle>
        </HeaderBackgroundLayout>
      </Header>
      <CharacterListGrid>
        <ImageWrapper>
          {activePokemonImage && <img src={activePokemonImage} alt="" />}
        </ImageWrapper>
        <ListContainer>
          <Table
            onHover={handleSelectActiveImage}
            dataset={pokemonList}
            config={generateConfigWithLang(configParams)}
          />
        </ListContainer>
      </CharacterListGrid>
      <SideGradientLayout />
    </CharacterListContainer>
  ) : (
    <PokemonDetails
      pokemonSelected={pokemonSelected}
      setPokemonSelected={setPokemonSelected}
    />
  );
};

export default CharacterListContent;
