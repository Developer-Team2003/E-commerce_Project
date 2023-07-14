export interface IPropsButton {
    classname: string;
    onClick?: (event: MouseEvent) => {},
    label: string;
    type: "button" | "submit" | "reset"
  }