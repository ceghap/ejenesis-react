import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Text } from "@chakra-ui/react";

interface MenuItemProps {
  to: string;
  children: React.ReactNode;
  isLast?: boolean;
}
const MenuItem: React.FC<MenuItemProps> = ({
  children,
  isLast,
  to = "/",
  ...rest
}) => {
  return (
    <Link as={RouterLink} to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

export default MenuItem;
