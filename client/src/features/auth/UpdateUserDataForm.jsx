import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

import Button from "../../UI/Button/Button";
import ButtonContainer from "../../UI/Button/ButtonContainer";
import FormElement from "../../UI/form/FormElement";
import StyledFormLayout from "../../UI/form/FormLayout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getOne, updateOne } from "../../services/requestHelpers";
import { useAuth } from "../../context/AuthProvider";

const StyledDiv = styled.div`
  margin: 1rem 0;

  h4 {
    margin-bottom: 1rem;
  }
`;

function UpdateUserDataForm() {
  const QueryClient = useQueryClient();
  const { user } = useAuth();

  const { data, isLoading } = useQuery({
    queryFn: () =>
      getOne(`${user.role === "Student" ? "students" : "teachers"}`, user._id),
    queryKey: [
      `${user.role === "Student" ? "students" : "teachers"}`,
      user._id,
    ],
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: data?.data?.doc,
  });

  const { mutate: updateInfo, isLoading: isUpdating } = useMutation({
    mutationFn: updateOne,
    mutationKey: [
      `${user.role === "Student" ? "students" : "teachers"}`,
      user._id,
    ],
    onSuccess: () => {
      toast.success("Your informations updated successfully");
      QueryClient.invalidateQueries([
        `${user.role === "Student" ? "students" : "teachers"}`,
        user._id,
      ]);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function handleSubmitForm(data) {
    // console.log({ model: user.role.toLowerCase() + "s", id: user._id, data });
    updateInfo({ model: user.role.toLowerCase() + "s", id: user._id, data });
  }

  if (isLoading) return <ClipLoader />;

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
