import { ReactElementProps } from "../types/react";

function Footer(props: ReactElementProps) {
  return (
    <footer className={props.className}>
      <p className="text-gray-600 text-xs">
        @ Uphold, Inc. 2025. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
