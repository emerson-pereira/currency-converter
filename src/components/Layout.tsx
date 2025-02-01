import { ReactElementProps } from "../types/react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props: ReactElementProps) {
  return (
    <div className={`flex flex-col min-h-screen mx-auto ${props.className}`}>
      <Header className="flex-none flex justify-center py-5" />
      <main className="flex-grow">{props.children}</main>
      <hr className="border-gray-200 mt-5" />
      <Footer className="flex-none flex justify-center py-5" />
    </div>
  );
}

export default Layout;
