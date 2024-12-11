import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Text, Spinner, HStack } from "@chakra-ui/react"


export default function Disconnect() {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem("travelplanner-token")
    navigate("/login")
  })

  return (
    <HStack>
      <Text>Disconnecting... </Text>
      <Spinner />
    </HStack>
  )
}