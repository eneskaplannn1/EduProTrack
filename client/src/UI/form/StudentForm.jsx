import FormElement from "./FormElement";
import Button from "../Button/Button";
import ButtonContainer from "../Button/ButtonContainer";
import StyledFormLayout from "./FormLayout";

import { useAuth } from "../../context/AuthProvider";
import useEditCreateStudent from "../../hooks/useEditCreateStudent";

function StudentForm({ onCloseModal, isEditing, StudentToEdit = {} }) {
  const { _id: studentId, ...editValues } = StudentToEdit;
  const { user } = useAuth();

  const { isManipulating, handleSubmit, register, errors, handleSubmitForm } =
    useEditCreateStudent({
      isEditing,
      user,
      studentId,
      onCloseModal,
      editValues,
    });

  return (
    <StyledFormLayout onSubmit={handleSubmit(handleSubmitForm)}>
      <FormElement>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Enter your name" })}
        />
        {errors?.name?.message && <div>{errors.name.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Enter your email" })}
        />
        {errors?.email?.message && <div>{errors.email.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Enter your username" })}
        />
        {errors?.username?.message && <div>{errors.username.message}</div>}
      </FormElement>
      {!isEditing && (
        <FormElement>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Enter your password" })}
          />
          {errors?.password?.message && <div>{errors.password.message}</div>}
        </FormElement>
      )}
      <FormElement>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", { required: "Enter your age" })}
        />
        {errors?.age?.message && <div>{errors.age.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="phoneNum">Phone Number</label>
        <input
          type="tel"
          id="phoneNum"
          {...register("phoneNum", { required: "Enter your phone number" })}
        />
        {errors?.phoneNum?.message && <div>{errors.phoneNum.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          {...register("gender", { required: "Select your gender" })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </FormElement>
      <ButtonContainer>
        <Button
          onClick={onCloseModal}
          disabled={isManipulating}
          variation="cancel"
          type="small"
        >
          Cancel
        </Button>
        <Button disabled={isManipulating} variation="update" type="small">
          {isEditing ? "Update Student" : "Add Homework"}
        </Button>
      </ButtonContainer>
    </StyledFormLayout>
  );
}

export default StudentForm;
