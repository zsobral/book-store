import { gql, useQuery } from "@apollo/client";
import {
  SearchBooks,
  SearchBooksVariables,
} from "../__generated__/SearchBooks";

const booksQuery = gql`
  query SearchBooks($input: SearchBooksInput) {
    searchBooks(input: $input) {
      _id
      title
      description
      slug
      authors
      price
      imageUrl
    }
  }
`;

function useBooks(input?: SearchBooksVariables["input"]) {
  return useQuery<SearchBooks, SearchBooksVariables>(booksQuery, {
    variables: { input },
  });
}

export { useBooks };
