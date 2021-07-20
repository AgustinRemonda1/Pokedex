import React, { useContext } from "react";
import { PokemonListContentProps } from "./PokemonList.interfaces";
import {
  PokemonListContainer,
  PokemonListGrid,
  PokedexTitle,
  Header,
  HeaderBackgroundLayout,
  ListContainer,
  SideGradientLayout,
  ImageWrapper,
  NumberTitle,
  Footer,
} from "./PokemonList.styles";
import Table from "../SharedComponents/Table/Table.component";
import { LanguageContext } from "../../Config/Lang/Lang.language";
import { generateConfigWithLang, perPage } from "./PokemonList.config";
import PokemonDetails from "../PokemonDetails/PokemonDetails.component";
import LangIcon from "../../Assets/Icons/translate.svg";
import Button from "../SharedComponents/Button/Button.component";

const PokemonListContent = ({
  pokemonList,
  handleSelectActiveImage,
  activePokemonImage,
  handleShowDetails,
  pokemonSelected,
  handleBackToPokemonList,
  page,
  total,
  setPage,
}: PokemonListContentProps) => {
  const { language, changeLanguage, lang } = useContext(LanguageContext);
  const langOption = lang === language.es ? language.en : language.es;
  const configParams = {
    handleShowDetails,
    language,
  };
  const langButtonType = "small-normal-button";

  return !pokemonSelected ? (
    <PokemonListContainer>
      <Header>
        <PokedexTitle>{language.pokedex}</PokedexTitle>
        <HeaderBackgroundLayout>
          <NumberTitle>{language.number}</NumberTitle>
        </HeaderBackgroundLayout>
      </Header>
      <PokemonListGrid>
        <ImageWrapper>
          {activePokemonImage && <img src={activePokemonImage} alt="" />}
        </ImageWrapper>
        <ListContainer>
          <Table
            onHover={handleSelectActiveImage}
            dataset={pokemonList}
            config={generateConfigWithLang(configParams)}
            total={total}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </ListContainer>
      </PokemonListGrid>
      <Footer>
        <Button
          icon={LangIcon}
          text={langOption}
          action={() => changeLanguage()}
          type={langButtonType}
        ></Button>
      </Footer>
      <SideGradientLayout />
    </PokemonListContainer>
  ) : (
    <PokemonDetails
      pokemonSelected={pokemonSelected}
      handleBackToPokemonList={handleBackToPokemonList}
    />
  );
};

export default PokemonListContent;
