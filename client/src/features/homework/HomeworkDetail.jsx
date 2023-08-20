import classes from "./HomeworkDetail.module.css";

import { ImArrowLeft2 } from "react-icons/im";

function HomeworkDetail() {
  return (
    <>
      <div className={classes.back}>
        <ImArrowLeft2 />
        <span>Go back</span>
      </div>
      <div className={classes.info}>
        <div>Subject : Enes Kaplan</div>
        <div>Topic : deneme@gmail.com</div>
        <div>Description : +80 487612374</div>
        <div>Status : Some dummy address</div>
        <div>Teacher : Male</div>
        <div>Students : 19</div>
        <div>Starting Date : 11.09.2022</div>
        <div>Expiration Date : 13.09.2022</div>
      </div>
      <div className={classes.manage}>
        <button>Update Homework</button>
        <button className={classes.delete}>Delete Homework</button>
      </div>
    </>
  );
}

export default HomeworkDetail;
