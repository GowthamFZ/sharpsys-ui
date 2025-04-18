"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Poppins } from "next/font/google";
import "../globals.css";
import { useState, createContext, useMemo } from 'react';
import dynamic from "next/dynamic";

const DialogWithForm = dynamic(() => import('@/components/Dialog'), {
  ssr: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const DialogContext = createContext({
  open: false,
  setOpen: (val: boolean) => {},
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  // Memoize the context value
  const dialogContextValue = useMemo(() => ({ open, setOpen }), [open]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`dark:bg-black ${poppins.className}`}>
        <DialogContext.Provider value={dialogContextValue}>
          <Header />
          {children}
          <DialogWithForm />
          <Footer />
          <ScrollToTop />
        </DialogContext.Provider>
      </body>
    </html>
  );
}
