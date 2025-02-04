import { ReactElementProps } from "../types/react";

function Header(props: ReactElementProps) {
  return (
    <header className={props.className}>
      <img className="h-10" src="./small-logo.svg" alt="logo" />
    </header>
  );
}

export default Header;
