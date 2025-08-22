import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-Bold.ttf", 
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
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
        className={`${montserrat.variable} font-sans antialiased min-h-screen bg-background`}
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
