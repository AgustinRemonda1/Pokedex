import PokeballIcon from "../../Assets/Icons/pokeball.svg";

export const perPage = 5;

export const generateConfigWithLang = (configParams: any) => {
  const { language, handleShowDetails } = configParams;

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
        handleShowDetails(index);
      },
    },
  ];
};
