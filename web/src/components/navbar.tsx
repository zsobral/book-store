import { Box, Button, Text } from "@chakra-ui/react";
import { useAuth } from "../auth";
import { Search } from "./search";

function Navbar() {
  const { user, logout } = useAuth();
  const canLogout = user && user.isAnonymous === false;

  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      px="4"
      height="56px"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      justifyContent="space-between"
    >
      <Text fontSize="3xl" fontWeight="black" pr="4">
        SWE Books
      </Text>
      <Box flex="1" px="8">
        <Search />
      </Box>
      <Box>
        {canLogout ? (
          <Button onClick={logout} variant="ghost">
            Logout
          </Button>
        ) : null}
      </Box>
    </Box>
  );
}

export { Navbar };
