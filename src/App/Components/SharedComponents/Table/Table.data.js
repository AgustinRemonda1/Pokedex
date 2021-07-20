import { pokemonList } from "../../../Assets/Test/Data/Pokemon.data";
import { language as lang } from "../../../Config/Lang/Lang.language";
import PokeballIcon from "../../Assets/Icons/pokeball.svg";

const language = lang.ES;
const onClick = jest.fn();

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

export const firstTableTestProps = {
  config: tableConfig,
  dataset: pokemonList,
  onHover: jest.fn(),
  total: 20,
  page: 1,
  setPage: jest.fn(),
  perPage: 5,
};

export const secondTableTestProps = {
  config: tableConfig,
  dataset: [...pokemonList, ...pokemonList],
  onHover: jest.fn(),
  total: 20,
  page: 1,
  setPage: jest.fn(),
  perPage: 10,
};
