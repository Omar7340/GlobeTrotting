import { Stack, Card, Button, Input } from "@chakra-ui/react";
import { Field } from "@/components/ui/field"

export function LoginForm() {
  return (
    <Card.Root maxW="sm">
      <Card.Header>
        <Card.Title>Login</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="full">
          <Field label="Username">
            <Input />
          </Field>
          <Field label="Password">
            <Input />
          </Field>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button variant="outline">Lost password?</Button>
        <Button variant="solid">Sign in</Button>
      </Card.Footer>
    </Card.Root>
  )
}