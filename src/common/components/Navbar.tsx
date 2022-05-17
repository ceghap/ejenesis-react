// import { signOut } from "../utils/firebase/signOut";
import { Link, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import Logo from "./Logo";
import MenuItem from "./MenuItem";
import MenuLinks from "./MenuLinks";
import MenuToggle from "./MenuToggle";
import NavbarContainer from "./NavbarContainer";
import { auth } from "../utils/firebase/config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  privateRoute?: boolean;
}

const Navbar: React.FC<LayoutProps> = ({ privateRoute, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const nagivate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      nagivate("/login");
    } catch (error) {
      console.log("error signing out", error);
    }
  };

  return (
    <NavbarContainer {...props}>
      <Logo w="100px" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      {privateRoute ? (
        <MenuLinks isOpen={isOpen}>
          <MenuItem to="/dashboard">Dashboard</MenuItem>
          <MenuItem to="profile">Profile</MenuItem>
          <Link>
            <Text display="block" onClick={handleSignOut}>
              Sign out
            </Text>
          </Link>
          <MenuItem to="/">Home</MenuItem>
        </MenuLinks>
      ) : (
        <MenuLinks isOpen={isOpen}>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/login">Login</MenuItem>
          <MenuItem to="/register">Register</MenuItem>
        </MenuLinks>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
