import type { Metadata } from "next";
import { Geist, Geist_Mono , Poppins, Noto_Sans, Montserrat} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: '400',
  subsets: ['latin']
})

const montserrat = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hope-Dev-Ethiopia",
  description: "Code with love!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${notoSans.variable} ${montserrat.variable} ${poppins.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}