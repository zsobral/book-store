import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { RequireAuth, useAuth } from "../../auth";

const Admin: NextPage = () => {
  const { logout } = useAuth();

  return (
    <RequireAuth>
      protected route<Button onClick={() => logout()}>logout</Button>
    </RequireAuth>
  );
};

export default Admin;
