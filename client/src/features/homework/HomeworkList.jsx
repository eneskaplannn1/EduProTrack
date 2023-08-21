import { NavLink } from "react-router-dom";

import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";
import Button from "../../UI/Button/Button";
import StyledListHead from "../../UI/List/ListHead";
import StyledListElement from "../../UI/List/ListElement";
import { Fragment } from "react";

function HomeworkList() {
  return (
    <Fragment>
      <h1>Homework List</h1>
      <StyledListHead>
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
      </StyledListHead>
      <StyledListElement>
        <div>Science</div>
        <div>Laws of Motion Experiment</div>
        <NavLink to="/homeworks/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <div>English</div>
        <div>Literary Exploration</div>
        <NavLink to="/homeworks/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <div>Physics</div>
        <div>Projectile Motion Problems</div>
        <NavLink to="/homeworks/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <div>Geography</div>
        <div>Continents and Countries</div>
        <NavLink to="/homeworks/123123213">See details</NavLink>
      </StyledListElement>
      <StyledListElement>
        <div>Biology</div>
        <div>Human Anatomy Report</div>
        <NavLink to="/homeworks/123123213">See details</NavLink>
      </StyledListElement>
    </Fragment>
  );
}

export default HomeworkList;
