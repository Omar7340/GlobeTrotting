import { Bleed, Center } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm";
import { AxiosInstance } from "axios";
import { useNavigate } from "react-router";

interface LoginProps {
  api: AxiosInstance,
  colorPalette : string
}

export function Login({api, ...props} : LoginProps) {
  const navigate = useNavigate()

  return (
    <Bleed {...props}>
      <Center>
        <LoginForm api={api} navigate={navigate} />
      </Center>
    </Bleed>
  )
}