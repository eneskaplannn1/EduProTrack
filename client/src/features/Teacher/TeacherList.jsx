import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import img1 from "../Screenshot_6.png";

import TeacherForm from "../../UI/form/TeacherForm";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button/Button";
import StyledListElement from "../../UI/List/ListElement";
import StyledListHead from "../../UI/List/ListHead";

function TeacherList() {
  return (
    <Fragment>
      <h1>Teacher List</h1>
      <StyledListHead>
        <div>Teacher Avatar</div>
        <div>Teacher Name</div>
        <Modal>
          <Modal.Open>
            <Button size="small" variation="add">
              Add New Teacher
            </Button>
          </Modal.Open>
          <Modal.Window>
            <TeacherForm />
          </Modal.Window>
        </Modal>
      </StyledListHead>
      <StyledListElement>
        <img src={img1} />
        <div>Enes Kaplan</div>
        <NavLink to="/teachers/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <img src={img1} />
        <div>Ömer Kaplan</div>
        <NavLink to="/teachers/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <img src={img1} />
        <div>Berkay Acer</div>
        <NavLink to="/teachers/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <img src={img1} />
        <div>Sülo çoban</div>
        <NavLink to="/teachers/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <img src={img1} />
        <div>Yağiz Öztürk</div>
        <NavLink to="/teachers/123123213">See details</NavLink>
      </StyledListElement>
    </Fragment>
  );
}

export default TeacherList;
