import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MealExplorer | CMLABS Front-end Test",
  description:
    "Discover meals and ingredients powered by TheMealDB API. Built with Next.js 14 + Tailwind CSS.",
  openGraph: {
    title: "MealExplorer",
    description: "Discover meals and ingredients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-zinc-200 bg-white py-6 mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-zinc-400">
            Built with ❤️ using{" "}
            <span className="font-semibold text-brand-500">Next.js 14</span> &{" "}
            <span className="font-semibold text-brand-500">Tailwind CSS</span>{" "}
            — CMLABS Front-end Developer Pre-assessment Test
          </div>
        </footer>
      </body>
    </html>
  );
}
