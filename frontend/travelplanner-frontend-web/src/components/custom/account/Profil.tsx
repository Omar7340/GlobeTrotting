import { Bleed, Center, Text } from "@chakra-ui/react";
import { GeneralProps } from "../types";

export default function Profil({ api, ...props } : GeneralProps) {

  return (
    <Bleed {...props}>
      <Center>
        <Text>A faire</Text>
      </Center>
    </Bleed>
  )
}