import {
  Box,
  Container,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import Logo from "./Logo";
import SocialButton from "./SocialButton";

const Footer = ({ user }: { user: boolean }) => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      position="fixed"
      left={`${user ? "250px" : "0"}`}
      bottom="0"
      right="0"
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
        <Box w="100px">
          <Logo w="100%" />
        </Box>
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

Footer.defaultProps = {
  user: false,
};

export default Footer;
