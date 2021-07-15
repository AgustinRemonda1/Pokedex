import PokeballIcon from "../../Assets/pokeball.svg";

export const generateConfigWithLang = (configParams: any) => {
  const { language } = configParams;

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
      property: "url",
      isAction: true,
      icon: PokeballIcon,
      onClick: (url: any) => {
        console.log(url);
      },
    },
  ];
};
