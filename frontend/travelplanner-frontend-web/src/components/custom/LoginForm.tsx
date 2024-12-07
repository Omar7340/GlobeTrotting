import { Stack, Card, Button, Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field"
import { MouseEventHandler, useState } from "react";
import api from '@/misc/api.json'

export function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const data = {
    username : username,
    password : password,
  }

  const handleSubmit : MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    
    fetch(api.host + 'users/login/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
     }).then((e) => console.log(e));
  }

  return (
    <Card.Root maxW="sm">
      <Card.Header>
        <Card.Title>Login</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="full">
          <Field label="Username">
            <Input value={username} onChange={(e) => setUsername(e.target.value)}/>
          </Field>
          <Field label="Password">
            <Input value={password} onChange={(e) => setPassword(e.target.value)}/>
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