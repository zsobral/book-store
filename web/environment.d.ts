declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_REALM_APP_ID: string;
    readonly NEXT_PUBLIC_REALM_GRAPHQL_URI: string;
  }
}
