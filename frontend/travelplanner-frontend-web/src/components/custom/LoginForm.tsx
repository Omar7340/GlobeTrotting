import { Stack, Card, Button, Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field"
import { Alert } from "@/components/ui/alert"
import { MouseEventHandler, useState } from "react";
import { AxiosInstance, AxiosResponse } from "axios";
import { NavigateFunction } from "react-router";

interface LoginFormProps {
  api: AxiosInstance,
  navigate: NavigateFunction
}

export function LoginForm({ api, navigate } : LoginFormProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [invalidCred, setInvalidCred] = useState(false)

  const data = {
    username: username,
    password: password,
  }

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setInvalidCred(false)
    api.post('users/login/', data).catch((e) => setInvalidCred(true)).then(handleResponse)
  }

  const handleResponse = (response : AxiosResponse | void) => {
    if(response){
      setInvalidCred(false)

      // TODO changer le stockage des tokens par un moyen plus securise
      const token = response.data.token
      localStorage.setItem("travelplanner-token", token)

      navigate('/dashboard/')
    } else {
      setInvalidCred(true)
    }
  }

  return (
    <Card.Root maxW="sm">
      <Card.Header>
        <Card.Title>Login</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="full">
          { invalidCred &&
          <Alert status="error" title="Invalid credentials">
            Your credentials are incorrect. Do you have an account?
          </Alert>
          }
          <Field label="Username">
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
          </Field>
          <Field label="Password">
            <Input value={password} onChange={(e) => setPassword(e.target.value)} />
          </Field>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">Lost password?</Button>
        <Button onClick={handleSubmit} variant="solid">Sign in</Button>
      </Card.Footer>
    </Card.Root>
  )
}