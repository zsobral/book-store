import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Fragment, ReactNode } from "react";
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
  const GuardComponent = router.pathname.startsWith("/admin")
    ? RequireAdmin
    : Fragment;

  return (
    <MyAppProviders>
      <GuardComponent>
        <Component {...pageProps} />
      </GuardComponent>
    </MyAppProviders>
  );
}

export default MyApp;
