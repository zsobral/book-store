/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BookInsertInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddBook
// ====================================================

export interface AddBook_insertOneBook {
  __typename: "Book";
  _id: any;
  authors: (string | null)[];
  description: string | null;
  imageUrl: string;
  price: number;
  slug: string;
  title: string;
}

export interface AddBook {
  insertOneBook: AddBook_insertOneBook | null;
}

export interface AddBookVariables {
  data: BookInsertInput;
}
