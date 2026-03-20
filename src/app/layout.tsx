import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import "../styles/style.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CXO House — The Private Network for CXOs & CCOs",
  description:
    "CXO House is the private network for Chief Experience and Customer Officers—delivering insight, connection, and strategic clarity to lead through change.",
  metadataBase: new URL("https://www.cxohouse.com"),
  openGraph: {
    title: "CXO House — The Private Network for CXOs & CCOs",
    description:
      "The private network for Chief Experience and Customer Officers run by Blake Morgan.",
    type: "website",
    locale: "en_US",
    siteName: "CXO House",
  },
  twitter: {
    card: "summary_large_image",
    title: "CXO House — The Private Network for CXOs & CCOs",
    description:
      "The private network for Chief Experience and Customer Officers run by Blake Morgan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/img/favicon.png" />
      </head>
      <body className={`${interTight.variable} antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
