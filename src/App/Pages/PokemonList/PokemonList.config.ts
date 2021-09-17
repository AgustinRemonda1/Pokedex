import PokeballIcon from "../../Assets/Icons/pokeball.svg";

export const generateConfigWithLang = (configParams: any) => {
  const { language, onShowPokemonDetails } = configParams;

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
