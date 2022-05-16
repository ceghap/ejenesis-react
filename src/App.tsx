import "./common/utils/firebase/config";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Dashboard from "./private/Dashboard";
import Error from "./common/Error";
import Home from "./public/Home";
import Login from "./public/Login";
import PrivateRoute from "./routes/PrivateRoute";
import { Profile } from "./private/profile";
import PublicRoute from "./routes/PublicRoute";
import Register from "./public/Register";
import { setUser } from "./common/state/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useUser } from "./hooks/auth/useUser";

export const App = () => {
  const dispatch = useDispatch();

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Error />} /> {/* 404 */}
          </Route>
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Error />} /> {/* 404 */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
