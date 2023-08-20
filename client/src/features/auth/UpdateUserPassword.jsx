import Button from "../../UI/Button";
import FormElement from "../../UI/form/FormElement";
import FormLayout from "../../UI/form/FormLayout";
import classes from "./UpdateUserDataForm.module.css";

function UpdatePasswordForm() {
  //prettier-ignore
  const { container, input, buttonContainer, cancelButton, updateButton } = classes;

  return (
    <div className={container}>
      <h4>Update Password</h4>
      <FormLayout>
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
        <div className={buttonContainer}>
          <Button size="small" variation="cancel">
            Cancel
          </Button>
          <Button size="small" variation="update">
            Update Password
          </Button>
        </div>
      </FormLayout>
    </div>
  );
}

export default UpdatePasswordForm;
