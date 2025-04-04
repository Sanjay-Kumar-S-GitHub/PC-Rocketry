import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: 'swap',
  weight: ["400", "500", "600", "700"]
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  display: 'swap',
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "Your Rocketry Team Website",
  description: "Official website of your college rocketry team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}