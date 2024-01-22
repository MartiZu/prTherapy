import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martina Zurli",
  description: "Providing a safe space for you to be yourself.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-yellow-50 text-gray-950 relative h-[5000px]`}
      >
        <div className="h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] z-10 sm:w-[68.75rem]"></div>
        <div className="h-[31.25rem] w-[50rem] rounded-full blur-[10rem] bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] -z-10 sm:w-[68.75rem] md:left-[33rem] lg:left-[28rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
