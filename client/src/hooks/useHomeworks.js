import { useQuery } from "@tanstack/react-query";
import {
  getHomeworks,
  getStudentHomeworks,
  getTeacherHomeworks,
} from "../services/apiHomeworks";

function useHomeworks(user) {
  const { data, isLoading } = useQuery({
    queryFn:
      user.role === "Student"
        ? () => getStudentHomeworks(user._id)
        : user.role === "Teacher"
        ? () => getTeacherHomeworks(user._id)
        : () => getHomeworks(),
    queryKey: ["homeworks"],
  });

  return { data, isLoading };
}

export default useHomeworks;
