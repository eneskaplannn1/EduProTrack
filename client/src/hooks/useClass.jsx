import { useQuery } from "@tanstack/react-query";
import { getOne } from "../services/requestHelpers";

function useClass({ classId }) {
  const { data, isLoading } = useQuery({
    queryFn: () => getOne("classes", classId),
    queryKey: ["class", classId],
  });

  return { data, isLoading };
}

export default useClass;
