import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Box,
  Button,
  Container,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { RequireAdmin, useAuth } from "../../auth";
import { InputField } from "../../fields";
import { BooksQuery } from "../../__generated__/BooksQuery";
import {
  InsertBook,
  InsertBookVariables,
} from "../../__generated__/InsertBook";

const Admin: NextPage = () => {
  const { logout } = useAuth();

  const { data } = useQuery<BooksQuery>(gql`
    query BooksQuery {
      books {
        _id
        description
        slug
        title
      }
    }
  `);

  const [insert] = useMutation<InsertBook, InsertBookVariables>(
    gql`
      mutation InsertBook($data: BookInsertInput!) {
        insertOneBook(data: $data) {
          _id
          title
        }
      }
    `
  );

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <RequireAdmin>
      protected route<Button onClick={() => logout()}>logout</Button>
      <Container>
        <Box borderWidth="1px" borderColor="gray.200" p="2">
          <Table>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Title</Th>
                <Th>Slug</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.books.map((book) => (
                <Tr key={book?._id}>
                  <Td>{book?._id}</Td>
                  <Td>{book?.title}</Td>
                  <Td>{book?.slug}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <form
          onSubmit={handleSubmit(async (values) => {
            await insert({
              variables: {
                data: {
                  title: values.title,
                  slug: slugify(values.title),
                },
              },
            });
          })}
        >
          <InputField
            label="Title"
            id="title"
            error={errors.title}
            {...register("title", { required: "Required" })}
          />
          <Button type="submit" colorScheme="green" isLoading={isSubmitting}>
            add
          </Button>
        </form>
      </Container>
    </RequireAdmin>
  );
};

export default Admin;
