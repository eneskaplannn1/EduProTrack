import FormLayout from "./FormLayout";
import FormElement from "./FormElement";

function HomeworkForm({ isEditing }) {
  return (
    <FormLayout>
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
    </FormLayout>
  );
}

export default HomeworkForm;
