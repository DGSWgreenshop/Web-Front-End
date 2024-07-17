import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import BottomTab from "@/app/components/BottomTab";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <div className={`bg-black overflow-x-hidden`}>
      {children}
      <div className={'flex justify-center items-center'}>
        <BottomTab />
      </div>
    </div>
    </body>
    </html>
  );
}
