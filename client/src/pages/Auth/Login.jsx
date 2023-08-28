import { styled } from "styled-components";

import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import FormElement from "../../UI/form/FormElement";
import StyledFormLayout from "../../UI/form/FormLayout";

import useLogin from "../../hooks/useLogin";

const StyledContainer = styled.div`
  background-color: #18212f;
  color: #fff;

  width: 80vw;
  max-width: 80vw;
  min-height: 90vh;
  margin: 1rem auto;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
`;

function Login() {
  const {
    register,
    errors,
    handleSubmit,
    onSubmitForm,
    isLoading: isLoggingIn,
  } = useLogin();

  return (
    <StyledContainer>
      <h2>Login Page </h2>
      <StyledFormLayout onSubmit={handleSubmit(onSubmitForm)}>
        <FormElement>
          <label htmlFor="email">Email:</label>
          <input
            disabled={isLoggingIn}
            type="email"
            id="email"
            {...register("email", { required: "Enter your email" })}
          />
          {errors?.email && <div>{errors.email.message}</div>}
        </FormElement>
        <FormElement>
          <label htmlFor="password">Password:</label>
          <input
            disabled={isLoggingIn}
            type="password"
            id="password"
            {...register("password", { required: "Enter your password" })}
          />
          {errors?.password && <div>{errors.password.message}</div>}
        </FormElement>
        <ButtonContainer>
          <Button disabled={isLoggingIn} type="small" variation="login">
            {isLoggingIn ? "Logging In" : "Login"}
          </Button>
        </ButtonContainer>
        {/* <div className={classes.signupForgot}>
          <a className={classes.signupLink} href={`/signup`}>
            Sign up
          </a>
          <a className={classes.forgotPassword} href="/forgotPassword">
            Forgot Password?
          </a>
        </div> */}
        {/* <button className={classes.loginButton}>Login</button> */}
      </StyledFormLayout>
    </StyledContainer>
  );
}

export default Login;
