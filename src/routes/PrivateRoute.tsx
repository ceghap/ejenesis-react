import { Outlet, Navigate } from "react-router-dom";
import Navbar from "../common/components/Navbar";
import Footer from "../common/components/Footer";
import { Container } from "@chakra-ui/react";
import Layout from "../common/components/Layout";

const PrivateRoute = () => {
  const user = false;
  return (
    <Layout>
      <Navbar privateRoute={user} />
      {user ? (
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
