export interface ButtonInterface {
  icon: any;
  text: string;
  action: (value?: any) => void;
  value?: any;
  active?: boolean;
  type?: string;
}
