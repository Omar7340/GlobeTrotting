import MenuItem from '@/components/custom/Header/MenuItem'
import { Box, Stack, Button } from '@chakra-ui/react';

interface MenuLinksProps {
  isOpen: boolean
}

export default function MenuLinks({ isOpen }: MenuLinksProps) {
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
        <MenuItem to="/register">
          <Button
            size="sm"
            rounded="md"
          >
            Create Account
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};