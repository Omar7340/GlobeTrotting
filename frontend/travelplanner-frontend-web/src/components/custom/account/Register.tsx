import { Bleed, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { GeneralProps } from "@/components/custom/types";
import { RegisterForm } from "@/components/custom/account/RegisterForm";

export default function Register({api, ...props} : GeneralProps) {
  const navigate = useNavigate()

  return (
    <Bleed {...props}>
      <Center>
        <RegisterForm api={api} navigate={navigate} />
      </Center>
    </Bleed>
  )
}