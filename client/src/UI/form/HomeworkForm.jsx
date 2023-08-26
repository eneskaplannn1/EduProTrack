import StyledFormLayout from "./FormLayout";
import FormElement from "./FormElement";
import ButtonContainer from "../Button/ButtonContainer";
import Button from "../Button/Button";
import useEditCreateHomework from "../../hooks/useEditCreateHomework";

//prettier-ignore
function HomeworkForm({onCloseModal,HomeworkToEdit = {},isEditing=false,classId=null,teacherId=null,students=[]}) {
  const { _id: homeworkId, ...editValues } = HomeworkToEdit;

  const { register, handleSubmit, errors, handleSubmitForm } =
    useEditCreateHomework({isEditing,editValues,homeworkId,onCloseModal,classId,teacherId,students});

  return (
    <StyledFormLayout onSubmit={handleSubmit(handleSubmitForm)}>
      <FormElement>
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          {...register("subject", { required: "Homework must have subject" })}
        />
        {errors?.subject?.message && <div>{errors.subject.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="topic">Topic</label>
        <input
          type="text"
          id="topic"
          {...register("topic", { required: "Homework must have topic" })}
        />
        {errors?.topic?.message && <div>{errors.topic.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          {...register("description", {
            required: "Homework must have description",
          })}
        />
        {errors?.description?.message && (
          <div>{errors.description.message}</div>
        )}
      </FormElement>
      <FormElement>
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          {...register("startDate", {
            required: "Homework must have starting date",
          })}
        />
        {errors?.startDate?.message && <div>{errors.startDate.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="expirationDate">Expiration Date</label>
        <input
          type="date"
          id="expirationDate"
          {...register("expirationDate", {
            required: "Homework must expiration date",
          })}
        />
        {errors?.expirationDate?.message && (
          <div>{errors.expirationDate.message}</div>
        )}
      </FormElement>
      <ButtonContainer>
        <Button onClick={onCloseModal} variation="cancel" type="small">
          Cancel
        </Button>
        <Button variation="update" type="small">
          {isEditing ? "update homework" : "Add Homework"}
        </Button>
      </ButtonContainer>
    </StyledFormLayout>
  );
}

export default HomeworkForm;
