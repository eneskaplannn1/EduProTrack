import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";
import Button from "../../UI/Button/Button";
import BackButton from "../../UI/Button/BackButton";
import { DetailInfo } from "../../UI/Detail";
import ButtonContainer from "../../UI/Button/ButtonContainer";

function HomeworkDetail() {
  return (
    <>
      <BackButton />
      <DetailInfo>
        <div>Subject : Enes Kaplan</div>
        <div>Topic : deneme@gmail.com</div>
        <div>Description : +80 487612374</div>
        <div>Status : Some dummy address</div>
        <div>Teacher : Male</div>
        <div>Students : 19</div>
        <div>Starting Date : 11.09.2022</div>
        <div>Expiration Date : 13.09.2022</div>
      </DetailInfo>
      <ButtonContainer>
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
      </ButtonContainer>
    </>
  );
}

export default HomeworkDetail;
