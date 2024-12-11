import { Stack, Card, Button, Input, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field"
import { Alert } from "@/components/ui/alert"
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { AxiosResponse } from "axios";
import { AccountFormProps } from "@/components/custom/types";
import { PasswordInput } from "@/components/ui/password-input";


export function RegisterForm({ api, navigate }: AccountFormProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")

  // errors alert 
  const [invalidConfirmPassword, setInvalidConfirmPassword] = useState(false)
  const [invalidUsername, setInvalidUsername] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidBio, setInvalidBio] = useState(false)

  const data = {
    username: username,
    password: password,
    email: email,
    bio: bio
  }

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    // reset errors alert
    setInvalidUsername(false)
    setInvalidPassword(false)
    setInvalidEmail(false)
    setInvalidBio(false)

    // refresh validation to be sure that the password matches
    setInvalidConfirmPassword(confirmPassword !== password)

    if (!invalidConfirmPassword) {
      api.post('users/registration/', data).then(handleResponse)
    }
  }

  const handleResponse = (response: AxiosResponse | void) => {
    if (response) {
      if (response.data.token) { // user registered
        // TODO changer le stockage des tokens par un moyen plus securise
        const token = response.data.token
        localStorage.setItem("travelplanner-token", token)

        navigate('/dashboard/')
      } else { // error
        if (response.data.username) {
          setInvalidUsername(response.data.username)
        }
        if (response.data.password) {
          setInvalidPassword(response.data.password)
        }
        if (response.data.email) {
          setInvalidEmail(response.data.email)
        }
        if (response.data.bio) {
          setInvalidBio(response.data.bio)
        }
      }
    }
  }

  const handleChangeConfirmPassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    setConfirmPassword(e.target.value)
    setInvalidConfirmPassword(e.target.value !== password)
  }
  return (
    <Card.Root maxW="sm">
      <Card.Header>
        <Card.Title>Create account</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="full">
          <Field label="Username" required>
            {invalidUsername &&
              <Alert status="error" title={invalidUsername} />
            }
            <Input value={username} onChange={(e) => setUsername(e.target.value)} />
          </Field>
          <Field label="Password" required>
            {invalidPassword &&
              <Alert status="error" title={invalidPassword} />
            }
            <PasswordInput value={password} onChange={(e) => { setPassword(e.target.value); setConfirmPassword("") }} />
          </Field>
          <Field label="Confirm password" required>
            {invalidConfirmPassword &&
              <Alert status="error" title="Passwords do not match" />
            }
            <PasswordInput value={confirmPassword} onChange={handleChangeConfirmPassword} />
          </Field>
          <Field label="Email" required>
            {invalidEmail &&
              <Alert status="error" title={invalidEmail} />
            }
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Field>
          <Field label="Bio">
            {invalidBio &&
              <Alert status="error" title={invalidBio} />
            }
            <Textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </Field>
        </Stack>
      </Card.Body>
      <Card.Footer justifyContent="flex-end">
        <Button onClick={handleSubmit} variant="solid">Register</Button>
      </Card.Footer>
    </Card.Root>
  )
}