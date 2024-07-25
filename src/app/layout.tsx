import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import React from "react";
import { theme } from "./theme";
import { GoogleAnalytics } from "@next/third-parties/google";
import PlausibleProvider from "next-plausible";

export const metadata: Metadata = {
  title: "Open-source collaborative wiki and documentation software | Docmost",
  description:
    "Docmost is an open-source collaborative wiki and documentation software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <PlausibleProvider
          customDomain="https://data.docmost.com"
          domain="docmost.com"
          selfHosted
        />
        <GoogleAnalytics gaId="G-15RC5C8G8H" />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
