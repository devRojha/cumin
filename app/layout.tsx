import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Appbar from "@/components/Appbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumin Aerospace and Technology",
  description: "A Drone Compney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Appbar /> */}
        {children}
        {/* footer  */}
        <div className="h-[400px] text-white py-10 px-10 bg-white">
          <div className="h-[2px] bg-slate-400"></div>
        </div>
        <div className="bg-green-600 text-center text-white text-sm">All rights reserved</div>
      </body>
    </html>
  );
}
