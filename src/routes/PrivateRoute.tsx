import {
  Avatar,
  Box,
  Button,
  MenuItem as CUIMenuItem,
  Container,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaBell, FaSearch } from "react-icons/fa";
import { Navigate, Outlet } from "react-router-dom";

import { ChevronDownIcon } from "@chakra-ui/icons";
import Footer from "../common/components/Footer";
import Layout from "../common/components/Layout";
import Logo from "../common/components/Logo";
import MenuItem from "../common/components/MenuItem";
// import Navbar from "../common/components/Navbar";
import { auth } from "../common/utils/firebase/config";
import { setUser } from "../common/state/user";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/auth/useUser";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useUser();

  dispatch(setUser(user));

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log("error signing out", error);
    }
  };
  return (
    <Layout>
      {/* <Navbar privateRoute={user} /> */}
      {user ? (
        <Container maxW="100vw" p={0}>
          <Flex>
            <Stack
              w="250px"
              position="fixed"
              top="0"
              bottom="0"
              shadow="sm"
              zIndex="10"
            >
              <Box px={8} py={4} shadow="sm">
                <Logo />
              </Box>
              <Box bgColor="blue.500" color="white" p={4}>
                <MenuItem to="/dashboard">Dashboard</MenuItem>
                <MenuItem to="profile">Profile</MenuItem>
                <Link>
                  <Text display="block" onClick={handleSignOut}>
                    Sign out
                  </Text>
                </Link>
              </Box>
            </Stack>
            <Stack bgColor="white" w="100%" marginLeft="250px" marginTop="57px">
              <Flex
                bgColor="white"
                shadow="sm"
                p={2}
                position="fixed"
                left="250px"
                top="0"
                right="0"
                justify="space-between"
                align="center"
              >
                <Stack marginRight="auto">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<Icon as={FaSearch} />}
                    />
                    <Input placeholder="Search" />
                  </InputGroup>
                </Stack>
                <Flex direction="row" align="center">
                  <Icon as={FaBell} w={6} h={6} />
                  <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      <Avatar
                        size="sm"
                        name="Ashraf Latif"
                        src="https://i.pravatar.cc/300"
                      />{" "}
                      <Text>Ashraf Latif</Text>
                    </MenuButton>
                    <MenuList>
                      <CUIMenuItem>Profile</CUIMenuItem>
                      <CUIMenuItem>Account</CUIMenuItem>
                      <CUIMenuItem>Sign out</CUIMenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              </Flex>
              <Box w="lg" p={8}>
                <Outlet />
              </Box>
              <Footer user={user} />
            </Stack>
          </Flex>
        </Container>
      ) : (
        <Navigate to="/login" />
      )}
    </Layout>
  );
};

export default PrivateRoute;
