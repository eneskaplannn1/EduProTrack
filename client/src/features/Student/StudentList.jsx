import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Modal from "../../UI/Modal";
import StudentForm from "../../UI/form/StudentForm";
import Button from "../../UI/Button/Button";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";

import img1 from "../Screenshot_6.png";
import { useQuery } from "@tanstack/react-query";
import { getAll } from "../../services/requestHelpers";

function StudentList() {
  const { data, isLoading } = useQuery({
    queryFn: () => getAll("students"),
    queryKey: ["Students"],
  });

  if (isLoading) return <></>;

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
            <img src={img1} />
            <div>{student.name}</div>
            <NavLink to={`/students/${student._id}`}>See details</NavLink>
          </StyledListElement>
        );
      })}
    </Fragment>
  );
}

export default StudentList;
