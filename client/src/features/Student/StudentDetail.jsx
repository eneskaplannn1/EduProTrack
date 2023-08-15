import classes from "./StudentDetail.module.css";

import img1 from "../Screenshot_6.png";

import { ImArrowLeft2 } from "react-icons/im";

function StudentDetail() {
  return (
    <div className={classes.container}>
      <div className={classes.back}>
        <ImArrowLeft2 />
        <span>Go back</span>
      </div>
      <div className={classes.photo}>
        <img src={img1} />
      </div>
      <div className={classes.info}>
        <div>FullName : Enes Kaplan</div>
        <div>Email : deneme@gmail.com</div>
        <div>Phone : +80 487612374</div>
        <div>Address : Some dummy address</div>
        <div>Gender : Male</div>
        <div>Age : 19</div>
        <div>Admission Date : 13.09.2022</div>
        <div>Class : 12/B</div>
        <div>Role : Student</div>
      </div>
      <div className={classes.manage}>
        <button>Update Information</button>
        <button className={classes.delete}>Delete Account</button>
      </div>
    </div>
  );
}

export default StudentDetail;
