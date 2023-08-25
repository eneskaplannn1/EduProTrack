import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import FormElement from "../../UI/form/FormElement";
import StyledFormLayout from "../../UI/form/FormLayout";

import classes from "./Login.module.css";
import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { HandleLogin } from "../../services/apiAuth";
import { useAuth } from "../../context/AuthProvider";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { user } = useAuth();
  if (user) navigate("/");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "olivia_wilson@example.co",
      password: "pass1234",
    },
  });

  const { mutate, isLoading: isLoggingIn } = useMutation({
    mutationFn: HandleLogin,
    queryKey: ["user"],
    onSuccess: (data) => {
      if (!data) return;
      login(data?.data?.data?.user, data?.data?.token);
      toast.success("Logged in successfully!");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmitForm(data) {
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
