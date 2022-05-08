import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./public/Home";
import Login from "./public/Login";
import Register from "./public/Register";
import Error from "./common/Error";
import PublicLayout from "./common/components/PublicLayout";
import PrivateLayout from "./common/components/PrivateLayout";
import Dashboard from "./private/Dashboard";
import Profile from "./private/Profile";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Error />} /> {/* 404 */}
        </Route>
        <Route path="/dashboard" element={<PrivateLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Error />} /> {/* 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
