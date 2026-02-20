/**
 * Layout racine — Header, Breadcrumbs, main, Footer.
 * Wrappé autour de toutes les pages de l'application.
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <Breadcrumbs />
        {children}
      </main>
      <Footer />
    </>
  );
}
