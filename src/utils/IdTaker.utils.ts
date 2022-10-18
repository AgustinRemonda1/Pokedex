export const idTaker = (url: string): number => {
  const idPosition = 6;
  const urlDivision = url.split("/");
  const id = urlDivision[idPosition];

  return Number(id);
};
