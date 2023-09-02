import { styled } from "styled-components";
import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";

const StyledEvaluateHomework = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function EvaluateHomework({ handleHomeworkStatus, onCloseModal, isSending }) {
  return (
    <StyledEvaluateHomework>
      <ButtonContainer variation="column">
        <Button
          onClick={() => {
            handleHomeworkStatus("Successful");
            onCloseModal();
          }}
          variation="positive"
        >
          {isSending ? "Setting Homework Status" : "Success"}
        </Button>
        <Button
          onClick={() => {
            handleHomeworkStatus("Failed");
            onCloseModal();
          }}
          variation="negative"
        >
          {isSending ? "Setting Homework Status" : "Fail"}
        </Button>
      </ButtonContainer>
    </StyledEvaluateHomework>
  );
}

export default EvaluateHomework;
