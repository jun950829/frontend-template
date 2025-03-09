'use client'; 

import { useThemeStore } from "@/store/useThemeStore";
import { ReactNode, useEffect } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useThemeStore((state) => state.theme);
  // const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {

  }, []);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);


  return <>{children}</>;
}