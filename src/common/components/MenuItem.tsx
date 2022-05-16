import { Link, Text } from "@chakra-ui/react";

import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface MenuItemProps {
  to: string;
  children: React.ReactNode;
  isLast?: boolean;
  [x: string]: any;
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
