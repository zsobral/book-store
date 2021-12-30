import { Box, Button, Text } from "@chakra-ui/react";
import { useAuth } from "../auth";

export function TopBar() {
  const { user, logout } = useAuth();

  return (
    <Box
      display="flex"
      alignItems="center"
      px="4"
      height="64px"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      justifyContent="space-between"
    >
      <Text fontSize="4xl" fontWeight="medium">
        📚 book store
      </Text>
      <Button onClick={logout} variant="ghost">
        logout
      </Button>
    </Box>
  );
}
