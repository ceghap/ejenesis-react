import { Outlet, Navigate } from "react-router-dom";
import { Container, Stack } from "@chakra-ui/react";
import Layout from "../common/components/Layout";

import Navbar from "../common/components/Navbar";
import Footer from "../common/components/Footer";

const PublicRoute = () => {
  const user = false;
  return (
    <Layout>
      <>
        <Navbar privateRoute={user} />
        {!user ? (
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction="column"
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
