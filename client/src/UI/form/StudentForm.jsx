import StyledFormLayout from "./FormLayout";
import FormElement from "./FormElement";
import Button from "../Button/Button";
import ButtonContainer from "../Button/ButtonContainer";

function StudentForm() {
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
          Add Student
        </Button>
      </ButtonContainer>
    </StyledFormLayout>
  );
}

export default StudentForm;
