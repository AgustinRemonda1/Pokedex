export interface ButtonInterface {
  icon: any;
  text: string;
  action: (value?: any) => void;
  value?: any;
  tooltipDisabled?: boolean;
  active?: boolean;
  type?: string;
}
