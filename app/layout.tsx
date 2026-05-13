import type { Metadata } from "next";
import {IBM_Plex_Sans, Inter} from "next/font/google";
import "./globals.css";

const ibm_plex_sans = IBM_Plex_Sans({
  display: 'swap', 
  subsets: ["latin"],
  weight: ['500', '600', '700' ],
  variable: "--font-ibm-plex-sans",
});
const inter = Inter({
  display: 'swap', 
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Coffee Store",
  description: "Order premium, ethically sourced coffee beans. Small-batch roasted for peak flavor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibm_plex_sans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
