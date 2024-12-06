import { Link, Text } from "@chakra-ui/react";

interface MenuItemProps {
  children : JSX.Element | string,
  to : string
}

export default function MenuItem ({ children, to = "/" } : MenuItemProps) {
  return (
    <Link href={to}>
      <Text display="block">
        {children}
      </Text>
    </Link>
  );
};