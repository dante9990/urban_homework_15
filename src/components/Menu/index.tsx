import { FC } from "react";
import style from "./style.module.css";

type Props = {
  favorite: boolean;
  handleDelete: () => void;
  handleChange: () => void;
  openForm: () => void;
};

const Menu: FC<Props> = ({ favorite, handleDelete, handleChange, openForm }) => {
  return (
    <div className={style.container}>
      <div className={style.menuItem} onClick={openForm}>Редакторовать</div>
      <div className={style.menuItem} onClick={handleDelete}>
        Удалить
      </div>
      <div className={style.menuItem} onClick={handleChange}>
        {!favorite ? `Добавить в избранное` : `Убрать из избранного`}
      </div>
    </div>
  );
};

export default Menu;
