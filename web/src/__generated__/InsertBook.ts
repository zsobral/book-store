/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BookInsertInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: InsertBook
// ====================================================

export interface InsertBook_insertOneBook {
  __typename: "Book";
  _id: any | null;
  title: string | null;
}

export interface InsertBook {
  insertOneBook: InsertBook_insertOneBook | null;
}

export interface InsertBookVariables {
  data: BookInsertInput;
}
