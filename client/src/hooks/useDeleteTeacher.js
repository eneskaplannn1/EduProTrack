import { toast } from "react-hot-toast";
import { deleteOne } from "../services/requestHelpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useDeleteTeacher() {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteTeacher } = useMutation({
    mutationFn: deleteOne,
    mutationKey: ["deleteTeacher"],
    onSuccess: async () => {
      toast.success("Teacher deleted successfully");
      await QueryClient.invalidateQueries({ queryKey: ["teacher"] });
      navigate("/teachers");
    },
  });
  return { isDeleting, deleteTeacher };
}

export default useDeleteTeacher;
