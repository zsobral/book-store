declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_REALM_APP_ID: string;
    readonly REACT_APP_REALM_GRAPHQL_URL: string;
  }
}
