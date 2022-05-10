import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../common/components/Navbar";
import Footer from "../common/components/Footer";
import { Container } from "@chakra-ui/react";
import Layout from "../common/components/Layout";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Layout>
      <Navbar privateRoute={isAuthenticated} />
      {isAuthenticated ? (
        <Container>
          <Outlet />
        </Container>
      ) : (
        <Navigate to="/login" />
      )}
      <Footer />
    </Layout>
  );
};

export default PrivateRoute;
