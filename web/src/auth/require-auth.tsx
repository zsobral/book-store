import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./auth-provider";
import type { RequireAuthProps } from "./types";

export function RequireAuth(props: RequireAuthProps) {
  const { user } = useAuth();
  const router = useRouter();
  const isNotAuthenticated = user === null;

  useEffect(() => {
    if (isNotAuthenticated) {
      router.push({ pathname: "/auth" });
    }
  }, [isNotAuthenticated, router]);

  if (isNotAuthenticated) {
    return null;
  }

  return <>{props.children}</>;
}
