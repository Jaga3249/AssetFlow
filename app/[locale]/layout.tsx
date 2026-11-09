import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { routing } from "@/i18n/routing";

interface LocaleLayoutProps {
  children: React.ReactNode;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({ children }: LocaleLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html {...mantineHtmlProps} lang={locale}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>

      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
