import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jarvis",
  description: "Job Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
