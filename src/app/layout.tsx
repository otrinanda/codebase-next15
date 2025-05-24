import type { Metadata } from "next";
import {
  Poppins,
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";
import ConfirmationModal from "@/components/ui/ConfirmationModal";
import Toaster from "@/components/ui/toaster";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  weight: ["400", "500", "600", "700"],
});
const jakartaplus = Plus_Jakarta_Sans({
  variable: "--font-jakartaplus",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Design System",
  description: "A Next.js 15 app with Tailwind CSS 4 and Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage.variable} ${poppins.variable} ${jakartaplus.variable} bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50`}
      >
        <AppLayout showSidebar={true}>{children}</AppLayout>
        <ConfirmationModal />
        <Toaster />
      </body>
    </html>
  );
}
