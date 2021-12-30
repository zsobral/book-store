import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./auth-provider";
import type { RequireAdminProps } from "./types";

export function RequireAdmin(props: RequireAdminProps) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user?.isAdmin) {
      router.push({ pathname: "/" });
    }
  }, [router, user?.isAdmin]);

  if (!user?.isAdmin) {
    return null;
  }

  return <>{props.children}</>;
}
