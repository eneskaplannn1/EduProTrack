import classes from "./UpdateUserDataForm.module.css";

function UpdatePasswordForm() {
  //prettier-ignore
  const { container, form, formElement, input, buttonContainer, cancelButton, updateButton } = classes;

  return (
    <div className={container}>
      <h4>Update Password</h4>
      <form className={form}>
        <div className={formElement}>
          <label htmlFor="password">New password (min 8 chars)</label>
          <input type="password" id="password" className={input} />
        </div>
        <div className={formElement}>
          <label htmlFor="confirmPass">Confirm password</label>
          <input
            type="password"
            id="confirmPass"
            placeholder=""
            className={input}
          />
        </div>
        <div className={buttonContainer}>
          <button className={cancelButton}>Cancel</button>
          <button className={updateButton}>Update Password</button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePasswordForm;
