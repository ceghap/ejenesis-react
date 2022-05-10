import { Outlet, Navigate } from "react-router-dom";
import { Container, Stack } from "@chakra-ui/react";
import Layout from "../common/components/Layout";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../common/components/Navbar";
import Footer from "../common/components/Footer";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  return (
    <Layout>
      <>
        <Navbar privateRoute={isAuthenticated} />
        {!isAuthenticated ? (
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
          >
            <Outlet />
          </Container>
        ) : (
          <Navigate to="/dashboard" />
        )}
        <Footer />
      </>
    </Layout>
  );
};

export default PublicRoute;
