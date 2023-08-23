import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import formatHumanReadableDate from "../utils/formatHumanReadableDate";
import { useAuth } from "../context/AuthProvider";
import { createOne, updateOne } from "../services/requestHelpers";

function useEditCreateHomework({
  isEditing,
  editValues,
  homeworkId,
  onCloseModal,
}) {
  const { user } = useAuth();

  const QueryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditing
      ? {
          ...editValues,
          startDate: formatHumanReadableDate(editValues.startDate),
          expirationDate: formatHumanReadableDate(editValues.expirationDate),
        }
      : "",
  });

  const { mutate: manipulateHomework } = useMutation({
    mutationFn: isEditing ? updateOne : createOne,
    mutationKey: ["manipulateHomework"],
    onSuccess: () => {
      toast.success(
        `Homework ${isEditing ? "updated" : "created"} Successfully`
      );
      QueryClient.invalidateQueries(["homeworks", ["homework", homeworkId]]);
      reset();
      onCloseModal();
    },
  });

  function handleSubmitForm(data) {
    const refactoredData = { ...data, teacher: user._id, class: user.class };
    manipulateHomework({
      model: "homeworks",
      data: refactoredData,
      id: homeworkId,
    });
  }
  return { register, handleSubmit, errors, handleSubmitForm };
}

export default useEditCreateHomework;
