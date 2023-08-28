import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Button from "../../UI/Button/Button";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";

import img from "../../../public/default.jpg";
import { ClipLoader } from "react-spinners";

import { useQuery } from "@tanstack/react-query";
import { getTeachersStudent } from "../../services/apiStudents";
import { useAuth } from "../../context/AuthProvider";

function StudentList() {
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryFn: () => getTeachersStudent(user._id),
    queryKey: ["students"],
  });

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  // console.log(data);
  return (
    <Fragment>
      <h1>{user.name}&#39;s students list</h1>
      <StyledListHead>
        <div>Student Avatar</div>
        <div>Student Name</div>
        <NavLink to={`/classes/${user.class}`}>
          <Button>Add Student</Button>
        </NavLink>
      </StyledListHead>
      {data.data.doc.map((student) => {
        return (
          <StyledListElement key={student._id}>
            <img src={img} />
            <div>{student.name}</div>
            <NavLink to={`/students/${student._id}`}>See details</NavLink>
          </StyledListElement>
        );
      })}
    </Fragment>
  );
}

export default StudentList;
