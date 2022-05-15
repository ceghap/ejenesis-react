import { Image } from "@chakra-ui/react";

const Logo = ({ ...props }) => {
  return (
    <Image
      {...props}
      src={` ${
        props.colorMode === "white" ? "/ejenesis-white.svg" : "/ejenesis.svg"
      }`}
    />
  );
};

export default Logo;
