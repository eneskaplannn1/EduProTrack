import { NavLink } from "react-router-dom";

import classes from "./HomeworkList.module.css";
import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";
import Button from "../../UI/Button";

function HomeworkList() {
  return (
    <div className={classes.container}>
      <h1>Homework List</h1>
      <div className={classes.head}>
        <div>Subject</div>
        <div>Topic</div>
        <Modal>
          <Modal.Open>
            <Button size="small" variation="add">
              Add New Homework
            </Button>
          </Modal.Open>
          <Modal.Window>
            <HomeworkForm />
          </Modal.Window>
        </Modal>
      </div>
      <div className={classes.homework}>
        <div>Science</div>
        <div>Laws of Motion Experiment</div>
        <NavLink to="/homeworks/123123213">See details</NavLink>
      </div>
      <div className={classes.homework}>
        <div>English</div>
        <div>Literary Exploration</div>
        <NavLink to="/homeworks/123123213">See details</NavLink>
      </div>
      <div className={classes.homework}>
        <div>Physics</div>
        <div>Projectile Motion Problems</div>
        <NavLink to="/homeworks/123123213">See details</NavLink>
      </div>
      <div className={classes.homework}>
        <div>Geography</div>
        <div>Continents and Countries</div>
        <NavLink to="/homeworks/123123213">See details</NavLink>
      </div>
      <div className={classes.homework}>
        <div>Biology</div>
        <div>Human Anatomy Report</div>
        <NavLink to="/homeworks/123123213">See details</NavLink>
      </div>
    </div>
  );
}

export default HomeworkList;
