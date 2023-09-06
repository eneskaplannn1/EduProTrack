import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { deleteStudent } from "../services/apiStudents";

function useDeleteStudent() {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: DeleteStudent } = useMutation({
    mutationFn: deleteStudent,
    mutationKey: ["deleteStudent"],
    onSuccess: async () => {
      toast.success("Student deleted successfully");
      await QueryClient.invalidateQueries({ queryKey: ["students"] });
      navigate("/students");
    },
  });
  return { isDeleting, DeleteStudent };
}

export default useDeleteStudent;
