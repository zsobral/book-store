import type {
  InputProps,
  TextareaProps,
  NumberInputFieldProps as ChakraNumberInputFieldProps,
} from "@chakra-ui/react";

interface FieldProps {
  label: string;
  id: string;
  error: any;
}

export type InputFieldProps = InputProps & FieldProps;

export type TextareaFieldProps = TextareaProps & FieldProps;

export type NumberInputFieldProps = ChakraNumberInputFieldProps & FieldProps;
