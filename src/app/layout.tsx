import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Treasure",
  description: "We're embarking on a new adventure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
