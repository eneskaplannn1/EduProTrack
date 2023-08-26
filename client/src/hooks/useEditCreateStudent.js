import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOne, updateOne } from "../services/requestHelpers";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

//prettier-ignore
function useEditCreateStudent({isEditing,user,studentId,onCloseModal,editValues,teacherId,classId}) {

  const QueryClient = useQueryClient();

  const { mutate: manipulateStudent, isLoading: isManipulating } = useMutation({
    mutationFn: isEditing ? updateOne : createOne,
    mutationKey: ["manipulateStudent"],
    onSuccess: () => {
      QueryClient.invalidateQueries(["students", ["student", studentId],["class",classId]]);
      toast.success(`Student ${isEditing ? "updated" : "created"} Successfully`);
      reset();
      onCloseModal();
    },
    onError: (err) =>{
      toast.error(err.message)
    }
    ,
  });


  const {register,formState: { errors },handleSubmit,reset,} = useForm({
    defaultValues: isEditing ? editValues : "",
  });

  function handleSubmitForm(data) {
    const refactoredData = {
      ...data,
      teacher:teacherId ? teacherId: user._id,
      class:classId ? classId: user.class,
      address: "Some dummy address",
    };
    manipulateStudent({
      model: "students",
      data: refactoredData,
      id: studentId,
    });
  }
  
  return { isManipulating, handleSubmit, register, errors, handleSubmitForm };
}

export default useEditCreateStudent;