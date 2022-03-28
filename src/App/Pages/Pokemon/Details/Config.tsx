import React from "react";
import {
  capitalizeStrings,
  slugToText,
} from "../../../Utils/FormatStrings.utils";
import DetailsIcon from "../../../Assets/Icons/note-text-outline.svg";
import StatsIcon from "../../../Assets/Icons/chart-box-outline.svg";
import AbilitiesIcon from "../../../Assets/Icons/beaker-check-outline.svg";
import LangIcon from "../../../Assets/Icons/translate.svg";
import BackIcon from "../../../Assets/Icons/arrow-left.svg";
import { LanguageInterface } from "../../../Config/Lang/Lang.language";
import { PokemonWithDetailsInterface } from "../../../Core/Modules/Pokemon/Interfaces";

interface DetailsConfigInterface {
  language: LanguageInterface;
  lang: string;
  pokemon: PokemonWithDetailsInterface;
}

export const generateDetailsConfig = ({
  language,
  pokemon,
  lang,
}: DetailsConfigInterface) => {
  const isEnglishLanguage = language.en === lang;

  return [
    {
      title: language.name,
      data: capitalizeStrings(pokemon.name),
    },
    {
      title: language.type,
      data: pokemon.types.map((item: any, index: number) => (
        <p key={index}>{item.type.name}</p>
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
      title: language.description,
      data: pokemon.description,
    },
  ];
};

interface StatsAndAbilitiesInterface {
  language: LanguageInterface;
  pokemon: PokemonWithDetailsInterface;
}

export const generateStatsConfig = ({
  language,
  pokemon,
}: StatsAndAbilitiesInterface) => {
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

export const generateAbilitiesConfig = ({
  language,
  pokemon,
}: StatsAndAbilitiesInterface) => {
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

interface ModeButtonsInterface {
  language: LanguageInterface;
  onChangeMode: (mode: string) => void;
  mode: string;
}

export const generateButtonModes = ({
  language,
  onChangeMode,
  mode,
}: ModeButtonsInterface) => {
  return [
    {
      icon: DetailsIcon,
      text: language.details,
      action: onChangeMode,
      value: modes.details,
      active: modes.details === mode,
    },
    {
      icon: StatsIcon,
      text: language.stats,
      action: onChangeMode,
      value: modes.stats,
      active: modes.stats === mode,
    },
    {
      icon: AbilitiesIcon,
      text: language.abilities,
      action: onChangeMode,
      value: modes.abilities,
      active: modes.abilities === mode,
    },
  ];
};

interface ActionButtonInterface {
  language: LanguageInterface;
  lang: string;
  changeLanguage: (lang: string) => void;
  onBackToPokemonDetails: () => void;
}

export const generateActionButtons = ({
  language,
  lang,
  changeLanguage,
  onBackToPokemonDetails,
}: ActionButtonInterface) => {
  return [
    {
      icon: BackIcon,
      text: language.back,
      action: onBackToPokemonDetails,
    },
    {
      icon: LangIcon,
      text: lang === language.es ? language.en : language.es,
      action: changeLanguage,
    },
  ];
};
