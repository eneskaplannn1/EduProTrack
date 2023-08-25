import { styled } from "styled-components";

import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import FormElement from "../../UI/form/FormElement";
import StyledFormLayout from "../../UI/form/FormLayout";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../../services/requestHelpers";
import { toast } from "react-hot-toast";

const StyledDiv = styled.div`
  margin: 1rem 0;

  h4 {
    margin-bottom: 1rem;
  }
`;
//prettier-ignore
function UpdatePasswordForm() {
  const {handleSubmit,register,formState: { errors }} = useForm();

  const { mutate: updateUserPassword, isLoading: isUpdating } = useMutation({
    mutationFn: updatePassword,
    mutationKey:["updatePass"],
    onError:(err)=>toast.error(err.message),
    onSuccess:()=>toast.success("Updated password successfully")
  });

  function handleSubmitForm(data) {
    const {password,newPassword}=data
    updateUserPassword({password,newPassword});
  }

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
            {...register("newPassword", { required: "Enter your email" })}
          />
          {errors?.newPassword?.message && <div>{errors.newPassword.message}</div>}
        </FormElement>
        <FormElement>
          <label htmlFor="confirmPass">Confirm password</label>
          <input
            type="password"
            id="confirmPass"
            {...register("confirmPass", { required: "Enter your email" })}
          />
          {errors?.confirmPass?.message && <div>{errors.confirmPass.message}</div>}
        </FormElement>
        <ButtonContainer>
          <Button size="small" variation="cancel">
            Cancel
          </Button>
          <Button size="small" variation="update">
            {isUpdating ? "Updating password" : "Update Password"}
          </Button>
        </ButtonContainer>
      </StyledFormLayout>
    </StyledDiv>
  );
}

export default UpdatePasswordForm;
