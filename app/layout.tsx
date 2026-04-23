import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingEmergencyButton from "@/components/FloatingEmergencyButton";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Health Emergency Initiative",
    default: "Health Emergency Initiative Nigeria",
  },
  description: "Health Emergency Initiative — Saving Lives Across Nigeria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-dark bg-white dark:bg-brand-dark dark:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingEmergencyButton />
        <Footer />
      </body>
    </html>
  );
}
