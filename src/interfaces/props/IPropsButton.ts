export interface ButtonProps  {
    className: string;
    onClick?: (event: MouseEvent) => {},
    label: string;
    type: "button" | "submit" | "reset"
  }