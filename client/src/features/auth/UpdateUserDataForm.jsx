import Button from "../../UI/Button";
import FormElement from "../../UI/form/FormElement";
import FormLayout from "../../UI/form/FormLayout";
import classes from "./UpdateUserDataForm.module.css";

function UpdateUserDataForm() {
  //prettier-ignore
  const { container, input, buttonContainer, cancelButton, updateButton } = classes;

  return (
    <div className={container}>
      <h4>Update User Data</h4>
      <FormLayout>
        <FormElement>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className={input}
          />
        </FormElement>
        <FormElement>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            placeholder="John Doe"
            className={input}
          />
        </FormElement>
        <FormElement>
          <label htmlFor="avatar">Avatar Image</label>
          <input type="file" id="avatar" accept="image/*" className={input} />
        </FormElement>
        <div className={buttonContainer}>
          <Button size="small" variation="cancel">
            Cancel
          </Button>
          <Button size="small" variation="update">
            Update Account
          </Button>
        </div>
      </FormLayout>
    </div>
  );
}

export default UpdateUserDataForm;
