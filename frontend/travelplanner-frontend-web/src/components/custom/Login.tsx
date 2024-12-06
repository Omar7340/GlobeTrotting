import { Bleed, Center } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";

export function Login({...props}) {
  return (
    <Bleed {...props}>
      <Center>
        <LoginForm />
      </Center>
    </Bleed>
  )
}