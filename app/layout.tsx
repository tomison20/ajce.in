import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Amal Jyothi College of Engineering | AJCE Kanjirappally",
    template: "%s | AJCE",
  },
  description:
    "Amal Jyothi College of Engineering (AJCE), Kanjirappally, Kottayam — a premier engineering institution in Kerala offering B.Tech, M.Tech, and MCA programs. NAAC 'A' grade accredited, affiliated to KTU.",
  keywords: [
    "AJCE",
    "Amal Jyothi College of Engineering",
    "engineering college Kerala",
    "B.Tech Kerala",
    "Kanjirappally engineering college",
    "KTU affiliated college",
    "NAAC A grade college",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ajce.in",
    siteName: "Amal Jyothi College of Engineering",
    title: "Amal Jyothi College of Engineering | AJCE",
    description:
      "A premier engineering institution in Kerala offering quality education since 2001.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
