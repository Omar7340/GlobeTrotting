import { Bleed, Center } from "@chakra-ui/react";
import { LoginForm } from "@/components/custom/account/LoginForm";
import { useNavigate } from "react-router";
import { GeneralProps } from "@/components/custom/types";

export default function Login({api, ...props} : GeneralProps) {
  const navigate = useNavigate()

  return (
    <Bleed {...props}>
      <Center>
        <LoginForm api={api} navigate={navigate} />
      </Center>
    </Bleed>
  )
}