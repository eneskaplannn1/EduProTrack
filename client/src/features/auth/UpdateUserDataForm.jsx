import { styled } from "styled-components";

import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import FormElement from "../../UI/form/FormElement";
import StyledFormLayout from "../../UI/form/FormLayout";

import useUpdateUserData from "../../hooks/useUpdateUserData";

const StyledDiv = styled.div`
  margin: 1rem 0;

  h4 {
    margin-bottom: 1rem;
  }
`;

function UpdateUserDataForm({ user, updateUser }) {
  const { handleSubmitForm, isUpdating, handleSubmit, errors, register } =
    useUpdateUserData({ user, updateUser });

  return (
    <StyledDiv>
      <h4>Update User Data</h4>
      <StyledFormLayout onSubmit={handleSubmit(handleSubmitForm)}>
        <FormElement>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            {...register("email", { required: "Enter your email" })}
          />
          {errors?.email?.message && <div>{errors.email.message}</div>}
        </FormElement>
        <FormElement>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="John Doe"
            {...register("username", { required: "Enter your username" })}
          />
          {errors?.username?.message && <div>{errors.username.message}</div>}
        </FormElement>
        <FormElement>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            {...register("name", { required: "Enter your name" })}
          />
          {errors?.name?.message && <div>{errors.name.message}</div>}
        </FormElement>
        <FormElement>
          <label htmlFor="phoneNum">Phone number</label>
          <input
            type="text"
            id="phoneNum"
            placeholder="John Doe"
            {...register("phoneNum", { required: "Enter your phone number" })}
          />
          {errors?.phoneNum?.message && <div>{errors.phoneNum.message}</div>}
        </FormElement>
        <FormElement>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="John Doe"
            {...register("age", { required: "Enter your age" })}
          />
          {errors?.age?.message && <div>{errors.age.message}</div>}
        </FormElement>
        {/* <FormElement>
          <label htmlFor="avatar">Avatar Image</label>
          <input type="file" id="avatar" accept="image/*"  />
        </FormElement> */}
        <ButtonContainer>
          <Button size="small" variation="cancel">
            Cancel
          </Button>
          <Button size="small" variation="update">
            {isUpdating ? "Updating user" : "Update user"}
          </Button>
        </ButtonContainer>
      </StyledFormLayout>
    </StyledDiv>
  );
}

export default UpdateUserDataForm;
