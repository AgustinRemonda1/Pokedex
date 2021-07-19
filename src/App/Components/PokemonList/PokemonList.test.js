import React from "react";
import { shallow } from "enzyme";
import PokemonList from "./PokemonList.component";
import PokemonListContent from "./PokemonList.content";
import {
  PokemonListWithOutActivePokemonImage,
  PokemonListWithActivePokemonImage,
  PokemonListWithPokemonSelected,
} from "./PokemonList.data";
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
import PokemonDetails from "../PokemonDetails/PokemonDetails.component";
import { idTaker } from "./PokemonList.utils";
import { pokemonList } from "../../Assets/Test/Data/Pokemon.data";
import Button from "../SharedComponents/Button/Button.component";

describe("PokemonList", () => {
  it("should contain <PokemonListContent />", () => {
    const wrapper = shallow(<PokemonList />);

    expect(wrapper.find(PokemonListContent).length).toBe(1);
  });

  it("Check PokemonListContent structure without pokemon active image", () => {
    const wrapper = shallow(
      <PokemonListContent
        handleBackToPokemonList={jest.fn()}
        handleSelectActiveImage={jest.fn()}
        handleShowDetails={jest.fn()}
        setPage={jest.fn()}
        {...PokemonListWithOutActivePokemonImage}
      />
    );

    expect(wrapper.find(PokemonListContainer).length).toBe(1);
    expect(wrapper.find(PokemonListGrid).length).toBe(1);
    expect(wrapper.find(PokedexTitle).length).toBe(1);
    expect(wrapper.find(Header).length).toBe(1);
    expect(wrapper.find(HeaderBackgroundLayout).length).toBe(1);
    expect(wrapper.find(ListContainer).length).toBe(1);
    expect(wrapper.find(SideGradientLayout).length).toBe(1);
    expect(wrapper.find(ImageWrapper).length).toBe(1);
    expect(wrapper.find(Button).length).toBe(1);
    expect(wrapper.find("img").length).toBe(0);
    expect(wrapper.find(NumberTitle).length).toBe(1);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it("Should show Pokemon active image", () => {
    const wrapper = shallow(
      <PokemonListContent
        handleBackToPokemonList={jest.fn()}
        handleSelectActiveImage={jest.fn()}
        handleShowDetails={jest.fn()}
        setPage={jest.fn()}
        {...PokemonListWithActivePokemonImage}
      />
    );

    expect(wrapper.find("img").length).toBe(1);
  });

  it("Should open pokemon details", () => {
    const wrapper = shallow(
      <PokemonListContent
        handleBackToPokemonList={jest.fn()}
        handleSelectActiveImage={jest.fn()}
        handleShowDetails={jest.fn()}
        setPage={jest.fn()}
        {...PokemonListWithPokemonSelected}
      />
    );

    expect(wrapper.find(PokemonListContainer).length).toBe(0);
    expect(wrapper.find(PokemonListGrid).length).toBe(0);
    expect(wrapper.find(PokedexTitle).length).toBe(0);
    expect(wrapper.find(Header).length).toBe(0);
    expect(wrapper.find(HeaderBackgroundLayout).length).toBe(0);
    expect(wrapper.find(ListContainer).length).toBe(0);
    expect(wrapper.find(SideGradientLayout).length).toBe(0);
    expect(wrapper.find(ImageWrapper).length).toBe(0);
    expect(wrapper.find("img").length).toBe(0);
    expect(wrapper.find(Button).length).toBe(0);
    expect(wrapper.find(NumberTitle).length).toBe(0);
    expect(wrapper.find(Footer).length).toBe(0);

    expect(wrapper.find(PokemonDetails).length).toBe(1);
  });

  it("Should take pokemon id from url", () => {
    const url = pokemonList[0].url;
    const id = idTaker(url);

    expect(id).toEqual(2);
  });

  it("Shouldn't take pokemon id from a random string", () => {
    const randomString = "something";
    const id = idTaker(randomString);

    expect(id).toEqual(NaN);
  });
});
