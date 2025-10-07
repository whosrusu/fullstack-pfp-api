import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pfps Generator with AI",
  description: "hello word",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="smooth-container" className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
