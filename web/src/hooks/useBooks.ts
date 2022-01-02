import { gql, useQuery } from "@apollo/client";
import { BooksQuery } from "../__generated__/BooksQuery";

const booksQuery = gql`
  query BooksQuery {
    books {
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

function useBooks() {
  return useQuery<BooksQuery>(booksQuery);
}

export { useBooks };
