import MenuItem from '@/components/custom/header/MenuItem'
import { Box, Stack, Button, IconButton } from '@chakra-ui/react'
import { Avatar, AvatarGroup } from "@/components/ui/avatar"
import { FaSignOutAlt } from "react-icons/fa";


interface MenuLinksConnectedProps {
  isOpen: boolean
}

export default function MenuLinksConnected({ isOpen }: MenuLinksConnectedProps) {
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
        <MenuItem to="/profil">
          <AvatarGroup>
            <Avatar as={Button} />
          </AvatarGroup>
        </MenuItem>
        <MenuItem to="/disconnect">
          <IconButton variant="ghost" aria-label="Disconnect">
            <FaSignOutAlt />
          </IconButton>

        </MenuItem>
      </Stack>
    </Box>
  );
};