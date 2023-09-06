import { toast } from "react-hot-toast";
import { deleteTeacher } from "../services/apiTeachers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useDeleteTeacher() {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: DeleteTeacher } = useMutation({
    mutationFn: deleteTeacher,
    mutationKey: ["deleteTeacher"],
    onSuccess: async () => {
      toast.success("Teacher deleted successfully");
      await QueryClient.invalidateQueries({ queryKey: ["teacher"] });
      navigate("/teachers");
    },
  });
  return { isDeleting, DeleteTeacher };
}

export default useDeleteTeacher;
