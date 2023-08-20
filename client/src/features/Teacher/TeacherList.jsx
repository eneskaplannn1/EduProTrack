import { NavLink } from "react-router-dom";

import classes from "./TeacherList.module.css";

import img1 from "../Screenshot_6.png";

import Modal from "../../UI/Modal";
import TeacherForm from "../../UI/form/TeacherForm";
import Button from "../../UI/Button";

function TeacherList() {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <div>Teachers List</div>
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
      </div>
      <div className={classes.teacher}>
        <img src={img1} />
        <div>Enes Kaplan</div>
        <NavLink to="/teachers/123123213">See details</NavLink>
      </div>
      <div className={classes.teacher}>
        <img src={img1} />
        <div>Ömer Kaplan</div>
        <NavLink to="/teachers/123123213">See details</NavLink>
      </div>
      <div className={classes.teacher}>
        <img src={img1} />
        <div>Berkay Acer</div>
        <NavLink to="/teachers/123123213">See details</NavLink>
      </div>
      <div className={classes.teacher}>
        <img src={img1} />
        <div>Sülo çoban</div>
        <NavLink to="/teachers/123123213">See details</NavLink>
      </div>
      <div className={classes.teacher}>
        <img src={img1} />
        <div>Yağiz Öztürk</div>
        <NavLink to="/teachers/123123213">See details</NavLink>
      </div>
    </div>
  );
}

export default TeacherList;
