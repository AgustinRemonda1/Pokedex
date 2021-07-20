import React from "react";
import { capitalizeStrings, slugToText } from "../../Utils/FormatStrings.utils";
import DetailsIcon from "../../Assets/Icons/note-text-outline.svg";
import StatsIcon from "../../Assets/Icons/chart-box-outline.svg";
import AbilitiesIcon from "../../Assets/Icons/beaker-check-outline.svg";
import LangIcon from "../../Assets/Icons/translate.svg";
import BackIcon from "../../Assets/Icons/arrow-left.svg";

export const generateDetailsConfig = ({ language, pokemon, lang }: any) => {
  const isEnglishLanguage = language.en === lang;

  return [
    {
      title: language.name,
      data: capitalizeStrings(pokemon.name),
    },
    {
      title: language.type,
      data: pokemon.types.map((item: any, index: number) => (
        <p key={index}>{language[item.type.name]}</p>
      )),
    },
    {
      title: language.height,
      data: isEnglishLanguage
        ? Math.round(pokemon.height * 3.9)
        : Math.round(pokemon.height * 10),
    },
    {
      title: language.weight,
      data: isEnglishLanguage
        ? Math.round(pokemon.weight / 4.3) + " lbs"
        : Math.round(pokemon.weight / 10) + " kgs",
    },
    {
      title: language.numberOfBattles,
      data: pokemon.game_indices.length,
    },
    {
      title: language.experiencePoints,
      data: pokemon.base_experience,
    },
  ];
};

export const generateStatsConfig = ({ language, pokemon }: any) => {
  return [
    {
      title: language.hp,
      data: pokemon.stats[0].base_stat,
    },
    {
      title: language.attack,
      data: pokemon.stats[1].base_stat,
    },
    {
      title: language.defense,
      data: pokemon.stats[2].base_stat,
    },
    {
      title: language.specialAttack,
      data: pokemon.stats[3].base_stat,
    },
    {
      title: language.specialDefense,
      data: pokemon.stats[4].base_stat,
    },
    {
      title: language.speed,
      data: pokemon.stats[5].base_stat,
    },
  ];
};

export const generateAbilitiesConfig = ({ language, pokemon }: any) => {
  return pokemon.abilities.map((item: any) => ({
    title: language.name,
    data: slugToText(item.ability.name),
  }));
};

export const modes = {
  details: "details",
  stats: "stats",
  abilities: "abilities",
};

export const generateButtonModes = ({ language, setMode, mode }: any) => {
  return [
    {
      icon: DetailsIcon,
      text: language.details,
      action: setMode,
      value: modes.details,
      active: modes.details === mode,
    },
    {
      icon: StatsIcon,
      text: language.stats,
      action: setMode,
      value: modes.stats,
      active: modes.stats === mode,
    },
    {
      icon: AbilitiesIcon,
      text: language.abilities,
      action: setMode,
      value: modes.abilities,
      active: modes.abilities === mode,
    },
  ];
};

export const generateActionButtons = ({
  language,
  lang,
  changeLanguage,
  handleBackToPokemonList,
}: any) => {
  return [
    {
      icon: BackIcon,
      text: language.back,
      action: handleBackToPokemonList,
      type: "small-normal-button",
      tooltipDisabled: true,
    },
    {
      icon: LangIcon,
      text: lang === language.es ? language.en : language.es,
      action: changeLanguage,
      type: "small-normal-button",
      tooltipDisabled: true,
    },
  ];
};
