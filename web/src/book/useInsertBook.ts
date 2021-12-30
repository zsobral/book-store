import { gql, useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import {
  InsertBookMutation,
  InsertBookMutationVariables,
} from "../__generated__/InsertBookMutation";

const insertBookMutation = gql`
  mutation InsertBookMutation($data: BookInsertInput!) {
    insertOneBook(data: $data) {
      _id
      title
      description
      slug
    }
  }
`;

export function useInsertBook() {
  const toast = useToast();

  return useMutation<InsertBookMutation, InsertBookMutationVariables>(
    insertBookMutation,
    {
      refetchQueries: ["BooksQuery"],
      onCompleted: () => {
        toast({
          title: "Book added",
          description: "book addded successful.",
          status: "success",
          isClosable: true,
        });
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          isClosable: true,
        });
      },
    }
  );
}
