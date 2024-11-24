import Logo from "../Logo";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className={style.container}>
      <Logo />
    </header>
  );
};

export default Header;
