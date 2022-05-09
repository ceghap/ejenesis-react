import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

interface LayoutProps {
  privateRoute?: boolean;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Navbar privateRoute={props.privateRoute} />

      <Outlet />
    </>
  );
};

export default Layout;
