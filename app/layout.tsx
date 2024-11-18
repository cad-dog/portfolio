import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "./ui/portfolio/navigation";

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

export const metadata: Metadata = {
  title: { template: "Portfolio | %s", default: "Portfolio" },
  description: "Here you can find information about me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="text-gray-100 bg-gradient-to-t from-slate-950 to-slate-800 min-h-screen"
      lang="en"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
