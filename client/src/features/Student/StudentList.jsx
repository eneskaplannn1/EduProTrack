import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Modal from "../../UI/Modal";
import StudentForm from "../../UI/form/StudentForm";
import Button from "../../UI/Button/Button";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";

import img1 from "../Screenshot_6.png";

function StudentList() {
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
      <StyledListElement>
        <img src={img1} />
        <div>Enes Kaplan</div>
        <NavLink to="/students/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <img src={img1} />
        <div>Ömer Kaplan</div>
        <NavLink to="/students/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <img src={img1} />
        <div>Berkay Acer</div>
        <NavLink to="/students/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <img src={img1} />
        <div>Sülo çoban</div>
        <NavLink to="/students/123123213">See details</NavLink>
      </StyledListElement>
    </Fragment>
  );
}

export default StudentList;
