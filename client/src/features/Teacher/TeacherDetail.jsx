import Modal from "../../UI/Modal";
import TeacherForm from "../../UI/form/TeacherForm";
import BackButton from "../../UI/Button/BackButton";

import img1 from "../Screenshot_6.png";
import { DetailImage, DetailInfo } from "../../UI/Detail";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import Button from "../../UI/Button/Button";

function TeacherDetail() {
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
        <div>Role : Teacher</div>
      </DetailInfo>
      <ButtonContainer>
        <Modal>
          <Modal.Open opens="update-teacher">
            <Button type="small" variation="update">
              Update Teacher
            </Button>
          </Modal.Open>
          <Modal.Window name="update-teacher">
            <TeacherForm />
          </Modal.Window>
        </Modal>
        <Button type="small" variation="delete">
          Delete Teacher
        </Button>
      </ButtonContainer>
    </>
  );
}

export default TeacherDetail;
