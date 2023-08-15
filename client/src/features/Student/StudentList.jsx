import { NavLink } from "react-router-dom";

import classes from "./StudentList.module.css";

import img1 from "../Screenshot_6.png";

function StudentList() {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <div>Students List</div>
        <button>Add new student</button>
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
