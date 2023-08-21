import img1 from "../Screenshot_6.png";

import Modal from "../../UI/Modal";
import StudentForm from "../../UI/form/StudentForm";
import BackButton from "../../UI/Button/BackButton";
import Button from "../../UI/Button/Button";
import { DetailImage, DetailInfo } from "../../UI/Detail";
import ButtonContainer from "../../UI/Button/ButtonContainer";

function StudentDetail() {
  return (
    <>
      <BackButton />

      <DetailImage>
        <img src={img1} />
      </DetailImage>
      <DetailInfo>
        <div>FullName : Enes Kaplan</div>
        <div>Email : deneme@gmail.com</div>
        <div>Phone : +80 487612374</div>
        <div>Address : Some dummy address</div>
        <div>Gender : Male</div>
        <div>Age : 19</div>
        <div>Admission Date : 13.09.2022</div>
        <div>Class : 12/B</div>
        <div>Role : Student</div>
      </DetailInfo>
      <ButtonContainer>
        <Modal>
          <Modal.Open opens="update-student">
            <Button size="small" variation="update">
              Update Student
            </Button>
          </Modal.Open>
          <Modal.Window name="update-student">
            <StudentForm />
          </Modal.Window>
        </Modal>
        <Button type="small" variation="delete">
          Delete Student
        </Button>
      </ButtonContainer>
    </>
  );
}

export default StudentDetail;
