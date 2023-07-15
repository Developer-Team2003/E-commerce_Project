<<<<<<< HEAD
export interface ButtonProps {
  className: string;
  onClick?: (event: MouseEvent) => {};
  label: string;
  type: "button" | "submit" | "reset";
}
=======
export interface IPropsButton {
    classname: string;
    onClick?: (event: MouseEvent | React.MouseEvent<HTMLButtonElement> ) => {},
    label: string;
    type: "button" | "submit" | "reset"
  }
>>>>>>> 549812b045d4830a4cbf06e332da1689a87892a6
