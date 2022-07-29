import { FC } from "react";

interface IButton {
  handleClick: () => void;
  textButton: string;
}

export const CustomButton: FC<IButton> = ({ handleClick, textButton }) => {
  return <button onClick={handleClick}>{textButton}</button>;
};
