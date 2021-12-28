import type { InputProps } from "@chakra-ui/react";

export interface InputFieldProps extends InputProps {
  label: string;
  id: string;
  error: any;
}
