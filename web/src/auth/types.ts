import type { ReactNode } from "react";

export interface User {
  id: string;
  email: string | null;
  isAdmin: boolean;
  isAnonymous: boolean;
}

export interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface RequireAdminProps {
  children: ReactNode;
}
