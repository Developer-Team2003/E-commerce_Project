export interface IPropsButton {
    classname: string;
    onClick?: (event: MouseEvent | React.MouseEvent<HTMLButtonElement> ) => {},
    label: string;
    type: "button" | "submit" | "reset"
  }