import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField as ChakraNumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import type { NumberInputFieldProps } from "./types";

export const NumberInputField = forwardRef(
  (props: NumberInputFieldProps, ref) => {
    const { id, error, label, ...rest } = props;

    return (
      <FormControl id={id} isInvalid={Boolean(error)}>
        <FormLabel>{label}</FormLabel>
        <NumberInput>
          <ChakraNumberInputField {...rest} ref={ref} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>{error ? error.message : null}</FormErrorMessage>
      </FormControl>
    );
  }
);
