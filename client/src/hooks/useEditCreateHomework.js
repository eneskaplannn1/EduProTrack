import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import formatHumanReadableDate from "../utils/formatHumanReadableDate";
import { useAuth } from "../context/AuthProvider";
import { createHomework, updateHomework } from "../services/apiHomeworks";

function useEditCreateHomework({
  isEditing,
  editValues,
  homeworkId,
  onCloseModal,
  classId,
  teacherId,
  students,
  chooseStudent,
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
      : null,
  });

  const { mutate: manipulateHomework } = useMutation({
    mutationFn: isEditing ? updateHomework : createHomework,
    mutationKey: ["manipulateHomeworks"],
    onSuccess: () => {
      toast.success(
        `Homework ${isEditing ? "updated" : "created"} Successfully`
      );
      Promise.all([
        QueryClient.invalidateQueries(["homeworks"]),
        QueryClient.invalidateQueries(["homework", homeworkId]),
      ]),
        reset();
      onCloseModal();
    },
  });

  function handleSubmitForm(data) {
    const refactoredData = {
      ...data,
      teacher: teacherId ? teacherId : user._id,
      class: classId ? classId : user.class,
      students: chooseStudent
        ? data.students
        : students.map((student) => student._id),
    };
    console.log(refactoredData);
    manipulateHomework({
      data: refactoredData,
      id: homeworkId,
    });
  }
  return { register, handleSubmit, errors, handleSubmitForm };
}

export default useEditCreateHomework;
