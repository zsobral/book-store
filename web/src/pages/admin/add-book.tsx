import { Box, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import { AddBook } from "../../components/add-book";
import { Layout } from "../../components/layout";

const AddBookPage: NextPage = () => {
  return (
    <Layout title="Add book" container>
      <Box
        borderWidth="1px"
        borderColor="gray.200"
        p="4"
        bg="white"
        borderRadius="lg"
      >
        <AddBook />
      </Box>
    </Layout>
  );
};

export default AddBookPage;
