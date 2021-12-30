/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BooksQuery
// ====================================================

export interface BooksQuery_books {
  __typename: "Book";
  _id: any | null;
  title: string;
  description: string | null;
  slug: string;
  authors: (string | null)[] | null;
  price: number | null;
}

export interface BooksQuery {
  books: (BooksQuery_books | null)[];
}
