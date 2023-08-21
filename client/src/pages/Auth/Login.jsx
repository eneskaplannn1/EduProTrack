import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import FormElement from "../../UI/form/FormElement";
import StyledFormLayout from "../../UI/form/FormLayout";

import classes from "./Login.module.css";

import { HandleLogin } from "../../services/apiAuth";

import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const DeveloperCredentials = {
  email: "daniel_johnson@example.co",
  password: "pass1234",
};

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { register, formState, handleSubmit, reset } = useForm({
    defaultValues: DeveloperCredentials,
  });

  const { errors } = formState;

  const { mutate, isLoading: isLoggingIn } = useMutation({
    mutationFn: HandleLogin,
    queryKey: ["user"],
    onSuccess: (data) => {
      login(data.data.data.user);
      toast.success("Logged in successfully!");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  function onSubmitForm(data) {
    if (!data) return;
    mutate(data);
  }

  return (
    <div className={classes.container}>
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
    </div>
  );
}

export default Login;
