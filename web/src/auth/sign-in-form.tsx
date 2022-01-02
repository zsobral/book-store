import { Button, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { InputField } from "../components/fields";
import { useAuth } from "./auth-provider";

type FormData = {
  email: string;
  password: string;
};

export function SignInForm() {
  const { login } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    await login(data.email, data.password);
  });

  return (
    <form onSubmit={onSubmit}>
      <VStack spacing="4" alignItems="flex-start">
        <InputField
          id="email"
          label="Email"
          error={errors.email}
          {...register("email", { required: "Required" })}
        />
        <InputField
          id="password"
          label="Password"
          error={errors.password}
          type="password"
          {...register("password", { required: "Required" })}
        />
        <Button type="submit" isLoading={isSubmitting} colorScheme="green">
          Sign in
        </Button>
      </VStack>
    </form>
  );
}
