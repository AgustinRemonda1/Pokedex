export const formatPokemonNumber = (pokemonNumber: number): string => {
  const pokemonNumberLength = pokemonNumber.toString().length;
  const hasMinimumLength = pokemonNumberLength >= 3;

  if (hasMinimumLength) {
    return "Nº " + pokemonNumber;
  }
  return "Nº " + "0".repeat(3 - pokemonNumberLength) + pokemonNumber;
};
