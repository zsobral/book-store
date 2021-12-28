import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input,
} from "@chakra-ui/react";
import type { InputFieldProps } from "./types";

export const InputField = forwardRef((props: InputFieldProps, ref) => {
  const { id, error, label, ...rest } = props;

  return (
    <FormControl id={id} isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <Input {...rest} ref={ref} />
      <FormErrorMessage>{error ? error.message : null}</FormErrorMessage>
    </FormControl>
  );
});
