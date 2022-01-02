import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Input,
  InputProps,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as NumberInputContainer,
  NumberInputField as NumberInput,
  NumberInputFieldProps as NumberInputProps,
  NumberInputProps as NumberInputContainerProps,
  NumberInputStepper,
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

const NumberInputField = forwardRef((props: NumberInputFieldProps, ref) => {
  const { id, error, label, containerProps, ...inputProps } = props;

  return (
    <FormControl id={id} isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <NumberInputContainer {...containerProps}>
        <NumberInput {...inputProps} ref={ref} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInputContainer>
      <FormErrorMessage>{error ? error.message : null}</FormErrorMessage>
    </FormControl>
  );
});

export { InputField, TextareaField, NumberInputField };
