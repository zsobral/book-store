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
  description: string | null;
  slug: string | null;
  title: string | null;
}

export interface BooksQuery {
  books: (BooksQuery_books | null)[];
}
