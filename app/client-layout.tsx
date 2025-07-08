'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/shared/Navbar";
import FooterSection from "@/components/shared/Footer";
import BottomNav from "@/components/shared/bottom-nav";
import NavBanner from "@/components/shared/nav-banner";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const pathname = usePathname()
    if(pathname === "/login" || pathname === "/sign-up") {
        return(
            <>
                {children}
            </>
        )
    }
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBanner />
          <Navbar />
          {children}
          <FooterSection />
          <BottomNav />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
