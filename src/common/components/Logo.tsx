import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Logo = ({ ...props }) => {
  return (
    <Box {...props}>
      <Text fontSize="xl" fontWeight="bold">
        Ejenesis
      </Text>
    </Box>
  );
};

export default Logo;
