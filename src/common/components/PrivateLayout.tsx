import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

function PrivateLayout() {
  return (
    <>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="profile">Profile</Link>
      </nav>
      <h1>Private</h1>
      <Outlet />
    </>
  );
}

export default PrivateLayout;
