  import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Button from "../../UI/Button/Button";
import StyledListHead from "../../UI/List/ListHead";

import { ClipLoader } from "react-spinners";

import { useQuery } from "@tanstack/react-query";
import { getStudents, getTeachersStudent } from "../../services/apiStudents";
import StudentsTable from "./StudentTable";

function StudentList({ user }) {
  const { data, isLoading } = useQuery({
    queryFn:
      user.role !== "Admin" ? () => getTeachersStudent(user._id) : getStudents,
    queryKey: ["students"],
  });

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  return (
    <Fragment>
      <StyledListHead variation="student">
        <li>Student Avatar</li>
        <li>Student Name</li>
        <NavLink to={`/classes/${user.class}`}>
          <Button>Add Student</Button>
        </NavLink>
      </StyledListHead>
      <StudentsTable students={data?.data?.doc} />
    </Fragment>
  );
}

export default StudentList;
