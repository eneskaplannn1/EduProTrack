import { styled } from "styled-components";

import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import FormElement from "../../UI/form/FormElement";
import StyledFormLayout from "../../UI/form/FormLayout";

import useUpdateUserPassword from "../../hooks/useUpdateUserPassword";

const StyledDiv = styled.div`
  margin: 1rem 0;

  h4 {
    margin-bottom: 1rem;
  }
`;
function UpdatePasswordForm() {
  const {
    handleSubmitForm,
    isUpdating,
    getValues,
    errors,
    register,
    handleSubmit,
  } = useUpdateUserPassword();

  return (
    <StyledDiv>
      <h4>Update Password</h4>
      <StyledFormLayout onSubmit={handleSubmit(handleSubmitForm)}>
        <FormElement>
          <label htmlFor="password">Old Password </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Enter your email" })}
          />
          {errors?.password?.message && <div>{errors.password.message}</div>}
        </FormElement>
        <FormElement>
          <label htmlFor="newPassword">New password </label>
          <input
            type="password"
            id="newPassword"
            {...register("newPassword", {
              required: "Enter your email",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
              validate: (value) =>
                value === getValues().confirmPass || "Passwords do not match",
            })}
          />
          {errors?.newPassword?.message && (
            <div>{errors.newPassword.message}</div>
          )}
        </FormElement>
        <FormElement>
          <label htmlFor="confirmPass">Confirm password</label>
          <input
            type="password"
            id="confirmPass"
            {...register("confirmPass", {
              required: "Enter your email",
              validate: (value) =>
                value === getValues().newPassword || "Passwords do not match",
            })}
          />
          {errors?.confirmPass?.message && (
            <div>{errors.confirmPass.message}</div>
          )}
        </FormElement>
        <ButtonContainer>
          <Button size="small" variation="update">
            {isUpdating ? "Updating password" : "Update Password"}
          </Button>
        </ButtonContainer>
      </StyledFormLayout>
    </StyledDiv>
  );
}

export default UpdatePasswordForm;
