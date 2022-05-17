import { Flex, useColorModeValue } from "@chakra-ui/react";

import React from "react";

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
      p={4}
      boxShadow="sm"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavbarContainer;
