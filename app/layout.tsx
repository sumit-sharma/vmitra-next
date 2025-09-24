import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VyavasayMitra | Complete Business Solutions",
  description:
    "India’s Trusted Platform for Complete Business Solutions: company registrations, compliance, taxation, accounting, and growth advisory.",
  metadataBase: new URL("https://vyavasaymitra.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
