import { styled } from "styled-components";
import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import Modal from "../../UI/Modal";
import HomeworkForm from "../../UI/form/HomeworkForm";

const StyledChoseHomework = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

function ChoseHomework({ teacherId, classId, students }) {
  return (
    <StyledChoseHomework>
      <Modal>
        <Modal.Open>
          <Button>Give homework to spesific students</Button>
        </Modal.Open>
        <Modal.Window>
          <HomeworkForm
            teacherId={teacherId}
            classId={classId}
            students={students}
            chooseStudent={true}
          />
        </Modal.Window>
      </Modal>
      <Modal>
        <Modal.Open>
          <Button>Give homework to Class</Button>
        </Modal.Open>
        <Modal.Window>
          <HomeworkForm
            teacherId={teacherId}
            classId={classId}
            students={students}
          />
        </Modal.Window>
      </Modal>
    </StyledChoseHomework>
  );
}

export default ChoseHomework;
