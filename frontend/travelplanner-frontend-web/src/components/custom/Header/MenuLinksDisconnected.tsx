import MenuItem from '@/components/custom/header/MenuItem'
import { Box, Stack, Button } from '@chakra-ui/react';

interface MenuLinksDisconnectedProps {
  isOpen: boolean
}

export default function MenuLinksDisconnected({ isOpen }: MenuLinksDisconnectedProps) {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/login">
          <Button
            size="sm"
            rounded="md"
            variant="solid"
          >
            Login
          </Button>
        </MenuItem>
        <MenuItem to="/register">
          <Button
            size="sm"
            rounded="md"
            variant="subtle"
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};