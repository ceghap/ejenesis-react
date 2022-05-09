import React from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  privateRoute?: boolean;
}

function Navbar({ privateRoute }: LayoutProps) {
  return (
    <>
      {privateRoute ? (
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="profile">Profile</Link>
        </nav>
      ) : (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      )}
    </>
  );
}

export default Navbar;
