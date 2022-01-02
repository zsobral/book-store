import { Box, Heading, HStack, Container } from "@chakra-ui/react";
import { Fragment, ReactNode } from "react";
import { Navbar } from "./navbar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  actions?: ReactNode;
  container?: boolean;
}

function Layout(props: LayoutProps) {
  const Wrapper = props.container ? Container : Fragment;

  return (
    <Box minHeight="100vh" bg="gray.50">
      <Navbar />
      <Wrapper>
        {props.title || props.actions ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            px="4"
            pt="4"
          >
            <Heading fontSize="2xl">{props.title}</Heading>
            <HStack alignItems="center">{props.actions}</HStack>
          </Box>
        ) : null}
        <Box p="4">{props.children}</Box>
      </Wrapper>
    </Box>
  );
}

export { Layout };
