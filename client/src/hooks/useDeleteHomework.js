import { toast } from "react-hot-toast";
import { DeleteHomework } from "../services/requestHelpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useDeleteHomework() {
  const navigate = useNavigate();
  const QueryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteHomework } = useMutation({
    mutationFn: DeleteHomework,
    mutationKey: ["deleteHomework"],
    onSuccess: async () => {
      toast.success("Homework deleted successfully");
      await QueryClient.invalidateQueries({ queryKey: ["homeworks"] });
      navigate("/homeworks");
    },
  });
  return { isDeleting, deleteHomework };
}

export default useDeleteHomework;
