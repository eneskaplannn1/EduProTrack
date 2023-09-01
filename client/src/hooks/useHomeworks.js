import { useQuery } from "@tanstack/react-query";
import {
  getStudentHomeworks,
  getTeacherHomeworks,
} from "../services/apiHomeworks";

function useHomeworks(user) {
  const { data, isLoading } = useQuery({
    queryFn:
      user.role === "Student"
        ? () => getStudentHomeworks(user._id)
        : () => getTeacherHomeworks(user._id),
    queryKey: ["homeworks"],
  });

  return { data, isLoading };
}

export default useHomeworks;
