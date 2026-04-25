import type { Metadata } from "next";
import { Oswald, Lora, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingEmergencyButton from "@/components/FloatingEmergencyButton";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
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
      className={`${openSans.variable} ${oswald.variable} ${lora.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans text-brand-charcoal bg-brand-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FloatingEmergencyButton />
        <Footer />
      </body>
    </html>
  );
}
