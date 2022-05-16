import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface NavbarContainerProps {
  children: React.ReactNode;
}
const NavbarContainer: React.FC<NavbarContainerProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      boxShadow="sm"
      bg={useColorModeValue("blue.400", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavbarContainer;
