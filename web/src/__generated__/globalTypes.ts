/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface BookInsertInput {
  slug: string;
  title: string;
  _id?: any | null;
  authors: (string | null)[];
  description?: string | null;
  imageUrl: string;
  price: number;
}

export interface SearchBooksInput {
  search?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
