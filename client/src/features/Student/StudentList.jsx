import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Modal from "../../UI/Modal";
import StudentForm from "../../UI/form/StudentForm";
import Button from "../../UI/Button/Button";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";

import img from "../../../public/default.jpg";
import { ClipLoader } from "react-spinners";

import { useQuery } from "@tanstack/react-query";
import { getStudents } from "../../services/apiStudents";

function StudentList() {
  const { data, isLoading } = useQuery({
    queryFn: getStudents,
    queryKey: ["students"],
  });

  if (isLoading)
    return <ClipLoader loading={isLoading} color="#fff" size={500} />;

  console.log(data);
  return (
    <Fragment>
      <h1>Student List</h1>
      <StyledListHead>
        <div>Student Avatar</div>
        <div>Student Name</div>
        <Modal>
          <Modal.Open>
            <Button size="small" variation="add">
              Add New Student
            </Button>
          </Modal.Open>
          <Modal.Window>
            <StudentForm />
          </Modal.Window>
        </Modal>
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
