import { Dispatch, FC } from "react";
import style from "./style.module.css";

type Props = {
  isVisible: boolean;
  setIsVisible: Dispatch<React.SetStateAction<boolean>>;
};

const Button: FC<Props> = ({ isVisible, setIsVisible }) => {
  const handleClick = () => {
    setIsVisible(!isVisible)
  };
  return <button className={style.btn} onClick={handleClick}>Меню</button>;
};

export default Button;
