import { Box, Image } from "@chakra-ui/react";
import logoWhite from '@/assets/logo_cat_white.svg'

export default function Logo(props : any) {
  return (
    <Box {...props}>
      <Image src={logoWhite}/>
    </Box>
  );
}