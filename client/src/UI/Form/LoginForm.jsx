import Button from "../utils/Button";
import Heading from "../utils/Heading";
import Input from "../utils/Input";
import Form from "./Form";
import FormRowVertical from "./FormRowVertical";

function LoginForm() {
  return (
    <Form>
      <FormRowVertical label="Email Address">
        <Input placeholder="Enter your email" type="email" id="email" />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input placeholder="●●●●●●●●●" type="password" id="password" />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="medium">Student sign in</Button>
        <Heading as="h5">or</Heading>
        <Button variation="secondary" size="medium">
          Teacher sign in
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
