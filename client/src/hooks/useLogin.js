import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { HandleLogin } from "../services/apiAuth";
import { toast } from "react-hot-toast";

function useLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { user } = useAuth();
  if (user) navigate("/");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "olivia_wilson@example.co",
      password: "pass1234",
    },
  });

  const { mutate, isLoading: isLoggingIn } = useMutation({
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

  return { register, errors, handleSubmit, onSubmitForm, isLoggingIn };
}

export default useLogin;
