import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { apolloClient } from "../apollo";

const AuthProviderNoSSR = dynamic<any>(
  () => import("../auth").then((mod) => mod.AuthProvider),
  { ssr: false }
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <AuthProviderNoSSR>
          <Component {...pageProps} />
        </AuthProviderNoSSR>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
