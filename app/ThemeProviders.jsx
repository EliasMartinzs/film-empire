'use client';
import { ThemeProvider } from 'next-themes';

export default function ThemeProviders({ children }) {
  return <ThemeProvider atrribute="class">{children}</ThemeProvider>;
}
