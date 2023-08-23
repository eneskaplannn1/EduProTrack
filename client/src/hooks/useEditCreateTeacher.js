import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { createOne, updateOne } from "../services/requestHelpers";
import { toast } from "react-hot-toast";

//prettier-ignore
function useEditCreateTeacher({ isEditing, editValues, teacherId ,onCloseModal}) {
  const QueryClient = useQueryClient();

  const {register,handleSubmit,reset,formState: { errors }} = useForm({
    defaultValues: isEditing ? editValues : "",
  });

  const { mutate: AddEditTeacher } = useMutation({
    mutationFn: isEditing ? updateOne : createOne,
    mutationKey: ["manipulateTeacher"],
    onSuccess: () => {
      toast.success(
        `Teacher ${isEditing ? "updated" : "created"}  successfully`
      );
      QueryClient.invalidateQueries({ queryKey: ["teachers"] });
      reset();
      onCloseModal();
    },
    onError: (err) => toast.error(err)
  });

  function handleSubmitForm(data) {
    AddEditTeacher({ model: "teachers", data, id: teacherId });
  }
  return {handleSubmitForm,register,handleSubmit,errors};
}

export default useEditCreateTeacher;
