import type { ReactNode } from "react";
import Navbar from "@/app/components/Navbar"; // Ensure correct import path
import Footer from "@/app/components/Footer"; // Ensure correct import path
import "@/app/globals.css"; // Load global styles

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
