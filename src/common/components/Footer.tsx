import { Box, Container, Icon, Stack, Text } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import PropTypes, { InferProps } from "prop-types";

import Logo from "./Logo";
import SocialButton from "./SocialButton";

const propTypes = {
  user: PropTypes.bool,
  rest: PropTypes.object,
};

type FooterProps = InferProps<typeof propTypes>;

const Footer = ({ user, ...rest }: FooterProps) => {
  return (
    <Box
      bg="white"
      borderTop="1px"
      borderColor="gray.100"
      position="fixed"
      left={`${user ? "250px" : "0"}`}
      bottom="0"
      right="0"
      {...rest}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={2}
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

Footer.protoTypes = propTypes;

Footer.defaultProps = {
  user: false,
};

export default Footer;
