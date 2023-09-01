import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { HandleLogin } from "../services/apiAuth";
import { toast } from "react-hot-toast";

function useLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useAuth();
  if (user) navigate(location?.state?.from ? location.state.from : "/");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "emily_johnson@example.co",
      password: "pass1234",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: HandleLogin,
    queryKey: ["user"],
    onSuccess: (data) => {
      if (!data) return;
      login(data.data.data.user, data.data.token);
      toast.success("Logged in successfully!");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmitForm(data) {
    mutate(data);
  }

  return { register, errors, handleSubmit, onSubmitForm, isLoading };
}

export default useLogin;
