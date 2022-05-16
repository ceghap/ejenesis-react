import { Image } from "@chakra-ui/react";

const Logo = ({ ...props }) => {
  return (
    <Image
      {...props}
      src={` ${props.white ? "/ejenesis-white.svg" : "/ejenesis.svg"}`}
    />
  );
};

Logo.defaultProps = {
  white: false,
};

export default Logo;
