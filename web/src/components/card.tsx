import { chakra } from "@chakra-ui/react";

const Card = chakra("div", {
  baseStyle: {
    borderRadius: "lg",
    borderWidth: "1px",
    borderColor: "gray.200",
    overflow: "hidden",
    bg: "white",
    p: "4",
  },
});

export { Card };
