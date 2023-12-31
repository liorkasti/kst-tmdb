"use client";

import { ProviderProps } from "@config";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }: ProviderProps) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
