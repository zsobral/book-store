import { gql, useMutation } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { AddBook, AddBookVariables } from "../__generated__/AddBook";

const addBookMutation = gql`
  mutation AddBook($data: BookInsertInput!) {
    insertOneBook(data: $data) {
      _id
      authors
      description
      imageUrl
      price
      slug
      title
    }
  }
`;

function useAddBook() {
  const toast = useToast();

  return useMutation<AddBook, AddBookVariables>(addBookMutation, {
    onCompleted: () => {
      toast({ status: "success", description: "Book added." });
    },
    onError: (error) => {
      toast({ status: "error", description: error.message });
    },
  });
}

export { useAddBook };
