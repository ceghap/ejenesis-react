import React, { useState } from "react";
import MenuToggle from "./MenuToggle";
import NavbarContainer from "./NavbarContainer";
import MenuItem from "./MenuItem";
import MenuLinks from "./MenuLinks";
import Logo from "./Logo";

interface LayoutProps {
  privateRoute?: boolean;
}

const Navbar: React.FC<LayoutProps> = ({ privateRoute, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer {...props}>
      <Logo w="100px" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      {privateRoute ? (
        <MenuLinks isOpen={isOpen}>
          <MenuItem to="/dashboard">Dashboard</MenuItem>
          <MenuItem to="profile">Profile</MenuItem>
          <MenuItem to="/">Home</MenuItem>
        </MenuLinks>
      ) : (
        <MenuLinks isOpen={isOpen}>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/login">Login</MenuItem>
          <MenuItem to="/register">Register</MenuItem>
          <MenuItem to="/dashboard">Dashboard</MenuItem>
        </MenuLinks>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
