import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Textarea,
} from "@chakra-ui/react";
import type { TextareaFieldProps } from "./types";

export const TextareaField = forwardRef((props: TextareaFieldProps, ref) => {
  const { id, error, label, ...rest } = props;

  return (
    <FormControl id={id} isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <Textarea {...rest} ref={ref} />
      <FormErrorMessage>{error ? error.message : null}</FormErrorMessage>
    </FormControl>
  );
});
