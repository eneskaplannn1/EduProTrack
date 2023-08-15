import UpdateUserDataForm from "../../features/auth/UpdateUserDataForm";
import UpdateUserPassword from "../../features/auth/UpdateUserPassword";

function Account() {
  return (
    <>
      <h2>Update your account</h2>

      <UpdateUserDataForm />
      <UpdateUserPassword />
    </>
  );
}

export default Account;
