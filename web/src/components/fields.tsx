import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input,
  InputProps,
  NumberInputFieldProps as NumberInputProps,
  NumberInputProps as NumberInputContainerProps,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";

interface Field {
  label: string;
  id: string;
  error: any;
}

type InputFieldProps = InputProps & Field;

type TextareaFieldProps = TextareaProps & Field;

type NumberInputFieldProps = {
  containerProps: NumberInputContainerProps;
} & NumberInputProps &
  Field;

const InputField = forwardRef((props: InputFieldProps, ref) => {
  const { id, error, label, ...inputProps } = props;

  return (
    <FormControl id={id} isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <Input {...inputProps} ref={ref} />
      <FormErrorMessage>{error ? error.message : null}</FormErrorMessage>
    </FormControl>
  );
});

const TextareaField = forwardRef((props: TextareaFieldProps, ref) => {
  const { id, error, label, ...textareaProps } = props;

  return (
    <FormControl id={id} isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <Textarea {...textareaProps} ref={ref} />
      <FormErrorMessage>{error ? error.message : null}</FormErrorMessage>
    </FormControl>
  );
});

export { InputField, TextareaField };
