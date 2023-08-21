import StyledFormLayout from "./FormLayout";
import FormElement from "./FormElement";
import ButtonContainer from "../Button/ButtonContainer";
import Button from "../Button/Button";

function HomeworkForm() {
  return (
    <StyledFormLayout>
      <FormElement>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" />
      </FormElement>
      <FormElement>
        <label htmlFor="topic">Topic</label>
        <input type="text" id="topic" />
      </FormElement>
      <FormElement>
        <label htmlFor="description">Description</label>
        <input type="text" id="description" />
      </FormElement>
      <FormElement>
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" />
      </FormElement>
      <FormElement>
        <label htmlFor="expirationDate">Expiration Date</label>
        <input type="date" id="expirationDate" />
      </FormElement>
      <ButtonContainer>
        <Button variation="cancel" type="small">
          Cancel
        </Button>
        <Button variation="update" type="small">
          Add Homework
        </Button>
      </ButtonContainer>
    </StyledFormLayout>
  );
}

export default HomeworkForm;
