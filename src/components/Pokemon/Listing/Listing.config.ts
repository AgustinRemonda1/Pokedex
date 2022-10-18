import PokeballIcon from "assets/Icons/pokeball.svg";
import { LanguageInterface } from "~/assets/Lang/Lang.language";

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
      icon: PokeballIcon.src,
      type: "button-with-tooltip",
      onClick: (index: number) => {
        onShowPokemonDetails(index);
      },
    },
  ];
};
