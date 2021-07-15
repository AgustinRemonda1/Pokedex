import React from "react";
import { capitalizeStrings } from "../../Utils/FormatStrings.utils";
import DetailsIcon from "../../Assets/note-text-outline.svg";
import StatsIcon from "../../Assets/chart-box-outline.svg";
import AbilitiesIcon from "../../Assets/beaker-check-outline.svg";

export const generateDetailsConfig = ({ language, pokemon }: any) => {
  return [
    {
      title: language.name,
      data: capitalizeStrings(pokemon.name),
    },
    {
      title: language.type,
      data: pokemon.types.map((item: any, index: number) => (
        <p key={index}>{capitalizeStrings(item.type.name)}</p>
      )),
    },
    {
      title: language.height,
      data: Math.round(pokemon.height * 3.9),
    },
    {
      title: language.weight,
      data: Math.round(pokemon.weight / 4.3) + " lbs",
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
    data: item.ability.name,
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
      tooltipDisabled: true,
    },
    {
      icon: StatsIcon,
      text: language.stats,
      action: setMode,
      value: modes.stats,
      active: modes.stats === mode,
      tooltipDisabled: true,
    },
    {
      icon: AbilitiesIcon,
      text: language.abilities,
      action: setMode,
      value: modes.abilities,
      active: modes.abilities === mode,
      tooltipDisabled: true,
    },
  ];
};
