export const calculatePageNumbers = (perPage: number, total: number) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return {
    firstPage: Number(pageNumbers.shift()),
    lastPage: Number(pageNumbers.pop()),
    pageNumbers,
  };
};
