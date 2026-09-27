"use client";

import { AppShell, MantineProvider } from "@mantine/core";
import { theme } from "@/theme/theme";
import { Sidebar } from "./sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <MantineProvider theme={theme}>
      <AppShell
        navbar={{
          width: 240,
          breakpoint: "sm",
        }}
        padding="md"
      >
        <Sidebar />

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};
