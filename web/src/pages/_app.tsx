import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { apolloClient } from "../apollo";
import { RequireAdmin } from "../auth";

const AuthProviderNoSSR = dynamic<any>(
  () => import("../auth").then((mod) => mod.AuthProvider),
  { ssr: false }
);

function MyAppProviders({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider>
      <ApolloProvider client={apolloClient}>
        <AuthProviderNoSSR>{children}</AuthProviderNoSSR>
      </ApolloProvider>
    </ChakraProvider>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname.startsWith("/admin")) {
    return (
      <MyAppProviders>
        <RequireAdmin>
          <Component {...pageProps} />
        </RequireAdmin>
      </MyAppProviders>
    );
  }

  return (
    <MyAppProviders>
      <Component {...pageProps} />
    </MyAppProviders>
  );
}

export default MyApp;
