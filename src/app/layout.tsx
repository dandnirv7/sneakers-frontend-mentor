import type { Metadata } from "next";
import localFont from "next/font/local";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { ProductProvider } from "@/context/ProductContext";
import { CartProvider } from "@/context/CartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const kumbhSans = Kumbh_Sans({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sneakers - Mini Ecommerce",
  description:
    "Sneakers is a sleek mini ecommerce site offering high-quality sneakers, designed with a modern and responsive interface inspired by Frontend Mentor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kumbhSans.className} antialiased `}
      >
        <CartProvider>
          <ProductProvider>
            <main className="px-0 py-0 md:py-5 lg:px-36 md:px-20">
              <Navbar />
              {children}
            </main>
            <Toaster />
          </ProductProvider>
        </CartProvider>
      </body>
    </html>
  );
}
