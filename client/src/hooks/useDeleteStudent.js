import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { deleteOne } from "../services/requestHelpers";
import { toast } from "react-hot-toast";

function useDeleteStudent() {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteStudent } = useMutation({
    mutationFn: deleteOne,
    mutationKey: ["deleteStudent"],
    onSuccess: async () => {
      toast.success("Student deleted successfully");
      await QueryClient.invalidateQueries({ queryKey: ["students"] });
      navigate("/students");
    },
  });
  return { isDeleting, deleteStudent };
}

export default useDeleteStudent;
