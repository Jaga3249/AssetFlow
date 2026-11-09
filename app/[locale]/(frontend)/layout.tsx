import { RootLayout } from "@/components/root-layout/root-layout";

interface FrontendLayoutProps {
  children: React.ReactNode;
}

export default function FrontendLayout({ children }: FrontendLayoutProps) {
  return <RootLayout>{children}</RootLayout>;
}
