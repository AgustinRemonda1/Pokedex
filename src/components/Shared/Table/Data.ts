import { pokemonList } from "assets/Test/Data/Pokemon.data";
import { language as lang } from "config/Lang/Lang.language";
import PokeballIcon from "assets/Icons/pokeball.svg";

const language = lang.ES;
export const onClick = jest.fn();

export const tableConfig = [
  {
    name: language.number,
    property: "index",
  },
  {
    name: language.name,
    property: "name",
  },
  {
    name: language.details,
    isAction: true,
    icon: PokeballIcon,
    type: "button-with-tooltip",
    onClick,
  },
];

export const tableTestProps = {
  config: tableConfig,
  dataset: pokemonList,
  onHover: jest.fn(),
  total: 20,
  currentPage: 1,
  onPagination: jest.fn(),
  perPage: 5,
};
