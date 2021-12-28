import { Box, Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SignInForm, useAuth } from "../../auth";

export default function Auth() {
  const { user } = useAuth();
  const isAuthenticated = user !== null;
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/admin");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null;
  }

  return (
    <Box height="100vh" bg="gray.50">
      <Center pt="8">
        <Box
          width="100%"
          maxWidth="450px"
          bg="white"
          p="4"
          shadow="base"
          borderRadius="base"
        >
          <Heading fontSize="xl" mb="4">
            Sign in
          </Heading>
          <SignInForm />
        </Box>
      </Center>
    </Box>
  );
}
