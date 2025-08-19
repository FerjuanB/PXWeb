import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Project X Innovation | Expert Tech Solutions",
  description: "Transform your business with expert ERP, UI design, and EDI connection solutions from Project X Innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="pxweb-ui-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
