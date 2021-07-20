export interface TablePaginationProps {
  perPage: number;
  page: number;
  total: number;
  setPage: (page: number) => void;
}
