export interface TableProps {
  config: any[];
  dataset: any[];
  onHover: (value: number) => void;
  total: number;
  page: number;
  setPage: (page: number) => void;
  perPage: number;
}
