import { Container, Stack } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";

import Footer from "../common/components/Footer";
import Layout from "../common/components/Layout";
import Navbar from "../common/components/Navbar";
import { useUser } from "../hooks/auth/useUser";

const PublicRoute = () => {
  const user = useUser();
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
