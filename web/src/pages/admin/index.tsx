import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useBooks } from "../../book";
import { BookForm } from "../../book/book-form";
import { Layout } from "../../layout";

const Admin: NextPage = () => {
  const { data, loading, error, refetch } = useBooks();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const spinnerMarkup = (
    <Center padding="16">
      <Spinner size="xl" color="green" thickness="4px" />
    </Center>
  );

  const errorMarkup = (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      padding="4"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Error
      </Text>
      <Text>{error?.message}</Text>
      <Button mt={4} onClick={() => refetch()}>
        try again
      </Button>
    </Box>
  );

  const pageActionsMarkup = (
    <Button onClick={onOpen} colorScheme="green">
      add book
    </Button>
  );

  const tableMarkup = (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Title</Th>
          <Th>Slug</Th>
          <Th>Authors</Th>
          <Th>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.books.map((book) => (
          <Tr key={book?._id}>
            <Td>{book?._id}</Td>
            <Td>{book?.title}</Td>
            <Td>{book?.slug}</Td>
            <Td>{book?.authors?.join()}</Td>
            <Td isNumeric>${book?.price}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );

  const modalMarkup = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New book</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <BookForm onSuccess={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  const renderTable = () => {
    if (error) {
      return errorMarkup;
    }

    if (loading) {
      return spinnerMarkup;
    }

    return tableMarkup;
  };

  return (
    <Layout title="Books" actions={pageActionsMarkup}>
      <Box borderWidth="1px" borderColor="gray.200" p="2" bg="white">
        {renderTable()}
      </Box>
      {modalMarkup}
    </Layout>
  );
};

export default Admin;
