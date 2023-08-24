import StyledFormLayout from "./FormLayout";
import FormElement from "./FormElement";
import ButtonContainer from "../Button/ButtonContainer";
import Button from "../Button/Button";
import useEditCreateTeacher from "../../hooks/useEditCreateTeacher";

function TeacherForm({ onCloseModal, isEditing, TeacherToEdit = {} }) {
  const { _id: teacherId, ...editValues } = TeacherToEdit;

  const { handleSubmitForm, register, handleSubmit, errors } =
    useEditCreateTeacher({ teacherId, editValues, onCloseModal, isEditing });

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
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", { required: "Enter your name" })}
        />
        {errors?.username?.message && <div>{errors.username.message}</div>}
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
        <label htmlFor="address">Address</label>
        <input
          type="address"
          id="address"
          {...register("address", { required: "Enter your address" })}
        />
        {errors?.address?.message && <div>{errors.address.message}</div>}
      </FormElement>
      <FormElement>
        <label htmlFor="phoneNum">Phone Number</label>
        <input
          type="text"
          id="phoneNum"
          {...register("phoneNum", { required: "Enter your phone number" })}
        />
        {errors?.phoneNum?.message && <div>{errors.phoneNum.message}</div>}
      </FormElement>
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
        <Button variation="cancel" type="small" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="update" type="small">
          {isEditing ? "Update Teacher data" : "Add Teacher"}
        </Button>
      </ButtonContainer>
    </StyledFormLayout>
  );
}

export default TeacherForm;
