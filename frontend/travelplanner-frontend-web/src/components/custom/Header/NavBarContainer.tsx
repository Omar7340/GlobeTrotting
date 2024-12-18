import { Flex } from "@chakra-ui/react"

interface NavBarContainerProps {
  children : JSX.Element | JSX.Element[]
}

const NavBarContainer = ({ children , ...props} : NavBarContainerProps) => {
  return (
    <Flex
      h="10vh"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={2}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBarContainer