import { Fragment } from "react";

import UpdateUserDataForm from "../../features/auth/UpdateUserDataForm";
import UpdateUserPassword from "../../features/auth/UpdateUserPassword";
import { useQuery } from "@tanstack/react-query";
import { getOne } from "../../services/requestHelpers";
import { useAuth } from "../../context/AuthProvider";

function Account() {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryFn: () =>
      getOne(`${user.role === "Student" ? "students" : "teachers"}`, user._id),
    queryKey: [
      `${user.role === "Student" ? "students" : "teachers"}`,
      user._id,
    ],
  });

  return (
    <Fragment>
      <h2>Update your account</h2>
      <UpdateUserDataForm isLoading={isLoading} user={user} data={data} />
      <UpdateUserPassword />
    </Fragment>
  );
}

export default Account;
