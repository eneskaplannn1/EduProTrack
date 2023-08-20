import FormLayout from "./FormLayout";
import FormElement from "./FormElement";

function TeacherForm({ isEditing }) {
  return (
    <FormLayout>
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
    </FormLayout>
  );
}

export default TeacherForm;
