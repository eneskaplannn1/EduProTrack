import classes from "./UpdateUserDataForm.module.css";

function UpdateUserDataForm() {
  //prettier-ignore
  const { container, form, formElement, input, buttonContainer, cancelButton, updateButton } = classes;

  return (
    <div className={container}>
      <h4>Update User Data</h4>
      <form className={form}>
        <div className={formElement}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className={input}
          />
        </div>
        <div className={formElement}>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            placeholder="John Doe"
            className={input}
          />
        </div>
        <div className={formElement}>
          <label htmlFor="avatar">Avatar Image</label>
          <input type="file" id="avatar" accept="image/*" className={input} />
        </div>
        <div className={buttonContainer}>
          <button className={cancelButton}>Cancel</button>
          <button className={updateButton}>Update Account</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateUserDataForm;
