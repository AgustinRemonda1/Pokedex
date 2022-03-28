import PokeballIcon from "../../../Assets/Icons/pokeball.svg";
import { LanguageInterface } from "../../../Config/Lang/Lang.language";

interface ConfigWithLangInterface {
  language: LanguageInterface;
  onShowPokemonDetails: (pokemon: number) => void;
}

export const generateConfigWithLang = ({
  language,
  onShowPokemonDetails,
}: ConfigWithLangInterface) => {
  return [
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
      onClick: (index: number) => {
        onShowPokemonDetails(index);
      },
    },
  ];
};
