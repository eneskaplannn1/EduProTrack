import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { createTeacher, updateTeacher } from "../services/apiTeachers";

function useEditCreateTeacher({
  isEditing,
  editValues,
  teacherId,
  onCloseModal,
}) {
  const QueryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditing ? editValues : "",
  });

  const { mutate: AddEditTeacher } = useMutation({
    mutationFn: isEditing ? updateTeacher : createTeacher,
    mutationKey: ["manipulateTeacher"],
    onSuccess: () => {
      toast.success(
        `Teacher ${isEditing ? "updated" : "created"}  successfully`
      );
      Promise.all([
        QueryClient.invalidateQueries({ queryKey: ["teachers"] }),
        teacherId
          ? QueryClient.invalidateQueries({ queryKey: ["teacher", teacherId] })
          : "",
      ]);
      reset();
      onCloseModal();
    },
    onError: (err) => toast.error(err),
  });

  function handleSubmitForm(data) {
    AddEditTeacher({ model: "teachers", data, id: teacherId });
  }
  return { handleSubmitForm, register, handleSubmit, errors };
}

export default useEditCreateTeacher;
