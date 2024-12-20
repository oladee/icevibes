import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Ice Vibe Lagos",
  description: "SKATE. PARTY. GAME.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.svg" />
      </Head>
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
