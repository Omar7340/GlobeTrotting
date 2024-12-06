import Button from "./form-elements/Button";
import { Input } from "./form-elements/Input";
// Card
// Title
// input
// input
// forgot password
// button
// not a member

export function Login() {
  return (
    <form>
      <Input name="username" type="text"></Input>
      <Input name="password" type="text"></Input>
      <div>
        <p>
          Forgot password
        </p>
      </div>
      <Button label="Sign in"/>
    </form>
  )
}