import { Box, Heading, HStack } from "@chakra-ui/react";
import { TopBar } from "./TopBar";
import type { LayoutProps } from "./types";

export function Layout(props: LayoutProps) {
  return (
    <Box minHeight="100vh" bg="gray.50">
      <TopBar />
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m="4"
      >
        <Heading fontSize="2xl">{props.title}</Heading>
        <HStack alignItems="center">{props.actions}</HStack>
      </Box>
      <Box m="4">{props.children}</Box>
    </Box>
  );
}
