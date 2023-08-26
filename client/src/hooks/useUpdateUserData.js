import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { updateMe } from "../services/requestHelpers";
import { toast } from "react-hot-toast";

function useUpdateUserData({ user, updateUser }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });

  const { mutate: updateInfo, isLoading: isUpdating } = useMutation({
    mutationFn: updateMe,
    mutationKey: [
      `${user.role === "Student" ? "students" : "teachers"}`,
      user._id,
    ],
    onSuccess: (data) => {
      updateUser(data.data.data.updatedUser);
      toast.success("Your informations updated successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function handleSubmitForm(data) {
    updateInfo({
      model: `${user.role === "Student" ? "students" : "teachers"}`,
      id: user._id,
      data,
    });
  }
  return { handleSubmitForm, isUpdating, handleSubmit, errors, register };
}

export default useUpdateUserData;
