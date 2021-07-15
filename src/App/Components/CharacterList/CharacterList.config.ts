import PokeballIcon from "../../Assets/pokeball.svg";

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
      onClick: (index: number) => {
        handleShowDetails(index);
      },
    },
  ];
};
