import { styled } from "styled-components";
import Heading from "../../UI/utils/Heading";

import LoginForm from "../../UI/Form/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 25rem 1fr;
  align-content: center;
  justify-content: center;
  gap: 0.4rem;
  background-color: var(--color-grey-50);
  margin: 0 5rem;
`;

function Login() {
  return (
    <LoginLayout>
      <div>
        <Heading as="h2">Welcome back</Heading>
        <Heading as="h4">Welcome back! please enter your details.</Heading>
        <LoginForm />
        
      </div>
    </LoginLayout>
  );
}

{
  /* <Row>
        <Row type="horizontal">
          <Heading as="h1">EduProTrack</Heading>

          <Heading as="h2">Inputs</Heading>
        </Row>
        <Row>
          <Input placeholder="username" />
          <Input placeholder="password" />
        </Row>

        <Row>
          <Heading as="h3">Login button</Heading>
          <Button size="large">Log in</Button>
        </Row>
      </Row> */
}

export default Login;
