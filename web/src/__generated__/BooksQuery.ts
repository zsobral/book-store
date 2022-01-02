/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BooksQuery
// ====================================================

export interface BooksQuery_books {
  __typename: "Book";
  _id: any;
  title: string;
  description: string | null;
  slug: string;
  authors: (string | null)[];
  price: number;
  imageUrl: string;
}

export interface BooksQuery {
  books: (BooksQuery_books | null)[];
}
