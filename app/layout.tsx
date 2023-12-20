import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { SiteProvider } from "./context/siteContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteProvider>
      <html lang="en">
        <body className="flex">
          <Sidebar />
          <main className="flex-1">
            <Toaster />
            {children}
          </main>
        </body>
      </html>
    </SiteProvider>
  );
}
