import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import FormElement from "../../UI/form/FormElement";
import StyledFormLayout from "../../UI/form/FormLayout";
import classes from "./UpdateUserDataForm.module.css";

function UpdatePasswordForm() {
  //prettier-ignore
  const { container, input } = classes;

  return (
    <div className={container}>
      <h4>Update Password</h4>
      <StyledFormLayout>
        <FormElement>
          <label htmlFor="password">New password (min 8 chars)</label>
          <input type="password" id="password" className={input} />
        </FormElement>
        <FormElement>
          <label htmlFor="confirmPass">Confirm password</label>
          <input
            type="password"
            id="confirmPass"
            placeholder=""
            className={input}
          />
        </FormElement>
        <ButtonContainer>
          <Button size="small" variation="cancel">
            Cancel
          </Button>
          <Button size="small" variation="update">
            Update Password
          </Button>
        </ButtonContainer>
      </StyledFormLayout>
    </div>
  );
}

export default UpdatePasswordForm;
