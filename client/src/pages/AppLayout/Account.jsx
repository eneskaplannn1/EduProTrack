import UpdateUserDataForm from "../../features/auth/UpdateUserDataForm";
import UpdateUserPassword from "../../features/auth/UpdateUserPassword";

import { useAuth } from "../../context/AuthProvider";

import { Fragment } from "react";

function Account() {
  const { user, updateUser } = useAuth();

  return (
    <Fragment>
      <h2>Update your account</h2>
      <UpdateUserDataForm user={user} updateUser={updateUser} />
      <UpdateUserPassword />
    </Fragment>
  );
}

export default Account;
