import { gql, useMutation } from "@apollo/client";
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
  return useMutation<AddBook, AddBookVariables>(addBookMutation);
}

export { useAddBook };
