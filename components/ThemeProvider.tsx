"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps as NextThemeProviderProps } from "next-themes";
import { ReactNode } from "react";

// Use the exact types from next-themes
interface ThemeProviderProps extends Omit<NextThemeProviderProps, 'children'> {
  children: ReactNode;
}

export function ThemeProvider({ 
  children, 
  ...props 
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}