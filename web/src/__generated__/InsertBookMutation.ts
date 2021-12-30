/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BookInsertInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: InsertBookMutation
// ====================================================

export interface InsertBookMutation_insertOneBook {
  __typename: "Book";
  _id: any | null;
  title: string;
  description: string | null;
  slug: string;
}

export interface InsertBookMutation {
  insertOneBook: InsertBookMutation_insertOneBook | null;
}

export interface InsertBookMutationVariables {
  data: BookInsertInput;
}
