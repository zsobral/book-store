import { useCallback, useContext, useMemo, useState } from "react";
import * as Realm from "realm-web";
import { realmApp } from "../realm";
import { AuthContext } from "./auth-context";
import type { AuthContextValue, AuthProviderProps, User } from "./types";

function getUser() {
  return realmApp.currentUser
    ? {
        id: realmApp.currentUser.id,
        email: realmApp.currentUser.profile.email ?? null,
      }
    : null;
}

export function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(getUser);

  const login = useCallback(async (email: string, password: string) => {
    const credentials = Realm.Credentials.emailPassword(email, password);
    await realmApp.logIn(credentials);
    setUser(getUser());
  }, []);

  const logout = useCallback(async () => {
    await realmApp.currentUser?.logOut();
    setUser(getUser());
  }, []);

  const refreshUser = useCallback(async () => {
    await realmApp.currentUser?.refreshCustomData();
    setUser(getUser());
  }, []);

  const value = useMemo(
    () => ({ user, login, logout, refreshUser }),
    [login, logout, refreshUser, user]
  );

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  return useContext(AuthContext);
}
