import "@mantine/core/styles.css";
import { mantineHtmlProps } from "@mantine/core";
import { RootLayout } from "@/components/root-layout/root-layout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
