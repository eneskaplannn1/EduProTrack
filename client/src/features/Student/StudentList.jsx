import { NavLink } from "react-router-dom";

import classes from "./StudentList.module.css";

import img1 from "../Screenshot_6.png";
import Modal from "../../UI/Modal";
import StudentForm from "../../UI/form/StudentForm";
import Button from "../../UI/Button";

function StudentList() {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <div>Students List</div>
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
      </div>
      <div className={classes.student}>
        <img src={img1} />
        <div>Enes Kaplan</div>
        <NavLink to="/students/123123213">See details</NavLink>
      </div>
      <div className={classes.student}>
        <img src={img1} />
        <div>Ömer Kaplan</div>
        <NavLink to="/students/123123213">See details</NavLink>
      </div>
      <div className={classes.student}>
        <img src={img1} />
        <div>Berkay Acer</div>
        <NavLink to="/students/123123213">See details</NavLink>
      </div>
      <div className={classes.student}>
        <img src={img1} />
        <div>Sülo çoban</div>
        <NavLink to="/students/123123213">See details</NavLink>
      </div>
      <div className={classes.student}>
        <img src={img1} />
        <div>Yağiz Öztürk</div>
        <NavLink to="/students/123123213">See details</NavLink>
      </div>
    </div>
  );
}

export default StudentList;
