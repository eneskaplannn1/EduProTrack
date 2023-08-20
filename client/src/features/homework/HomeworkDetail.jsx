import classes from "./HomeworkDetail.module.css";

import { ImArrowLeft2 } from "react-icons/im";

import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";
import Button from "../../UI/Button";

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
        <Modal>
          <Modal.Open opens="update-homework">
            <Button variation="update" size="small">
              Update Homework
            </Button>
          </Modal.Open>
          <Modal.Window name="update-homework">
            <HomeworkForm />
          </Modal.Window>
        </Modal>
        <Button variation="delete" size="small">
          Update Homework
        </Button>
      </div>
    </>
  );
}

export default HomeworkDetail;
