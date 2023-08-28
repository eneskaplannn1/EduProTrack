import { toast } from "react-hot-toast";
import { deleteHomework } from "../services/apiHomeworks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useDeleteHomework() {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: DeleteHomework } = useMutation({
    mutationFn: deleteHomework,
    mutationKey: ["deleteHomework"],
    onSuccess: async () => {
      toast.success("Homework deleted successfully");
      await QueryClient.invalidateQueries({ queryKey: ["homeworks"] });
      navigate("/homeworks");
    },
  });
  return { isDeleting, DeleteHomework };
}

export default useDeleteHomework;
