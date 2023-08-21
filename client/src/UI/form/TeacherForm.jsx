import StyledFormLayout from "./FormLayout";
import FormElement from "./FormElement";
import ButtonContainer from "../Button/ButtonContainer";
import Button from "../Button/Button";

function TeacherForm() {
  return (
    <StyledFormLayout>
      <FormElement>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </FormElement>
      <FormElement>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </FormElement>
      <FormElement>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </FormElement>
      <FormElement>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </FormElement>
      <ButtonContainer>
        <Button variation="cancel" type="small">
          Cancel
        </Button>
        <Button variation="update" type="small">
          Add Teacher
        </Button>
      </ButtonContainer>
    </StyledFormLayout>
  );
}

export default TeacherForm;
