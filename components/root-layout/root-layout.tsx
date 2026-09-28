"use client";

import { AppShell, MantineProvider } from "@mantine/core";
import { theme } from "@/theme/theme";
import { sidebarConfig } from "@/sidebar-config";
import { Header } from "../header";
import { Sidebar } from "../sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{
          height: 50,
        }}
        navbar={{
          width: 240,
          breakpoint: "sm",
        }}
        padding="md"
      >
        <Header />

        <Sidebar sidebarConfig={sidebarConfig} />

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};
