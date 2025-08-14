import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CipherChase",
  description: "Cipher Chase - A thrilling team-based treasure hunt where QR codes hide puzzles and challenges. Solve, strategize, and race to win the ₹5000 prize pool!",
  icons: {
    icon: "/logo.png",
  },
  themeColor: "#000000",
  openGraph: {
    title: "CipherChase",
    description: "Cipher Chase - A thrilling team-based treasure hunt where QR codes hide puzzles and challenges. Solve, strategize, and race to win the ₹5000 prize pool!",
    url: "https://upsurge-cipherchase.vercel.app/",
    siteName: "CipherChase",
    images: [
      {
        url: "", 
        width: 1200,
        height: 630,
        alt: "CipherChase Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CipherChase",
    description: "Cipher Chase - A thrilling team-based treasure hunt where QR codes hide puzzles and challenges. Solve, strategize, and race to win the ₹5000 prize pool!",
    images: [
      "",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}