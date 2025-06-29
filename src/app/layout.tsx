import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import "../styles/style.css";
import { MembershipModalProvider } from "@/context/MembershipModalContext";
import MembershipModal from "@/components/MembershipModal";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CXO",
  description: "CXO House - The private network for Chief Experience and Customer Officers",
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
        <MembershipModalProvider>
          {children}
          <MembershipModal />
        </MembershipModalProvider>
      </body>
    </html>
  );
}
