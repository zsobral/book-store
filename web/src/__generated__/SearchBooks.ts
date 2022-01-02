/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SearchBooksInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: SearchBooks
// ====================================================

export interface SearchBooks_searchBooks {
  __typename: "Book";
  _id: any;
  title: string;
  description: string | null;
  slug: string;
  authors: (string | null)[];
  price: number;
  imageUrl: string;
}

export interface SearchBooks {
  searchBooks: (SearchBooks_searchBooks | null)[] | null;
}

export interface SearchBooksVariables {
  input?: SearchBooksInput | null;
}
