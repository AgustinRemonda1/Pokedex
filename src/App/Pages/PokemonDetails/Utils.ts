import {
  generateDetailsConfig,
  generateStatsConfig,
  generateAbilitiesConfig,
} from "./Config";

export const switchConfigMode = ({ mode, modes, configParams }: any) => {
  switch (mode) {
    case modes.details:
      return generateDetailsConfig(configParams);
    case modes.stats:
      return generateStatsConfig(configParams);
    case modes.abilities:
      return generateAbilitiesConfig(configParams);
    default:
      return generateDetailsConfig(configParams);
  }
};
