import React from "react";
import {
  Box,
  Container,
  Text,
  Stack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import SocialButton from "./SocialButton";
import Logo from "./Logo";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© 2022 Ejenesis. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <Icon as={FaTwitter} />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <Icon as={FaYoutube} />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <Icon as={FaInstagram} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
