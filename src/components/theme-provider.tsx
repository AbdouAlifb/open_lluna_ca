"use client";

import * as React from "react";
import { ThemeProvider as NextThemes } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemes
      attribute="data-theme"
      defaultTheme="light"
      themes={["light","brand"]}
      enableSystem={false}
    >
      {children}
    </NextThemes>
  );
}
