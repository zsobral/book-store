import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import { Books } from "../../components/books";
import { Layout } from "../../components/layout";

const Admin: NextPage = () => {
  return (
    <Layout
      title="Books"
      actions={
        <NextLink href="/admin/add-book" passHref>
          <Button as="a" colorScheme="green">
            Add book
          </Button>
        </NextLink>
      }
    >
      <Books />
    </Layout>
  );
};

export default Admin;
