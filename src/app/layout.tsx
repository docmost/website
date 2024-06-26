import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import React from "react";
import { theme } from "./theme";

export const metadata: Metadata = {
  title:
    "Docmost - An open-source collaborative wiki and documentation platform",
  description:
    "Docmost is an open-source collaborative wiki and documentation platform",
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
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
