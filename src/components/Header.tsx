import logo from "../assets/logo.png";
import { ReactElementProps } from "../types/react";

function Header(props: ReactElementProps) {
  return (
    <header className={props.className}>
      <img src={logo} alt="logo" width={100} />
    </header>
  );
}

export default Header;
