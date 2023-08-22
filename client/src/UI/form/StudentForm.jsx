import StyledFormLayout from "./FormLayout";
import FormElement from "./FormElement";
import Button from "../Button/Button";
import ButtonContainer from "../Button/ButtonContainer";

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOne } from "../../services/requestHelpers";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthProvider";

function StudentForm() {
  const QueryClient = useQueryClient();
  const { user } = useAuth();

  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const { mutate: addStudent, isLoading: isAddingStudent } = useMutation({
    mutationFn: createOne,
    mutationKey: ["createStudent"],
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: ["students"],
      });
      toast.success("Student Added Successfully");
      reset();
    },
    onError: (err) => {
      toast.error(err);
    },
  });

  function handleSubmitForm(data) {
    const refactoredData = {
      ...data,
      teacher: user._id,
      class: user.class,
      address: "Some dummy address",
    };
    addStudent({ model: "students", refactoredData });
  }
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
      <FormElement>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", { required: "Enter your password" })}
        />
        {errors?.password?.message && <div>{errors.password.message}</div>}
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
        <Button disabled={isAddingStudent} variation="cancel" type="small">
          Cancel
        </Button>
        <Button disabled={isAddingStudent} variation="update" type="small">
          Add Student
        </Button>
      </ButtonContainer>
    </StyledFormLayout>
  );
}

export default StudentForm;
