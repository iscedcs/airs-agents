import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Provider from "@/lib/session-provider";
import NextAuthProvider from "@/lib/providers/nextauth-provider";
import { UpdateAnnouncementComponent } from "@/components/update-announcement";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TransPay - Seamless levy payment.",
  description: "Powered By ISCE",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Provider>
        <body className={`${lato.className}`}>
          <NextAuthProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <div className="">
                <NextTopLoader color="#7F7433" showSpinner={false} />
                <UpdateAnnouncementComponent/>
                {children}
                <Toaster />
              </div>
            </ThemeProvider>
            <Analytics />
            <SpeedInsights />
          </NextAuthProvider>
        </body>
      </Provider>
    </html>
  );
}
