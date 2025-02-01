import { ReactElementProps } from "../types/react";

function Footer(props: ReactElementProps) {
  return (
    <footer className={props.className}>
      <p>FOOTER</p>
    </footer>
  );
}

export default Footer;
