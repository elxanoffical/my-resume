"use client";

import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import Header from "@/components/Header";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {mounted && (
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <SmoothScroll>
              <Header />
              {children}
              <Contact />
            </SmoothScroll>
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
