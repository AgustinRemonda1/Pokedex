export interface FlexTableConfigInterface {
  title: string;
  data: string | number | JSX.Element;
}

export interface SimpleFlexTableProps {
  config: FlexTableConfigInterface[];
}
